import { Button } from "../../button";
import { DateTimeInputs } from "./date-time-inputs";
import styles from "./EventCreationForm.module.scss";
import { TitleInput } from "./title-input";

export const EventCreationForm = () => {
  return (
    <form className={styles.createEventForm}>
      <div className={styles.inputsAndDecoration}>
        <TitleInput />
        <DateTimeInputs />
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => {}} styleName={"squareFill"}>
          Save
        </Button>
      </div>
    </form>
  );
};
