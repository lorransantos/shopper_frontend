import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
`;

export const SideBar = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  h1 {
    color: #579ee0;
  }
  img {
    width: 350px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 100vh;
  background-image: linear-gradient(120deg, #579ee0, #800080);
  box-shadow: -4px 0px 12px #999999;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 16px;
  background-color: #ffffff;
  height: 50vh;
  width: 30vw;
  h1::after {
    content: '';
    width: 100%;
    height: 16px;
    background-color: #000000;
  }
  @media (max-width: 600px) {
    width: 80%;
    height: 50%;
    min-height: 300px;
  }
`;

export const HorizontalLine = styled.hr`
  width: 90%;
  margin-bottom: 32px;
`;

//// form

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 80%;
`;

export const Input = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #111111;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #579ee0;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 20px;
  margin: 20px 0px 0px;
  cursor: pointer;
`;

export const SignupButton = styled.button`
  color: #579ee0;
  background-color: #00000000;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
