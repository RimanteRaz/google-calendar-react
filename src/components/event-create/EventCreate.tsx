import { closeCreateModal } from "../../actions";
import { ModalContainer } from "../modal-container";
import { EventCreationForm } from "./event-creation-form";

export const EventCreate = () => {
  return (
    <ModalContainer closeModal={closeCreateModal}>
      <EventCreationForm />
    </ModalContainer>
  );
};
