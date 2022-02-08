export const getMonthString = (month: Date) =>
  month.getFullYear() + "-" + month.getMonth();

export function getMonthRowsFromDate(date: Date, day: number = 1) {
  let month = new Date(date.getFullYear(), date.getMonth());
  let firstDay = month.getDay();
  let i = 0;

  let week: Date[];
  let rows: Date[][] = [];
  let end = getMonthString(month);

  month.setDate((firstDay - day) * -1 + 1);

  while (true) {
    if (Number.isInteger(i / 7)) {
      if (end < getMonthString(month)) break;
      rows.push((week = []));
    }

    week.push(new Date(month));
    month.setDate(month.getDate() + 1);
    i++;
  }

  return rows;
}
