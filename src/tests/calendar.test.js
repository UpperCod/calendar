import { expect, test } from "vitest";
import { getMonthRowsFromDate } from "../calendar";
import dataExpect from "./expect";

test("Calendar", () => {
  dataExpect.forEach(([date, data]) =>
    expect(
      getMonthRowsFromDate(date).map((week) => week.map((day) => day.getDate()))
    ).toEqual(data)
  );
});
