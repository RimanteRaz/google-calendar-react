export const OPEN_CREATE_MODAL = "OPEN_CREATE_MODAL";
export const CLOSE_CREATE_MODAL = "CLOSE_CREATE_MODAL";

export const openCreateModal = () => ({ type: OPEN_CREATE_MODAL });
export const closeCreateModal = () => ({ type: CLOSE_CREATE_MODAL });

export type EventModalAction = {
  type: typeof OPEN_CREATE_MODAL | typeof CLOSE_CREATE_MODAL;
};
