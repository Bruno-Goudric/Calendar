import React, { useEffect, useState } from 'react';
import calendarBuild from 'utils/CalendarBuild';
import moment from 'moment';
import { formatMonth } from 'utils/FormatMonth';

import * as Molecules from 'components/Molecules';
import * as Organisms from 'components/Organisms';
import * as S from './styles';

function Home() {
  const [value, setValue] = useState(moment().locale('pt-br'));
  const [searchMonth, setSearchMonth] = useState<number>(0);
  const [calendar, setCalendar] = useState<any>([]);

  const addMonth = () => {
    setSearchMonth(searchMonth + 1);
    setValue(value.add(1, 'M'));
    const days = calendarBuild(value);
    setCalendar(days);
  };

  const removeMonth = () => {
    setSearchMonth(searchMonth - 1);
    setValue(value.add(-1, 'M'));
    const days = calendarBuild(value);
    setCalendar(days);
  };

  useEffect(() => {
    setValue(value.add(searchMonth, 'M'));
    const days = calendarBuild(value);
    setCalendar(days);
  }, []);
  return (
    <S.Container>
      <Molecules.Header
        month={formatMonth(searchMonth)}
        nextMonth={addMonth}
        lastMonth={removeMonth}
      />
      <Organisms.Calendar data={calendar} />
    </S.Container>
  );
}

export { Home };
