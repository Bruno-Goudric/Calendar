import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1200px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #ccc;

  > div span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 50px;
    color: #fff;
  }

  > div svg {
    color: #fff;
  }

  .nameMonth {
    text-transform: capitalize;
  }

  .actionHeader {
    cursor: pointer;
  }
`;
