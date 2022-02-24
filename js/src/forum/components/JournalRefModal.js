import Modal from "flarum/components/Modal";
import Button from 'flarum/components/Button';
import Stream from 'flarum/common/utils/Stream';

export default class JournalRefModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.value = app.composer.fields.content() || '';
    // this.allReferences = this.value.match(/\[reference\ id=[\w]*\][\w\ \(\)\[\]\.\,\/\\\-_\+;:"'?&]*\[\/reference\]/gm);
    this.allReferences = this.value.match(/\[reference\ id=[\w]* type=[\w]*\].*\[\/reference\]/gm);
    this.referenceId = this.allReferences?.length || 0;

    this.fields = {
      title: Stream(''),
      author: Stream(''),
    };
  }

  className() {
    return "";
  }

  title() {
    return "Jurnal";
  }

  content() {
    return [
      m('.Modal-body',
        m('Form.Form--left',
        // m('span.description', app.translator.trans('Model pentru plasarea referințelor bibliografice la articole din reviste și periodice.')),
        m('.Form-group',
          m('label', app.translator.trans('Titlul')),
          m('input.FormControl', {
            type: "text",
            value: this.fields.title(),
            placeholder: "ex. Pădurea spânzuraților",
            required: true,
            oninput: (e) => {
              this.fields.title(e.target.value);
              this.removeRedStyle();
            },
          },
          )
        ),
        m('.Form-group',
          m('label', app.translator.trans('Author')),
          m('input.FormControl', {
            type: "text",
            placeholder: "ex. L. Rebreanu",
            bidi: this.fields.author,
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

  removeRedStyle() {
    const requiredFields = this.$('input');

    for (let k = 0; k < requiredFields.length; k++) {
      if (requiredFields[k].validity.valid) {
        requiredFields[k].removeAttribute("style");
      }
    }
  }

  areSetRequiredFields() {
    const requiredFields = this.$('input');
    let i = 0;
    
    for (let k = 0; k < requiredFields.length; k++) {
      if (!requiredFields[k].validity.valid) {
        requiredFields[k].style.setProperty('border-color', 'red', 'important');
        i++;
      }
    }

    if (i == 0) return true;

    return false;
  }

  addReference() {
    if (!this.areSetRequiredFields()) return;

    let date = new Date();
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
        ". [reference id=ref" + this.referenceId + " type=journal] " +
        this.fields.author() +
        ((this.fields.author().length === 0) ? "" : ". ") +
        this.fields.title() +
        ". " +
        "[citat la " +
        date.getDate() + 
        "." + (date.getMonth() + 1) +
        "." + date.getFullYear() +
        "] " +
        "[/reference]"
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
        "\\. [reference id=ref" + this.referenceId + " type=journal] " +
        this.fields.author() +
        ((this.fields.author().length === 0) ? "" : ". ") +
        this.fields.title() +
        ". " +
        "[citat la " +
        date.getDate() + 
        "." + (date.getMonth() + 1) +
        "." + date.getFullYear() +
        "] " +
        "[/reference]"
      );

      app.composer.editor.setSelectionRange(position[0], position[1]);

      // console.log("non rich-text");
      // app.composer.editor.moveCursorTo(app.composer.fields.content().length + 1);
    }

    app.modal.close();
  }
}