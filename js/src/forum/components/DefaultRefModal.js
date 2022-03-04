import Modal from "flarum/components/Modal";
import Button from 'flarum/components/Button';
import Stream from 'flarum/common/utils/Stream';

export default class DefaultRefModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.value = app.composer.fields.content() || '';
    // this.allReferences = this.value.match(/\[reference\ id=[\w]*\][\w\ \(\)\[\]\.\,\/\\\-_\+;:"'?&]*\[\/reference\]/gm);
    this.allReferences = this.value.match(/\[reference\ id=[\w]* type=[\w]*\].*\[\/reference\]/gm);
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
    return app.translator.trans('flarum-references.forum.modal.ref_default_modal');
  }

  content() {
    // console.log(this.$('input[required]')[0]?.validity.valid);
    // console.log(app.composer.editor.attrs.menuState.editorView.dom.outerText);
    // console.log(app.composer.editor.attrs.menuState.editorView.dom.outerText.length);
    return [
      m('.Modal-body',
        m('Form.Form--left',
        m('.Form-group',
          m('label', app.translator.trans('flarum-references.forum.modal.ref_title_modal')),
          m('input.FormControl', {
            type: "text",
            value: this.fields.title(),
            placeholder: "ex. Cultura în Evul Mediu",
            required: true,
            oninput: (e) => {
              this.fields.title(e.target.value);
              this.removeRedStyle();
            }
          },
          )
        ),
        m('.Form-group',
          m('label', app.translator.trans('flarum-references.forum.modal.ref_link_modal')),
          m('input.FormControl', {
            type: "url",
            placeholder: "ex. http://example.com",
            value: this.fields.link(),
            oninput: (e) => {
              this.fields.link(e.target.value);
              this.removeRedStyle();
            }
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
    // console.log(requiredFields);
    
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
        ". [reference id=ref" + this.referenceId + " type=default] " +
        this.fields.title() +
        ". " +
        "[citat la " +
        date.getDate() + 
        "." + (date.getMonth() + 1) +
        "." + date.getFullYear() +
        "] " +
        this.fields.link() +
        ((this.fields.link().length === 0) ? "[/reference]" : " [/reference]")
      );

      app.composer.editor.setSelectionRange(position[0], position[1]);
      app.composer.editor.setEnter();
      app.composer.editor.delete();

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
        "\\. [reference id=ref" + this.referenceId + " type=default] " +
        this.fields.title() +
        ". " +
        "[citat la " +
        date.getDate() + 
        "." + (date.getMonth() + 1) +
        "." + date.getFullYear() +
        "] " +
        this.fields.link() +
        ((this.fields.link().length === 0) ? "[/reference]" : " [/reference]")
      );

      app.composer.editor.setSelectionRange(position[0], position[1]);

      // console.log("non rich-text");
      // app.composer.editor.moveCursorTo(app.composer.fields.content().length + 1);
    }

    // console.log(this.fields.link().length);
    app.modal.close();
  }
}