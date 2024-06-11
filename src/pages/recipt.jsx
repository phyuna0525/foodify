import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../components/style";
import { styled } from "styled-components";

const ReciptDetail = () => {
  const nav = useNavigate();
  return (
    <Content>
      <div>준비된 레시피가 없습니다 </div>
      <Button
        onClick={() => {
          nav(-1);
        }}
      >
        뒤로가기
      </Button>
    </Content>
  );
};

export default ReciptDetail;

const Content = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  gap: 20px;
`;

export const Button = styled.button`
  color: white;
  font-size: 24px;
  background-color: #9bd1dd;
  border-radius: 20px;
  padding: 10px 20px;
`;
