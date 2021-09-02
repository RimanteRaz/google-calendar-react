import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from ".";
import { wrapInAProvider } from "../../../tests/test-utils";

describe("Header", () => {
  describe("previous week button", () => {
    it("renders previous week date text when clicked", () => {
      render(wrapInAProvider(<Header />));

      const previousWeekButton = screen.getByTestId("previous-week-button");
      fireEvent.click(previousWeekButton);

      const dateDisplayText = screen.getByTestId("week-date");
      expect(dateDisplayText.innerHTML).toBe("August 2021");
    });
  });

  describe("next week button", () => {
    it("renders next week date text when clicked", () => {
      render(wrapInAProvider(<Header />));

      const nextWeekButton = screen.getByTestId("next-week-button");
      fireEvent.click(nextWeekButton);

      const dateDisplayText = screen.getByTestId("week-date");
      expect(dateDisplayText.innerHTML).toBe("September 2021");
    });
  });
});
