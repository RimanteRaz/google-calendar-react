export const OPEN_EVENT_MODAL = "OPEN_EVENT_MODAL";
export const CLOSE_EVENT_MODAL = "CLOSE_EVENT_MODAL";

export const openEventModal = () => ({ type: OPEN_EVENT_MODAL });
export const closeEventModal = () => ({ type: CLOSE_EVENT_MODAL });

export type EventModalAction = {
  type: typeof OPEN_EVENT_MODAL | typeof CLOSE_EVENT_MODAL;
};
