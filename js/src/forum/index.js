import {extend} from 'flarum/common/extend';
import app from 'flarum/app';
import InsertReferenceDropdown from './InsertReferenceDropdown';
import TextEditorButton from 'flarum/components/TextEditorButton';
import TextEditor from 'flarum/common/components/TextEditor';
import CommentPost from 'flarum/forum/components/CommentPost';
import ComposerBody from 'flarum/components/ComposerBody';
import Button from 'flarum/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';

import ReferencesModal from './components/ReferencesModal';

app.initializers.add('aradeid/flarum-references', () => {
  // adaugarea butonului pentru referinte in Editor la optiuni
  extend(TextEditor.prototype, 'toolbarItems', function (items) {
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
  // extend(ComposerBody.prototype, 'rightContent', function (items) {
  //   items.add(
  //     'references',
  //     Button.component(
  //       {
  //         className: 'Button',
  //         onclick: () => app.modal.show(ReferencesModal),
  //       },
  //       "Referinta"
  //     ),
  //   );
  // });

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
});

// by Aradeid
// function addReference() {
//   styleSelectedText(app.composer.editor.el, 
//     //{ prefix: '![', suffix: '](https://)', replaceNext: 'https://', scanFor: 'https?://' }
//     { prefix: '[ref][', suffix: '](https://insertLinkHere)[/ref]' }
//   );
// }