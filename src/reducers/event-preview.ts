import { CLOSE_PREVIEW_MODAL, EventPreviewAction, OPEN_PREVIEW_MODAL } from "../actions";
import { Event } from "../utilities/events";

export const eventPreview = (
  eventPreview: EventPreview = { isOpen: false, eventDisplayed: emptyEvent },
  action: EventPreviewAction
) => {
  switch (action.type) {
    case OPEN_PREVIEW_MODAL:
      return { ...eventPreview, isOpen: true, eventDisplayed: action.payload };
    case CLOSE_PREVIEW_MODAL:
      return { ...eventPreview, isOpen: false, eventDisplayed: emptyEvent };
    default:
      return eventPreview;
  }
};

type EventPreview = {
  isOpen: boolean;
  eventDisplayed: Event;
};

const emptyEvent = {
  id: "",
  title: "",
  startDate: new Date(),
  endDate: new Date(),
};
