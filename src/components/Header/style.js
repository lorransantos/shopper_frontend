import styled from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0px;
    padding: 0px;
  }
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7vh;
  background-image: linear-gradient(45deg, #ffffff 20%, #579ee0 100%);
  box-shadow: 0px 4px 12px #cccccc;
  padding: 0px 4vw;
  img {
    width: 50px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 20px;
  padding: 4px 8px;
  box-shadow: 0px 0px 4px #cccccc;
  color: #579ee0;
`;

export const HeadersGroups = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
