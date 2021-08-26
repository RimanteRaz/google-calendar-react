import { State } from "../store";

export const checkIfEventPreviewOpen = (state: State) => state.eventPreview.isOpen;

export const getDisplayedEvent = (state: State) => state.eventPreview.eventDisplayed;
