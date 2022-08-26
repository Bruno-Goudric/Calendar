import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <div>
        <BsArrowLeft size={20} />
      </div>
      <div>
        <span>Agosto</span>
      </div>
      <div>
        <BsArrowRight size={20} />
      </div>
    </S.Container>
  );
}

export { Header };
