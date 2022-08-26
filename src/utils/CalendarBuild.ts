export default function calendarBuild(value: any) {
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');
  const day = startDay.clone().subtract(1, 'day');

  const calendar = [];
  const days: any[] = [];

  while (day.isBefore(endDay, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }

  calendar.map(rows => {
    rows.map(element => {
      days.push(element._d);
    });
  });

  return days;
}
