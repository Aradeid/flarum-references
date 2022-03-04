import Modal from "flarum/components/Modal";
import Button from 'flarum/components/Button';
import Stream from 'flarum/common/utils/Stream';

export default class SiteRefModal extends Modal {
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
      createAt: Stream(''),
      siteName: Stream(''),
    };
  }

  className() {
    return "";
  }

  title() {
    return app.translator.trans('flarum-references.forum.modal.ref_site_modal');
  }

  content() {
    return [
      m('.Modal-body',
        m('Form.Form--left',
         m('span.description', app.translator.trans('flarum-references.forum.modal.ref_site_description')),
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
              }
            },
            )
          ),
          m('.Form-group',
            m('label', app.translator.trans('flarum-references.forum.modal.ref_link_label')),
            m('input.FormControl', {
              type: "url",
              value: this.fields.link(),
              placeholder: "ex. http://example.com",
              required: true,
              oninput: (e) => {
                this.fields.link(e.target.value);
                this.fields.siteName(e.target.value?.split('//')[1]?.split('/')[0] || "");
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
              bidi: this.fields.author,
            },
            )
          ),
          m('.Form-group',
            m('label', app.translator.trans('flarum-references.forum.modal.ref_createat_label')),
            m('input.FormControl', {
              type: "text",
              placeholder: "ex. 01.01.1970",
              pattern: "^(?:(?:31(\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$",
              value: this.fields.createAt(),
              oninput: (e) => {
                this.fields.createAt(e.target.value);
                this.removeRedStyle();
              }
            },
            )
          ),
          m('.Form-group',
            m('label', app.translator.trans('flarum-references.forum.modal.ref_sourcename_label')),
            m('input.FormControl', {
              type: "text",
              value: this.fields.siteName(),
              placeholder: "ex. example.com",
              required: true,
              oninput: (e) => {
                this.fields.siteName(e.target.value);
                this.removeRedStyle();
              },
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
        ". [reference id=ref" + this.referenceId + " type=site] " +
        this.fields.author() +
        ((this.fields.author().length === 0) ? "" : ". ") +
        this.fields.title() +
        ". " +
        this.fields.siteName() +
        ((this.fields.createAt().length === 0) ? ". " : ", ") +
        this.fields.createAt() +
        ((this.fields.createAt().length === 0) ? "" : ". ") +
        "[citat la " +
        date.getDate() + 
        "." + (date.getMonth() + 1) +
        "." + date.getFullYear() +
        "] " +
        this.fields.link() +
        " [/reference]"
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
        "\\. [reference id=ref" + this.referenceId + " type=site] " +
        this.fields.author() +
        ((this.fields.author().length === 0) ? "" : ". ") +
        this.fields.title() +
        ". " +
        this.fields.siteName() +
        ((this.fields.createAt().length === 0) ? ". " : ", ") +
        this.fields.createAt() +
        ((this.fields.createAt().length === 0) ? "" : ". ") +
        "[citat la " +
        date.getDate() + 
        "." + (date.getMonth() + 1) +
        "." + date.getFullYear() +
        "] " +
        this.fields.link() +
        " [/reference]"
      );

      app.composer.editor.setSelectionRange(position[0], position[1]);
    }

    app.modal.close();
  }
}