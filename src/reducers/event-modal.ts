import { OPEN_EVENT_MODAL, CLOSE_EVENT_MODAL, EventModalAction } from "../actions";

export const eventModal = (eventModal = { isOpen: false }, action: EventModalAction) => {
  switch (action.type) {
    case OPEN_EVENT_MODAL:
      return { ...eventModal, isOpen: true };
    case CLOSE_EVENT_MODAL:
      return { ...eventModal, isOpen: false };
    default:
      return eventModal;
  }
};
