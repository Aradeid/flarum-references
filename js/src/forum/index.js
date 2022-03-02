import {extend} from 'flarum/common/extend';
import { baseKeymap } from 'tiptap-commands';
import app from 'flarum/app';
import InsertReferenceDropdown from './InsertReferenceDropdown';
import TextEditorButton from 'flarum/components/TextEditorButton';
import TextEditor from 'flarum/common/components/TextEditor';
import CommentPost from 'flarum/forum/components/CommentPost';
import ComposerBody from 'flarum/components/ComposerBody';
import Button from 'flarum/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';

import ReferencesModal from './components/ReferencesModal';

// import {components} from '@block-cat-components';
// const components = require('@block-cat-components');

// function getStatus(url) {
//   var request = new XMLHttpRequest();
//   request.open("GET", url, true);
//   request.setRequestHeader('Access-Control-Allow-Origin', '*');
//   request.setRequestHeader('Access-Control-Allow-Methods', 'GET');
//   request.onreadystatechange = function() {
//         if (request.readyState === 4){
//             console.log(request.status);//this contains the status code
//         }
//     };
//   request.send();
//   // return request.status;
// }

app.initializers.add('aradeid/flarum-references', () => {
  // console.log(app);
  // console.log(flarum);
  // console.log(flarum.extensions['block-cat-components']);
  // console.log(components);
  // adaugarea metodei pentru simularea tastei enter in rich-text
  if (flarum.extensions['askvortsov-rich-text']) {
    const {
      ProseMirrorEditorDriver
    } = flarum.extensions['askvortsov-rich-text'].proseMirror;

    ProseMirrorEditorDriver.prototype.setEnter = function() {
      // console.log(this.view.state);
      baseKeymap['Enter'](this.view.state, this.view.dispatch);
      // baseKeymap['Enter'];
    }
    ProseMirrorEditorDriver.prototype.delete = function() {
      // console.log("sters");
      baseKeymap['Backspace'](this.view.state, this.view.dispatch);
    }
  }
  // console.log(app.composer.editor);

  // adaugarea butonului pentru referinte in Editor la optiuni
  extend(TextEditor.prototype, 'toolbarItems', function (items) {
    // console.log(app.composer.editor);
    // by Aradeid
    //() => this.attrs.composer.editor.insertAtCursor(' :')
    /*items.add(
      'addReference',
      (
        <TextEditorButton onclick={addReference.bind(this)} icon="fas fa-paper-plane">
          {app.translator.trans('flarum-references.forum.composer.addReferenceButton')}
        </TextEditorButton>
      )
    );*/
    
    // items.add(
    //   'link',
    //   InsertReferenceDropdown.component({
    //     type: 'link',
    //     icon: 'fas fa-link',
    //     tooltip: app.translator.trans('flarum-references.forum.composer.addReferenceButton'),
    //     state: this.attrs.state,
    //   }),
    //   50
    // );

    // console.log(this.attrs.composer.fields.content());
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
          onclick: () => this.linkControl(),
        },
        "Control"
      ),
    );

    return items;
  }

  ComposerBody.prototype.linkControl = async function () {
    // let response = await fetch('https://cors-anywhere.herokuapp.com/https://code.visualstudio.com/docs/java/java-tutorial', {
    let response = await fetch('https://tools.emoldova.org/tools/validate-source', {
      method: 'POST',
      body: JSON.stringify({
        url: 'https://code.visualstudio.com/docs/java/java-tutorial'
      }),
      // headers: {
      //   // 'Access-Control-Allow-Origin' : '*',
      //   // 'Access-Control-Request-Method' : 'GET',
      //   'origin': '*'
      // },
    });

    // console.log(getStatus('https://cors-anywhere.herokuapp.com/https://code.visualstudio.com/docs/java/java-tutorial'));
    console.log(response.json());
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

// by Aradeid
// function addReference() {
//   styleSelectedText(app.composer.editor.el, 
//     //{ prefix: '![', suffix: '](https://)', replaceNext: 'https://', scanFor: 'https?://' }
//     { prefix: '[ref][', suffix: '](https://insertLinkHere)[/ref]' }
//   );
// }