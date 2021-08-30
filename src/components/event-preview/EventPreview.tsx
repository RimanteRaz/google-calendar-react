import { useDispatch, useSelector } from "react-redux";
import { closePreviewModal, deleteEvent } from "../../actions";
import { getDisplayedEvent } from "../../selectors/event-preview";
import { getTimeDescription } from "../../utilities/dates";
import { Button } from "../button";
import { ModalContainer } from "../modal-container";
import styles from "./EventPreview.module.scss";

export const EventPreview = () => {
  const dispatch = useDispatch();
  const event = useSelector(getDisplayedEvent);

  const eventTimeDescription = event ? getTimeDescription(event.startDate, event.endDate) : null;

  return (
    <ModalContainer closeModal={closePreviewModal}>
      <h2 className={styles.title}>{event ? event.title : ""}</h2>
      <p className={styles.time}>{eventTimeDescription}</p>
      <Button
        onClick={() => {
          dispatch(deleteEvent(event ? event.id : ""));
          dispatch(closePreviewModal());
        }}
        styleName={"danger"}
      >
        Delete
      </Button>
    </ModalContainer>
  );
};
