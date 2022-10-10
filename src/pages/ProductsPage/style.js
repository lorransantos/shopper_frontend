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
  width: 15%;
  min-width: 220px;
  height: 30vh;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  text-align: center;
  background-color: #ffffff;
  h2 {
    font-size: 22px;
  }
  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const CardTytle = styled.div`
  background-color: #579ee0;
  min-height: 40%;
  max-height: 150px;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 16px;
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
