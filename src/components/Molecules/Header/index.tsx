import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import HeaderProps from './IHeader';
import * as S from './styles';

function Header({ month, nextMonth, lastMonth }: HeaderProps) {
  return (
    <S.Container>
      <div className="actionHeader">
        <BsArrowLeft size={20} onClick={lastMonth} />
      </div>
      <div>
        <span className="nameMonth">{month}</span>
      </div>
      <div className="actionHeader">
        <BsArrowRight size={20} onClick={nextMonth} />
      </div>
    </S.Container>
  );
}

export { Header };
