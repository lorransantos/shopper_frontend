import styled from 'styled-components';

export const ContainerSideBar = styled.div`
  * {
    margin: 0px;
  }
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: #ffffff;
  position: fixed;
  top: 7vh;
  right: 0px;
  width: 400px;
  padding: 16px;
  right: ${(props) => (props.sideBar ? '0' : '100%')};
  animation: ${(props) => (props.sideBar ? '1s showSideBar' : null)};
  @keyframes showSideBar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
  @media (max-width: 600px) {
    width: 70%;
    max-height: 70%;
  }
`;

export const Card = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
  border-radius: 4px;
  span {
    color: #579ee0;
    font-weight: bold;
  }
`;

export const OrdersList = styled.div`
  box-sizing: border-box;
  border: 1px solid #000000;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 50vh;
  overflow-y: auto;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: #579ee0;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 16px;
`;

export const AlterQuantity = styled.div`
  display: flex;
  gap: 16px;
`;

export const AddOrRemoveButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: #00000000;
  color: #579ee0;
  font-size: 16px;
  font-weight: bold;
  padding: 4px;
`;

/// form

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
  width: 80%;
`;
