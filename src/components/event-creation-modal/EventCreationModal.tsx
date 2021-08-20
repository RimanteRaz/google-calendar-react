import { Button } from "../button";
import { Close } from "@material-ui/icons";
import styles from "./EventCreationModal.module.scss";
import { EventCreationForm } from "./event-creation-form";

export const EventCreationModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <Button onClick={() => {}} styleName={"round"}>
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
