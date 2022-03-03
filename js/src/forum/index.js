import {extend} from 'flarum/common/extend';
import { baseKeymap } from 'tiptap-commands';
import app from 'flarum/app';
import TextEditor from 'flarum/common/components/TextEditor';
import CommentPost from 'flarum/forum/components/CommentPost';
import ComposerBody from 'flarum/components/ComposerBody';
import Button from 'flarum/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
import Alert from 'flarum/common/components/Alert';

import ReferencesModal from './components/ReferencesModal';

app.initializers.add('aradeid/flarum-references', () => {
  // adaugarea metodei pentru simularea tastei enter in rich-text
  if (flarum.extensions['askvortsov-rich-text']) {
    const {
      ProseMirrorEditorDriver
    } = flarum.extensions['askvortsov-rich-text'].proseMirror;

    ProseMirrorEditorDriver.prototype.setEnter = function() {
      // console.log(this.view.state);
      baseKeymap['Enter'](this.view.state, this.view.dispatch);
    }
    ProseMirrorEditorDriver.prototype.delete = function() {
      // console.log("sters");
      baseKeymap['Backspace'](this.view.state, this.view.dispatch);
    }
  }

  // adaugarea butonului pentru referinte in Editor la optiuni
  extend(TextEditor.prototype, 'toolbarItems', function (items) {
    // by BlockCat
    items.add(
      'references',
      Tooltip.component(
        {
          text: "Referinta",
        },
        Button.component(
          {
            className: 'Button Button--icon Button--link',
            icon: 'fas fa-link',
            onclick: () => app.modal.show(ReferencesModal),
          },
        ),
      ),
    );
    return items;
  });

  // adaugarea butonului pentru referinte in Editor in partea dreapta (portlet-ui)
  ComposerBody.prototype.sidebarMenu = function () {
    const items = new ItemList();

    items.add(
      'reference_button',
      Button.component(
          {
              // icon: 'fas fa-pencil-alt',
              className: 'Button Button--secondary',
              onclick: () => app.modal.show(ReferencesModal),
          },
          "Referinte"),
    );

    items.add(
      'reference_ctrl_button',
      Button.component(
        {
          className: 'Button Button--secondary',
          loading: this.loadingButton,
          onclick: () => this.linkControl(),
        },
        "Control"
      ),
    );

    return items;
  }

  extend(ComposerBody.prototype, 'oninit', function () {
    this.loadingButton = false;
  });

  ComposerBody.prototype.linkControl = async function () {
    this.loadingButton = true;
    const value = this.composer.fields.content();

    if (value == '') {
      this.loadingButton = false;
      return;
    }

    const allReferences = value.match(/\[reference\ id=[\w]* type=[\w]*\].*\[\/reference\]/gm);

    for (let i = 0; i < allReferences.length; i++) {
      let tmp = allReferences[i].match(/(https?:\/\/)(\w+\.){1,}\w+[(\/(\w\-\_\+\?)+)]*/);

      if (tmp !== null) {
        allReferences[i] = tmp[0];

        let response = await fetch('https://tools.emoldova.org/tools/validate-source', {
          method: 'POST',
          body: JSON.stringify({
            url: allReferences[i]
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const result = await response.json();
        allReferences[i] = result.success;
      } else {
        allReferences[i] = true;
      }
    }

    if (allReferences.every((ref) => {
      return ref ? true : false;
    })) {
      app.alerts.show(
        Alert,
        {
          type: 'success',
        },
        app.translator.trans("Toate link-urile din referinte sunt accesibile!")
      );
      this.loadingButton = false;
    } else {
      // const unaccesibleIndexes = allReferences
      //   .map((ref, index) => {
      //     if (ref == false) return index;
      //   })
      //   .filter(index => index >= 0)
      //   .map(index => index + 1);
      app.alerts.show(
        Alert,
        {
          type: 'warning',
        },
        // app.translator.trans("Link-urile din referintele " + unaccesibleIndexes.join(", ") + " nu sunt accesibile!")
        app.translator.trans("Unele link-uri din referinte nu sunt accesibile!")
      );
      this.loadingButton = false;
      // console.log(unaccesibleIndexes);
    }
  }

  extend(ComposerBody.prototype, 'view', function (view) {
    view.children[0].children[1].children.push(<ul className="sidebarMenu">{listItems(this.sidebarMenu().toArray())}</ul>);
  });

  // Implementarea accesarii link-urilor interne in articole si comentarii
  // by BlockCat
  extend(CommentPost.prototype, ['oncreate', 'onupdate'], function () {
    const baseUrl = app.forum.attribute('baseUrl');
    const postBody = this.element.querySelector('.Post-body');
    const elements = postBody.querySelectorAll('a');

    for (const link of elements) {
      if (link.classList.contains('PostMention')) {
          continue;
      }

      const href = link.href;
      
      if (!href.startsWith(baseUrl)) {
        continue;
      }
      
      const path = href.replace(baseUrl, '');
      const elements = path.split('/');
      const isFile = elements[elements.length-1].match(/(.*)\.(.*)/i);
      
      if (isFile) {
        continue;
      }
      
      const separateId = elements[elements.length-1].split('#');
      const referenceId = separateId[separateId.length - 1];

      link.addEventListener('click', function (e) {
          e.preventDefault();

          var reference = document.getElementById(referenceId);
          reference?.scrollIntoView({behavior: 'smooth'});
      });
    }
  });
}, -21);