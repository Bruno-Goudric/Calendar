import React from 'react';
import { weekDays } from 'utils/weeks';
import * as S from './styles';

function Week() {
  return (
    <S.Container>
      {weekDays.map((rows: any) => (
        <div key={rows}>
          <span>{rows}</span>
        </div>
      ))}
    </S.Container>
  );
}

export { Week };
