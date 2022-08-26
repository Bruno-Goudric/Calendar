import React, { useEffect, useState } from 'react';
import moment from 'moment';
import CardProps from './ICard';
import { verifyHoliday } from 'utils/verifyHolidays';

import * as S from './styles';

function Card({ days }: CardProps) {
  const [monthCurrent, setMonthCurrent] = useState<number>(0);

  const getMonth = () => {
    const monthAtual = moment().locale('pt-br').month();
    setMonthCurrent(monthAtual);
  };

  useEffect(() => {
    getMonth();
  }, []);

  return (
    <S.Container
      style={{
        background: `${
          verifyHoliday(days)
            ? 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(116,8,34,0.7175245098039216) 100%)'
            : '#fff'
        }`
      }}
    >
      {days.getMonth() !== monthCurrent ? (
        <span style={{ color: '#C4CDD5' }}>{moment(days).format('DD')}</span>
      ) : (
        <span>{moment(days).format('DD')}</span>
      )}
    </S.Container>
  );
}

export { Card };
