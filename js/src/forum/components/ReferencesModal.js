import Modal from "flarum/components/Modal";

import DefaultRefModal from './DefaultRefModal';
import SiteRefModal from './SiteRefModal';
import BookRefModal from './BookRefModal';
import NewsRefModal from './NewsRefModal';
import JournalRefModal from './JournalRefModal';

export default class ReferencesModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
  }

  className() {
    return "DiscussionType";
  }

  title() {
    return app.translator.trans('flarum-references.forum.modal.ref_type_modal');
  }

  content() {
    return [
      m('.Modal-body',
        m('.Form.Form--centered div_referinta',
          m('.Form-group',
            m('.choiceBox', {
              onclick: () => app.modal.show(SiteRefModal),
            },
              (<i class="icon fas fa-window-maximize Button-icon"></i>),
              m('span', app.translator.trans('flarum-references.forum.modal.ref_site_modal')),
            )
          ),
          m('.Form-group',
            m('.choiceBox', {
              onclick: () => app.modal.show(BookRefModal),
            },
              (<i class="icon fas fa-book Button-icon"></i>),
              m('span', app.translator.trans('flarum-references.forum.modal.ref_book_modal')),
            )
          ),
          m('.Form-group',
            m('.choiceBox', {
              onclick: () => app.modal.show(NewsRefModal),
            },
              (<i class="icon fas fa-newspaper Button-icon"></i>),
              m('span', app.translator.trans('flarum-references.forum.modal.ref_news_modal')),
            )
          ),
          m('.Form-group',
            m('.choiceBox', {
              onclick: () => app.modal.show(JournalRefModal),
            },
              (<i class="icon fas fa-book-open Button-icon"></i>),
              m('span', app.translator.trans('flarum-references.forum.modal.ref_journal_modal')),
            )
          ),
          m('.Form-group',
            m('.choiceBox', {
              onclick: () => app.modal.show(DefaultRefModal),
            },
              (<i class="icon fas fa-bookmark Button-icon"></i>),
              m('span', app.translator.trans('flarum-references.forum.modal.ref_default_modal')),
            )
          ),
        )
      )
    ];
  }
}