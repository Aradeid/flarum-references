import Button from 'flarum/common/components/Button';
import extractText from 'flarum/common/utils/extractText';
import Stream from 'flarum/common/utils/Stream';
import Dropdown from 'flarum/common/components/Dropdown';
import Tooltip from 'flarum/common/components/Tooltip';
import icon from 'flarum/common/helpers/icon';
import styleSelectedText from 'flarum/common/utils/styleSelectedText';
import ItemList from 'flarum/common/utils/ItemList';

import { removeMark, updateMark } from 'tiptap-commands';

//borrowed from askvortsov1/flarum-rich-text
export default class InsertReferenceDropdown extends Dropdown  {
  static initAttrs(attrs) {
    attrs.buttonClassName = 'Button Button--icon Button--link Button--menuDropdown';
  }
  
  oninit(vnode) {
    super.oninit(vnode);
    this.state = this.attrs.state;

    this.text = Stream('');

    this.href = Stream('');
    this.title = Stream('');

    // this.state.addItem(
    //   this.attrs.type,
    //   (state, dispatch) => {
    //     this.command(state, dispatch);
    //   },
    //   this.onEditorUpdate.bind(this)
    // );

    this.selectionEmpty = true;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    this.$().on('click', (e) => {
      if ($('.App').is('.mobile-safari')) {
        // Mobile Safari doesn't support fixed items
        // So, we wrap them in a modal.
        app.modal.show(SafariModalHack, {
          title: this.attrs.tooltip,
          vnodeContent: this.fields().toArray(),
          onsubmit: this.onsubmit.bind(this),
        });
        e.stopPropagation();
      }
    });

    this.$().on('shown.bs.dropdown', () => {
      this.$('.Dropdown-menu').find('input, select, textarea').first().focus().select();
    });
  }

  getButtonContent(children) {
    return (
      <Tooltip text={this.attrs.tooltip}>
        <span>{icon(this.attrs.icon)}</span>
      </Tooltip>
    );
  }

  getMenu(items) {
    return (
      <ul className={'Dropdown-menu dropdown-menu FormDropdown'}>
        <form className="Form" onsubmit={this.onsubmit.bind(this)}>
          {this.fields().toArray()}
        </form>
      </ul>
    );
  }

  onsubmit(e) {
    // Here for the safari workaround
    app.modal.close();
    e.preventDefault();
    $('body').trigger('click');
    this.insert(e);
    app.composer.editor.focus();
  }

  fields() {
    const items = new ItemList();

    items.add(
      'insert',
      <Button type="submit" className="Button Button--primary">
        {app.translator.trans('askvortsov-rich-text.lib.composer.insert_button')}
      </Button>
    );

    if (this.selectionEmpty && !this.active) {
      items.add(
        'text',
        <div className="Form-group">
          <input
            className="FormControl"
            name="text"
            placeholder={extractText(app.translator.trans('flarum-references.forum.composer.insert_link.text_placeholder'))}
            bidi={this.text}
            required
          />
        </div>,
        10
      );
    }

    items.add(
      'href',
      <div className="Form-group">
        <input
          className="FormControl"
          name="href"
          type="url"
          placeholder={extractText(app.translator.trans('flarum-references.forum.composer.insert_link.href_placeholder'))}
          bidi={this.href}
          required
        />
      </div>,
      10
    );

    if (this.active) {
      items.add(
        'remove',
        <Button onclick={this.remove.bind(this)} className="Button Button--danger">
          {app.translator.trans('askvortsov-rich-text.lib.composer.insert_link.remove_button')}
        </Button>,
        -10
      );
    }

    return items;
  }

  insert(e) {
    const linkAttrs = { href: this.href(), title: this.title() };

    if (this.selectionEmpty && !this.active) {
      //this.command = dispatch(state.tr.replaceSelectionWith(state.schema.text(this.text(), [this.attrs.mark.create(linkAttrs)]), false));

      styleSelectedText(app.composer.editor.el, 
        //{ prefix: '![', suffix: '](https://)', replaceNext: 'https://', scanFor: 'https?://' }
        { prefix: '[ref][' + linkAttrs.title, suffix: ']('+ linkAttrs.href +')[/ref]' }
      );
      this.text('');
      this.href('');
    } else {
      this.command = updateMark(this.attrs.mark, linkAttrs);
    }
  }

  remove(e) {
    $('body').trigger('click');
    this.command = removeMark(this.attrs.mark);
    this.state.run(this.attrs.type);
    app.composer.editor.focus();
  }

  onEditorUpdate() {
    this.active = !!this.state.markActive(this.attrs.mark);
    this.$('.Dropdown-toggle').toggleClass('active', this.active);

    const attrs = this.state.markAttrs(this.attrs.mark);

    this.href(attrs.href);
    this.title(attrs.title);

    this.selectionEmpty = this.state.selectionEmpty();
  }
}