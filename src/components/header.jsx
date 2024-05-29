import * as S from "./style.js";
import Icon from "../assets/svg/icon.svg";
import Tab from "./tab.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderContainer>
      <S.HeaderLeft>
        <img src={Icon} alt="" />
        <Tab
          content={"음식 룰렛"}
          onClick={() => {
            navigate("roluet");
          }}
        />
        <Tab
          content={"레시피 보기"}
          onClick={() => {
            navigate("recipt");
          }}
        />
      </S.HeaderLeft>
      <div
        onClick={() => {
          navigate("login");
        }}
        style={{ cursor: "pointer" }}
      >
        로그인
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
