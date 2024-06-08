import { styled, createGlobalStyle } from "styled-components";

export const HeaderContainer = styled.div`
  padding: 12px 4%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  width: 16%;
  gap: 8px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
`;

export const TabWarp = styled.p`
  &:hover {
    color: #45a4a9;
  }
  &:active {
    color: #409599;
  }
  white-space: nowrap;
`;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

export const LocationImg = styled.img`
  position: absolute;
  top: -30px;
  left: 45%;
`;

export const MenuButton = styled.button`
  border: 1px solid #9bd1dd;
  border-radius: 20px;
  font-size: 16px;
  padding: 4px 24px;
  transition: background-color 400ms ease-out;
  &:hover {
    background-color: #9bd1dd;
    color: white;
  }
  margin: 5px;
  background-color: ${(props) => (props.active ? "#9bd1dd" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#9bd1dd")};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  color: white;
  font-size: 24px;
  background-color: #9bd1dd;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: 40%;
  left: 41%;
`;

export const Input = styled.input`
  border: 1px solid #9bd1dd;
  width: 380px;
  padding-left: 10px;
  border-radius: 5px;
`;

export const ButtonContentWrap = styled.div`
  border: 1px solid #9bd1dd;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;
  border-radius: 20px;
  width: 460px;
`;

export const InputWrap = styled.div`
  display: flex;
  gap: 16px;
  height: fit-content;
`;

export const MenuInputButton = styled.button`
  background-color: #9bd1dd;
  padding: 8px 16px;
  border-radius: 20px;
  color: #fff;
`;

export const MenuLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FilterContainer = styled.div`
  margin: 1em 0;
  display: flex;
  align-items: center;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownToggle = styled.div`
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
  background-color: #fff;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width: 100px;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  background-color: #fff;
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const WheelContent = styled.div`
  display: flex;
  gap: 10%;
  justify-content: center;
  align-items: center;
  height: 90dvh;
`;

export const Canvas = styled.canvas``;

export const Wheel = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

export const ReciptListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const ReciptTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const ReciptWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f2;
  padding: 18px 24px;
  width: 60%;
  align-items: center;
`;

export const ReciptText = styled.p`
  font-size: 20px;
`;

export const ReciptContent = styled.div``;

export const ReciptType = styled.p`
  padding: 1px 16px;
  background-color: #9bd1dd;
  color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReciptLeft = styled.p`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ReciptList = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  width: 60%;
  border-bottom: 1px solid #f1f1f2;
`;
