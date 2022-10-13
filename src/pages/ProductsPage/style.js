import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10vh 0px;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Card = styled.div`
  * {
    margin: 0px;
    padding: 0px;
  }
  box-shadow: 0px 0px 10px #cccccc;
  border-radius: 20px;
  width: 10%;
  min-width: 220px;
  max-width: 250px;
  height: 35vh;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  text-align: center;
  background-color: #ffffff;
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 20px;
    font-weight: bold;
  }
  @media (max-width: 700px) {
    min-width: 180px;
    height: 30vh;
  }
`;

export const CardTytle = styled.div`
  background-color: #579ee0;
  box-sizing: border-box;
  min-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  padding: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Button = styled.button`
  background-color: #579ee0;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  margin-bottom: 16px;
  cursor: pointer;
`;
