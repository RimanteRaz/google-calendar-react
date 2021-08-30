import { OPEN_EVENT_CREATE_MODAL, CLOSE_EVENT_CREATE_MODAL, EventModalAction } from "../actions";

export const eventCreateModal = (eventCreate = { isOpen: false }, action: EventModalAction) => {
  switch (action.type) {
    case OPEN_EVENT_CREATE_MODAL:
      return { ...eventCreate, isOpen: true };
    case CLOSE_EVENT_CREATE_MODAL:
      return { ...eventCreate, isOpen: false };
    default:
      return eventCreate;
  }
};
