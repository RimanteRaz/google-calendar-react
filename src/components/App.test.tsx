import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { changeInputValue, wrapInAProvider } from "../../tests/test-utils";
import App from "./App";

describe("App", () => {
  describe("Event creation modal", () => {
    it("should not be open on first render", () => {
      render(wrapInAProvider(<App />));

      const eventCreateModal = screen.queryByTestId("event-create-modal");
      expect(eventCreateModal).not.toBeInTheDocument();
    });

    describe("on form submit", () => {
      it("should not render a new event when end time is incorrect", () => {
        const partialState = { eventCreateModal: { isOpen: true } };
        render(wrapInAProvider(<App />, partialState));

        const eventTitle = "Test event title";
        expect(screen.queryByText(eventTitle)).not.toBeInTheDocument();

        changeInputValue("title-input", eventTitle);
        changeInputValue("date-input", "2021-09-01");
        changeInputValue("start-time-input", "12:00");
        changeInputValue("end-time-input", "10:00");

        fireEvent.submit(screen.getByTestId("event-creation-form"));

        expect(screen.queryByText(eventTitle)).not.toBeInTheDocument();
        expect(
          screen.getByText("End time has to be greater than start time")
        ).toBeInTheDocument();
      });

      it("should render a new event when inputs are correct", () => {
        const partialState = { eventCreateModal: { isOpen: true } };
        render(wrapInAProvider(<App />, partialState));

        const eventTitle = "Test event title";
        expect(screen.queryByText(eventTitle)).not.toBeInTheDocument();

        changeInputValue("title-input", eventTitle);
        changeInputValue("date-input", "2021-09-01");
        changeInputValue("start-time-input", "12:00");
        changeInputValue("end-time-input", "14:00");

        fireEvent.submit(screen.getByTestId("event-creation-form"));

        expect(screen.getByText(eventTitle)).toBeInTheDocument;
      });
    });
  });

  describe("Header", () => {
    it("should render next week days when next week button is clicked", () => {
      render(wrapInAProvider(<App />));

      const nextWeekButton = screen.getByTestId("next-week-button");
      fireEvent.click(nextWeekButton);

      expect(screen.getByTestId("weekday-sun").innerHTML).toContain("5");
      expect(screen.getByTestId("weekday-mon").innerHTML).toContain("6");
      expect(screen.getByTestId("weekday-tue").innerHTML).toContain("7");
      expect(screen.getByTestId("weekday-wed").innerHTML).toContain("8");
      expect(screen.getByTestId("weekday-thu").innerHTML).toContain("9");
      expect(screen.getByTestId("weekday-fri").innerHTML).toContain("10");
      expect(screen.getByTestId("weekday-sat").innerHTML).toContain("11");
    });

    it("should render previous week days when previous week button is clicked", () => {
      render(wrapInAProvider(<App />));

      const previousWeekButton = screen.getByTestId("previous-week-button");
      fireEvent.click(previousWeekButton);

      expect(screen.getByTestId("weekday-sun").innerHTML).toContain("22");
      expect(screen.getByTestId("weekday-mon").innerHTML).toContain("23");
      expect(screen.getByTestId("weekday-tue").innerHTML).toContain("24");
      expect(screen.getByTestId("weekday-wed").innerHTML).toContain("25");
      expect(screen.getByTestId("weekday-thu").innerHTML).toContain("26");
      expect(screen.getByTestId("weekday-fri").innerHTML).toContain("27");
      expect(screen.getByTestId("weekday-sat").innerHTML).toContain("28");
    });
  });

  describe("Sidebar", () => {
    it("should open event create modal when create button is clicked", () => {
      render(wrapInAProvider(<App />));

      const createButton = screen.getByTestId("create-button");
      fireEvent.click(createButton);

      const eventCreateModal = screen.getByTestId("event-create-modal");
      expect(eventCreateModal).toBeInTheDocument();
    });

    describe("when clicking on September 8th button", () => {
      it("should display the second week of September", () => {
        render(wrapInAProvider(<App />));

        const calendarDays = screen.getByTestId("month-calendar-days");
        const septemberEight = calendarDays.children[10];
        fireEvent.click(septemberEight);

        expect(screen.getByTestId("week-date").innerHTML).toBe("September 2021");
        expect(screen.getByTestId("weekday-sun").innerHTML).toContain("5");
        expect(screen.getByTestId("weekday-sat").innerHTML).toContain("11");
      });
    });
  });
});
