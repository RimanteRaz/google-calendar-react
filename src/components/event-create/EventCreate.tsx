import { closeEventCreateModal } from "../../actions";
import { ModalContainer } from "../modal-container";
import { EventCreationForm } from "./event-creation-form";

export const EventCreate = () => {
  return (
    <ModalContainer closeModal={closeEventCreateModal} dataTestid="event-create-modal">
      <EventCreationForm />
    </ModalContainer>
  );
};
