import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { changeInputValue, wrapInAProvider } from "../../../../tests/test-utils";
import { EventCreationForm } from "./EventCreationForm";
import fetch from "jest-fetch-mock";

describe("EventCreationForm", () => {
  it("should render the input fields", () => {
    render(wrapInAProvider(<EventCreationForm />));

    expect(screen.getByTestId("title-input")).toBeInTheDocument();
    expect(screen.getByTestId("date-input")).toBeInTheDocument();
    expect(screen.getByTestId("start-time-input")).toBeInTheDocument();
    expect(screen.getByTestId("end-time-input")).toBeInTheDocument();
  });

  describe("when form is submitted", () => {
    const validTitleInput = "Test event title";
    const validDateInput = "2021-09-01";

    const enterValidField = () => {
      changeInputValue("title-input", validTitleInput);
      changeInputValue("date-input", validDateInput);
      changeInputValue("start-time-input", "12:00");
      changeInputValue("end-time-input", "14:00");
    };

    describe("when one field is left empty", () => {
      beforeEach(() => {
        render(wrapInAProvider(<EventCreationForm />));
        enterValidField();
      });

      afterEach(() => {
        fireEvent.click(screen.getByTestId("save-event-button"));
        expect(screen.getByText("This field is required")).toBeInTheDocument;
      });

      it("should show error message when title is empty", () => {
        changeInputValue("title-input", "");
      });

      it("should show error message when date is empty", () => {
        changeInputValue("date-input", "");
      });

      it("should show error message when start time is empty", () => {
        changeInputValue("start-time-input", "");
      });

      it("should show error message when end time is empty", () => {
        changeInputValue("end-time-input", "");
      });
    });

    describe("when start time is larger than end time", () => {
      it("should show error message", () => {
        render(wrapInAProvider(<EventCreationForm />));

        changeInputValue("title-input", validTitleInput);
        changeInputValue("date-input", validDateInput);
        changeInputValue("start-time-input", "12:00");
        changeInputValue("end-time-input", "10:00");

        fireEvent.click(screen.getByTestId("save-event-button"));
        expect(screen.getByText("End time has to be greater than start time"))
          .toBeInTheDocument;
      });
    });

    describe("when all fields are walid", () => {
      beforeEach(() => {
        fetch.resetMocks();
      });

      it("should send a fetch request", () => {
        fetch.mockResponse(JSON.stringify([]));

        render(wrapInAProvider(<EventCreationForm />));
        enterValidField();
        fireEvent.click(screen.getByTestId("save-event-button"));

        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });
  });
});
