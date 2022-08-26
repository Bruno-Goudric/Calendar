import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1200px;
  height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > div span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 50px;
    color: #3d3633;
  }
  border: 1px solid #ccc;
`;
