const holidays = [
  'Apr 15',
  'Apr 17',
  'Apr 21',
  'May 01',
  'Jun 16',
  'Sep 07',
  'Oct 12',
  'Nov 02',
  'Nov 15',
  'Dec 24',
  'Dec 25',
  'Dec 31'
];

export function verifyHoliday(dado: any) {
  const isHoliday = holidays.filter(element => {
    if (dado.toString().indexOf(element) > -1) {
      return true;
    }

    return false;
  });

  return isHoliday.length > 0 ? true : false;
}
