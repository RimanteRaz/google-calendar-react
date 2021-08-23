import { OPEN_EVENT_MODAL, CLOSE_EVENT_MODAL, EventModalAction } from "../actions";

export const eventModal = (eventModal = { isOpen: false }, action: EventModalAction) => {
  if (action.type === OPEN_EVENT_MODAL) {
    return { isOpen: true };
  }

  if (action.type === CLOSE_EVENT_MODAL) {
    return { isOpen: false };
  }

  return eventModal;
};
