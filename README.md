# @uppercod/calendar

Generates the days for a month grouped by week, example:

```js
import { getMonthRowsFromDate } from "@uppercod/calendar";

const month = getMonthRowsFromDate(new Date(2022, 1));

calendar.innerHTML = `
  <table>
    ${month.reduce(
      (content, week) =>
        content +
        `<tr>${week.reduce(
          (content, day) =>
            content +
            `<td class="month month-${
              day.getMonth() == 1 ? "in" : "out"
            }">${day.getDate()}</td>`,
          ""
        )}</tr>`,
      ""
    )} 
  </table>
`;
```
