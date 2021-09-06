import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { changeInputValue, wrapInAProvider } from "../../tests/test-utils";
import App from "./App";
import fetch from "jest-fetch-mock";
import { Event } from "../utilities/events";

describe("App", () => {
  const EVENT_TITLE = "Test event title";

  describe("Event creation modal", () => {
    beforeEach(() => {
      fetch.resetMocks();
      fetch.mockResponse(JSON.stringify([]));
    });

    it("should not be open on first render", () => {
      render(wrapInAProvider(<App />));

      const eventCreateModal = screen.queryByTestId("event-create-modal");
      expect(eventCreateModal).not.toBeInTheDocument();
    });

    describe("on form submit", () => {
      beforeEach(() => {
        const partialState = { eventCreateModal: { isOpen: true } };
        render(wrapInAProvider(<App />, partialState));

        expect(screen.queryByText(EVENT_TITLE)).not.toBeInTheDocument();
      });

      it("should not save an event when end time is incorrect", () => {
        changeInputValue("title-input", EVENT_TITLE);
        changeInputValue("date-input", "2021-09-01");
        changeInputValue("start-time-input", "12:00");
        changeInputValue("end-time-input", "10:00");

        fireEvent.click(screen.getByTestId("save-event-button"));

        expect(screen.queryByText(EVENT_TITLE)).not.toBeInTheDocument();
        expect(
          screen.getByText("End time has to be greater than start time")
        ).toBeInTheDocument();
      });

      it("should render a new event when inputs are correct", () => {
        expect(fetch).toHaveBeenCalledTimes(1);

        changeInputValue("title-input", EVENT_TITLE);
        changeInputValue("date-input", "2021-09-01");
        changeInputValue("start-time-input", "12:00");
        changeInputValue("end-time-input", "14:00");

        fireEvent.click(screen.getByTestId("save-event-button"));

        expect(screen.getByText(EVENT_TITLE)).toBeInTheDocument;
        expect(fetch).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe("Event preview modal", () => {
    const mockEvent: Event = {
      id: "123",
      title: EVENT_TITLE,
      startDate: new Date("2021-09-01 12:00"),
      endDate: new Date("2021-09-01 14:00"),
    };

    beforeEach(async () => {
      fetch.resetMocks();
      fetch.mockResponse(JSON.stringify([mockEvent]));

      render(wrapInAProvider(<App />));

      await waitFor(() => {
        expect(screen.getByTestId("event-123")).toBeInTheDocument;
      });

      fireEvent.click(screen.getByTestId("event-123"));
    });

    it("should display event info when clicked on event", () => {
      expect(screen.getByTestId("event-preview-modal")).toBeInTheDocument;
      expect(screen.getByTestId("event-preview-modal").innerHTML).toContain(EVENT_TITLE);
    });

    it("should delete an event when delete button is clicked", () => {
      fireEvent.click(screen.getByText("Delete"));

      expect(screen.queryByTestId("event-preview-modal")).not.toBeInTheDocument;
      expect(screen.queryByTestId("event-123")).not.toBeInTheDocument;
      expect(fetch).toHaveBeenCalledTimes(2);
    });
  });

  describe("Header", () => {
    beforeEach(() => {
      fetch.resetMocks();
      fetch.mockResponse(JSON.stringify([]));
      render(wrapInAProvider(<App />));
    });

    it("should render next week days when next week button is clicked", () => {
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
    beforeEach(() => {
      fetch.resetMocks();
      fetch.mockResponse(JSON.stringify([]));
      render(wrapInAProvider(<App />));
    });

    it("should open event create modal when create button is clicked", () => {
      const createButton = screen.getByTestId("create-button");
      fireEvent.click(createButton);

      const eventCreateModal = screen.getByTestId("event-create-modal");
      expect(eventCreateModal).toBeInTheDocument();
    });

    describe("when clicking on September 8th button", () => {
      it("should display the second week of September", () => {
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
