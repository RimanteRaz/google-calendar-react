import React, { useState } from "react";
import { Button } from "../../button";
import { Schedule } from "@material-ui/icons";
import styles from "./EventCreationForm.module.scss";
import { TitleInput } from "./title-input";
import { DateInput } from "./date-input";
import { TimeInput } from "./time-input";
import { isEndGreaterThanStart } from "../../../utilities/dates";

export const EventCreationForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [titleError, setTitleError] = useState("");
  const [dateError, setDateError] = useState("");
  const [startTimeError, setStartTimeError] = useState("");
  const [endTimeError, setEndTimeError] = useState("");

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Form is valid");
    }
  };

  const validateTitleInput = (value: string) => {
    return isRequiredFieldEntered(value, setTitleError);
  };

  const validateDateInput = (value: string) => {
    return isRequiredFieldEntered(value, setDateError);
  };

  const validateStartTimeInput = (value: string) => {
    if (isRequiredFieldEntered(value, setStartTimeError) && endTime) {
      return isTimeValid();
    }
    return false;
  };
  const validateEndTimeInput = (value: string) => {
    if (isRequiredFieldEntered(value, setEndTimeError) && startTime) {
      return isTimeValid();
    }
    return false;
  };

  const isRequiredFieldEntered = (
    value: string,
    errorSetter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (value.length < 1) {
      errorSetter("This field is required");
      return false;
    } else {
      errorSetter("");
      return true;
    }
  };

  const isTimeValid = () => {
    if (isEndGreaterThanStart(startTime, endTime)) {
      setEndTimeError("");
      return true;
    } else {
      setEndTimeError("End time has to be greater than start time");
      return false;
    }
  };

  const isFormValid = () => {
    const isTitleValid = validateTitleInput(title);
    const isDateValid = validateDateInput(date);
    const isStartTimeValid = validateStartTimeInput(startTime);
    const isEndTimeValid = validateEndTimeInput(endTime);
    if (isTitleValid && isDateValid && isStartTimeValid && isEndTimeValid) {
      return true;
    }
    return false;
  };

  return (
    <form className={styles.createEventForm} onSubmit={e => handleOnSubmit(e)}>
      <div className={styles.inputsAndDecoration}>
        <TitleInput
          value={title}
          setValue={setTitle}
          errorMessage={titleError}
          validateInput={validateTitleInput}
        />
        <div className={styles.dateTimeSelect}>
          <div className={styles.clockIcon}>
            <Schedule />
          </div>

          <DateInput
            value={date}
            setValue={setDate}
            errorMessage={dateError}
            validateInput={validateDateInput}
          />

          <TimeInput
            label={"Start time:"}
            value={startTime}
            setValue={setStartTime}
            errorMessage={startTimeError}
            validateInput={validateStartTimeInput}
          />

          <TimeInput
            label={"End time:"}
            value={endTime}
            setValue={setEndTime}
            errorMessage={endTimeError}
            validateInput={validateEndTimeInput}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => {}} styleName={"squareFill"}>
          Save
        </Button>
      </div>
    </form>
  );
};
