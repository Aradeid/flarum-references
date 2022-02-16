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
    return "Selectare tip referinta";
  }

  content() {
    return [
      m('.Modal-body',
        m('.Form.Form--centered',
          m('.Form-group',
            m('.choiceBox', {
              onclick: () => app.modal.show(DefaultRefModal),
            },
              m('span', app.translator.trans('discussion-type.forum.discussion_type_modal.type.standard')),
              m('p', app.translator.trans('discussion-type.forum.discussion_type_modal.type_info.standard'))
            )
          ),
          m('.Form-group',
            m('.choiceBox', {
              onclick: () => app.modal.show(SiteRefModal),
            },
              m('span', app.translator.trans('discussion-type.forum.discussion_type_modal.type.discuss')),
              m('p', app.translator.trans('discussion-type.forum.discussion_type_modal.type_info.discuss'))
            )
          ),
          m('.Form-group',
            m('.choiceBox', {
              onclick: () => app.modal.show(BookRefModal),
            },
              m('span', app.translator.trans('discussion-type.forum.discussion_type_modal.type.gallery')),
              m('p', app.translator.trans('discussion-type.forum.discussion_type_modal.type_info.gallery'))
            )
          ),
          m('.Form-group',
            m('.choiceBox', {
              onclick: () => app.modal.show(NewsRefModal),
            },
              m('span', app.translator.trans('discussion-type.forum.discussion_type_modal.type.link')),
              m('p', app.translator.trans('discussion-type.forum.discussion_type_modal.type_info.link'))
            )
          ),
          m('.Form-group',
            m('.choiceBox', {
              onclick: () => app.modal.show(JournalRefModal),
            },
              m('span', app.translator.trans('discussion-type.forum.discussion_type_modal.type.link')),
              m('p', app.translator.trans('discussion-type.forum.discussion_type_modal.type_info.link'))
            )
          ),
        )
      )
    ];
  }
}