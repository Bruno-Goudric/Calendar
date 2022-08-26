import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  border: 1px solid #ccc;
`;

export const Content = styled.article`
  display: flex;
  flex-wrap: wrap;

  > div {
    margin: 0 25px;
  }
`;
