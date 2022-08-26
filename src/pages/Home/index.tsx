import React from 'react';

import * as Molecules from 'components/Molecules';
import * as Organisms from 'components/Organisms';
import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <Molecules.Header />
      <Organisms.Calendar />
    </S.Container>
  );
}

export { Home };
