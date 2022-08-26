import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  > div {
    width: 120px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    margin: 0 25px;

    > span {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 7px;
      color: #afb9c1;
    }
  }
`;
