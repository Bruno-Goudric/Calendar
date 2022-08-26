import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 5px;
    box-shadow: 5px 10px 17px 1px rgba(0, 0, 0, 0.56);
  }
`;
