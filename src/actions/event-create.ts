export const OPEN_EVENT_CREATE_MODAL = "OPEN_CREATE_MODAL";
export const CLOSE_EVENT_CREATE_MODAL = "CLOSE_CREATE_MODAL";

export const openEventCreateModal = () => ({ type: OPEN_EVENT_CREATE_MODAL });
export const closeEventCreateModal = () => ({ type: CLOSE_EVENT_CREATE_MODAL });

export type EventModalAction = {
  type: typeof OPEN_EVENT_CREATE_MODAL | typeof CLOSE_EVENT_CREATE_MODAL;
};
