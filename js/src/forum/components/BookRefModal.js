import Modal from "flarum/components/Modal";
import Button from 'flarum/components/Button';
import Stream from 'flarum/common/utils/Stream';

export default class BookRefModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.value = app.composer.fields.content() || '';
    // this.allReferences = this.value.match(/\[reference\ id=[\w]*\][\w\ \(\)\[\]\.\,\/\\\-_\+;:"'?&]*\[\/reference\]/gm);
    this.allReferences = this.value.match(/\[reference\ id=[\w]* type=[\w]*\].*\[\/reference\]/gm);
    this.referenceId = this.allReferences?.length || 0;

    this.fields = {
      title: Stream(''),
      link: Stream(''),
      author: Stream(''),
      year: Stream(''),
      editura: Stream(''),
    };
  }

  className() {
    return "";
  }

  title() {
    return app.translator.trans('flarum-references.forum.modal.ref_book_modal');
  }

  content() {
    return [
      m('.Modal-body',
        m('Form.Form--left',
        m('span.description', app.translator.trans('flarum-references.forum.modal.ref_book_description')),
        m('.Form-group',
          m('label', app.translator.trans('flarum-references.forum.modal.ref_link_label')),
          m('input.FormControl', {
            type: "url",
            value: this.fields.link(),
            placeholder: "ex. http://example.com",
            oninput: (e) => {
              this.fields.link(e.target.value);
              this.removeRedStyle();
            },
          },
          )
        ),
        m('.Form-group',
          m('label', app.translator.trans('flarum-references.forum.modal.ref_author_label')),
          m('input.FormControl', {
            type: "text",
            placeholder: "ex. Shakespeare",
            value: this.fields.author(),
            required: true,
            oninput: (e) => {
              this.fields.author(e.target.value);
              this.removeRedStyle();
            },
          },
          )
        ),
        m('.Form-group',
          m('label', app.translator.trans('flarum-references.forum.modal.ref_title_label')),
          m('input.FormControl', {
            type: "text",
            value: this.fields.title(),
            placeholder: "ex. Cultura în Evul Mediu",
            required: true,
            oninput: (e) => {
              this.fields.title(e.target.value);
              this.removeRedStyle();
            },
          },
          )
        ),
        m('.Form-group',
          m('label', app.translator.trans('flarum-references.forum.modal.ref_year_label')),
          m('input.FormControl', {
            type: "text",
            placeholder: "ex. 2015",
            pattern: "^(?:(?:1[6-9]|[2-9]\\d)\\d{2})$",
            value: this.fields.year(),
            oninput: (e) => {
              this.fields.year(e.target.value);
              this.removeRedStyle();
            }
          },
          )
        ),
        m('.Form-group',
          m('label', app.translator.trans('flarum-references.forum.modal.ref_edit_label')),
          m('input.FormControl', {
            type: "text",
            value: this.fields.editura(),
            placeholder: "ex. Lumina",
            oninput: (e) => {
              this.fields.editura(e.target.value);
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
        ". [reference id=ref" + this.referenceId + " type=book] " +
        this.fields.author() +
        ". " +
        this.fields.title() +
        ". " +
        this.fields.editura() +
        ((this.fields.editura().length === 0) ? "" : (this.fields.year().length === 0) ? "" : ", ") +
        this.fields.year() +
        ((this.fields.year().length === 0) ? " " : ". ") +
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
        "\\. [reference id=ref" + this.referenceId + " type=book] " +
        this.fields.author() +
        ". " +
        this.fields.title() +
        ". " +
        this.fields.editura() +
        ((this.fields.editura().length === 0) ? "" : (this.fields.year().length === 0) ? "" : ", ") +
        this.fields.year() +
        ((this.fields.year().length === 0) ? " " : ". ") +
        "[citat la " +
        date.getDate() + 
        "." + (date.getMonth() + 1) +
        "." + date.getFullYear() +
        "] " +
        this.fields.link() +
        ((this.fields.link().length === 0) ? "[/reference]" : " [/reference]")
      );

      app.composer.editor.setSelectionRange(position[0], position[1]);

    }

    app.modal.close();
  }
}