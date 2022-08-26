import React from 'react';
import CalendarProps from './ICalendar';

import * as Molecules from 'components/Molecules';
import * as Atoms from 'components/Atoms';
import * as S from './styles';

function Calendar({ data }: CalendarProps) {
  return (
    <S.Container>
      <Atoms.Week />
      <S.Content>
        {data.map((rows: string, index: number) => (
          <Molecules.Card key={index} days={rows} />
        ))}
      </S.Content>
    </S.Container>
  );
}

export { Calendar };
