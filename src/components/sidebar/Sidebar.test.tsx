import { render, screen, fireEvent } from "@testing-library/react";
import { wrapInAProvider } from "../../../tests/test-utils";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  describe("when clicking next month button", () => {
    it("should display next month name and days", () => {
      render(wrapInAProvider(<Sidebar />));
      const nextMonthButton = screen.getByTestId("next-month-button");
      fireEvent.click(nextMonthButton);

      const monthName = screen.getByTestId("month-name");
      expect(monthName.innerHTML).toContain("October 2021");

      const calendarDays = screen.getByTestId("month-calendar-days");
      expect(calendarDays.children[0].innerHTML).toBe("26");
      expect(calendarDays.children[7].innerHTML).toBe("3");
      expect(calendarDays.children[14].innerHTML).toBe("10");
      expect(calendarDays.children[35].innerHTML).toBe("31");
    });
  });
});
