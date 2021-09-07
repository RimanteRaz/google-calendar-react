import { useDispatch, useSelector } from "react-redux";
import { closePreviewModal, deleteEvent } from "../../actions";
import { getDisplayedEvent } from "../../selectors/event-preview";
import { getTimeDescription } from "../../utilities/dates";
import { Button } from "../button";
import { ModalContainer } from "../modal-container";
import styles from "./EventPreview.module.scss";

export const EventPreview = () => {
  const event = useSelector(getDisplayedEvent);
  const dispatch = useDispatch();

  if (!event) return null;

  const eventTimeDescription = getTimeDescription(event.startDate, event.endDate);

  return (
    <ModalContainer closeModal={closePreviewModal} dataTestid="event-preview-modal">
      <h2 className={styles.title}>{event.title}</h2>
      <p className={styles.time}>{eventTimeDescription}</p>
      <Button
        onClick={() => {
          dispatch(deleteEvent(event.id));
          dispatch(closePreviewModal());
        }}
        styleName={"danger"}
      >
        Delete
      </Button>
    </ModalContainer>
  );
};
