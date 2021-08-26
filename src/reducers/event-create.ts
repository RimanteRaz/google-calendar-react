import { OPEN_CREATE_MODAL, CLOSE_CREATE_MODAL, EventModalAction } from "../actions";

export const eventCreate = (eventCreate = { isOpen: false }, action: EventModalAction) => {
  switch (action.type) {
    case OPEN_CREATE_MODAL:
      return { ...eventCreate, isOpen: true };
    case CLOSE_CREATE_MODAL:
      return { ...eventCreate, isOpen: false };
    default:
      return eventCreate;
  }
};
