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
  border: 1px solid #000;
`;

export const Canvas = styled.canvas``;

export const Wheel = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

export const ReciptListContent = styled.div`
  display: flex;
`;
