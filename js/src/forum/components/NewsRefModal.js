import Modal from "flarum/components/Modal";
import Button from 'flarum/components/Button';
import Stream from 'flarum/common/utils/Stream';

export default class NewsRefModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.reference = Stream('');
  }

  className() {
    return "";
  }

  title() {
    return "Referinta";
  }

  content() {
    return [
      m('.Modal-body',
        m('Form.Form--left',
          m('.Form-group',
            m('label', app.translator.trans('Textul referintei')),
            m('input.FormControl', {
              type: "text",
              bidi: this.reference,
            },
            )
          ),
          Button.component(
            {
              className: "Button Button--primary",
              onclick: () => this.addReference(),
            },
            "Adaugare"
          ),
        )
      )
    ];
  }

  addReference() {
    app.composer.editor.insertAtCursor('[ref id=ref1]' + 1 + '[/ref]');
    app.composer.editor.insertAtCursor('\n\nadadedf fsdhfshdfkhsdkh kasdhfksdhfkasdhkf\n');
    app.composer.editor.insertAtCursor('\nadadedf fsdhfshdfkhsdkh kasdhfksdhfkasdhkf\n');
    app.composer.editor.insertAtCursor('\nadadedf fsdhfshdfkhsdkh kasdhfksdhfkasdhkf\n');
    app.composer.editor.insertAtCursor('\nadadedf fsdhfshdfkhsdkh kasdhfksdhfkasdhkf\n');
    app.composer.editor.insertAtCursor('\nReferinte:\n\n');
    app.composer.editor.insertAtCursor('  1. [reference id=ref1]' + this.reference() + '[/reference]');
    app.modal.close();
  }
}