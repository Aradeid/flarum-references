import Modal from "flarum/components/Modal";
import Button from 'flarum/components/Button';
import Stream from 'flarum/common/utils/Stream';

export default class DefaultRefModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.value = app.composer.fields.content() || '';
    this.allReferences = this.value.match(/\[reference\ id=[\w]*\][\w\ \(\)\[\]\.\,\/\\\-_\+;:"'?&]*\[\/reference\]/gm);
    this.referenceId = this.allReferences?.length || 0;

    // console.log(this.value);
    // console.log(this.allReferences);
    // console.log(this.referenceId);
    this.fields = {
      title: Stream(''),
      link: Stream(''),
    };
  }

  className() {
    return "";
  }

  title() {
    return "De baza";
  }

  content() {
    // console.log(app.composer.editor.attrs.menuState.editorView.dom.outerText);
    // console.log(app.composer.editor.attrs.menuState.editorView.dom.outerText.length);
    return [
      m('.Modal-body',
        m('Form.Form--left',
        m('.Form-group',
          m('label', app.translator.trans('Titlul')),
          m('input.FormControl', {
            type: "text",
            bidi: this.fields.title,
            required: true,
          },
          )
        ),
        m('.Form-group',
          m('label', app.translator.trans('Link')),
          m('input.FormControl', {
            type: "url",
            bidi: this.fields.link,
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
    // console.log(flarum.extensions['askvortsov-rich-text']);
    if (flarum.extensions['askvortsov-rich-text']) { // implements for askvortsov-rich-text editor
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");

      const position = app.composer.editor.getSelectionRange();
      
      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
        app.composer.editor.insertAtCursor("Referinte:");
        app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor(
        this.referenceId +
        ". [reference id=ref" + this.referenceId + "] " +
        this.fields.title() +
        ". " +
        this.fields.link() +
        " [/reference]"
      );

      app.composer.editor.setSelectionRange(position[0], position[1]);
      app.composer.editor.setEnter();
      app.composer.editor.delete();

      // this.array[0] = "Alt ceva"
      // console.log("rich-text");
    } else { // implements for flarum-markdown editor
      console.log(app.composer.editor.el.value);
      console.log(app.composer.fields.content());
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");

      const position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1);
        // app.composer.editor.setEnter();
        app.composer.editor.insertAtCursor("\n\nReferinte:\n");
        // app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1);
        app.composer.editor.insertAtCursor("\n");
        // app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor(
        "\n" +
        this.referenceId +
        "\\. [reference id=ref" + this.referenceId + "] " +
        this.fields.title() +
        ". " +
        this.fields.link() +
        " [/reference]"
      );

      app.composer.editor.setSelectionRange(position[0], position[1]);

      // console.log("non rich-text");
      // app.composer.editor.moveCursorTo(app.composer.fields.content().length + 1);
    }

    app.modal.close();
  }
}