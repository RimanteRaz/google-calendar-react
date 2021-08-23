import { Button } from "../button";
import { Close } from "@material-ui/icons";
import styles from "./EventCreationModal.module.scss";
import { EventCreationForm } from "./event-creation-form";
import { useDispatch } from "react-redux";
import { closeEventModal } from "../../actions";
import { MouseEvent, useRef } from "react";

export const EventCreationModal = () => {
  const dispatch = useDispatch();

  const modal = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modal.current && !modal.current.contains(event.target as Node)) {
      dispatch(closeEventModal());
    }
  };

  return (
    <div
      className={styles.container}
      onClick={event => {
        handleClickOutside(event);
      }}
    >
      <div className={styles.modal} ref={modal}>
        <div className={styles.header}>
          <Button onClick={() => dispatch(closeEventModal())} styleName={"round"}>
            <Close />
          </Button>
        </div>
        <div className={styles.body}>
          <EventCreationForm />
        </div>
      </div>
    </div>
  );
};
