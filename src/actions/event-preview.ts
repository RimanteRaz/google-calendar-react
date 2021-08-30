import { Event } from "../utilities/events";

export const OPEN_PREVIEW_MODAL = "OPEN_PREVIEW_MODAL";
export const CLOSE_PREVIEW_MODAL = "CLOSE_PREVIEW_MODAL";

export const openPreviewModal = (event: Event) => ({ type: OPEN_PREVIEW_MODAL, payload: event });
export const closePreviewModal = () => ({ type: CLOSE_PREVIEW_MODAL });

export type EventPreviewAction =
  | { type: typeof OPEN_PREVIEW_MODAL; payload: Event }
  | { type: typeof CLOSE_PREVIEW_MODAL };
