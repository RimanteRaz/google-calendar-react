import { State } from "../store";

export const checkIfEventModalOpen = (state: State) => state.eventCreateModal.isOpen;
