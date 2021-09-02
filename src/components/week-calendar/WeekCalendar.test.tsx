import { render, screen, fireEvent } from "@testing-library/react";
import { wrapInAProvider } from "../../../tests/test-utils";
import { WeekCalendar } from "./WeekCalendar";

describe("WeekCalendar", () => {
  it("should render correct weekdays", () => {
    render(wrapInAProvider(<WeekCalendar />));

    expect(screen.getByTestId("weekday-sun").innerHTML).toContain("29");
    expect(screen.getByTestId("weekday-mon").innerHTML).toContain("30");
    expect(screen.getByTestId("weekday-tue").innerHTML).toContain("31");
    expect(screen.getByTestId("weekday-wed").innerHTML).toContain("1");
    expect(screen.getByTestId("weekday-thu").innerHTML).toContain("2");
    expect(screen.getByTestId("weekday-fri").innerHTML).toContain("3");
    expect(screen.getByTestId("weekday-sat").innerHTML).toContain("4");
  });
});
