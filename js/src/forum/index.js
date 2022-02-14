import {extend, override} from 'flarum/common/extend';
import app from 'flarum/app';
import InsertReferenceDropdown from './InsertReferenceDropdown';
import TextEditorButton from 'flarum/components/TextEditorButton';
import TextEditor from 'flarum/common/components/TextEditor';

app.initializers.add('aradeid/flarum-references', () => {
  extend(TextEditor.prototype, 'toolbarItems', function (items) {
    //() => this.attrs.composer.editor.insertAtCursor(' :')
    /*items.add(
      'addReference',
      (
        <TextEditorButton onclick={addReference.bind(this)} icon="fas fa-paper-plane">
          {app.translator.trans('flarum-references.forum.composer.addReferenceButton')}
        </TextEditorButton>
      )
    );*/
    
    items.add(
      'link',
      InsertReferenceDropdown.component({
        type: 'link',
        icon: 'fas fa-link',
        tooltip: app.translator.trans('flarum-references.forum.composer.addReferenceButton'),
        state: this.attrs.state,
      }),
      50
    );

    return items;
  });
});

function addReference() {
  styleSelectedText(app.composer.editor.el, 
    //{ prefix: '![', suffix: '](https://)', replaceNext: 'https://', scanFor: 'https?://' }
    { prefix: '[ref][', suffix: '](https://insertLinkHere)[/ref]' }
  );
}