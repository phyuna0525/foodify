import * as S from "./style.js";
import Icon from "../assets/svg/icon.svg";
import Tab from "./tab.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");

  return (
    <S.HeaderContainer>
      <S.HeaderLeft>
        <img
          src={Icon}
          alt=""
          onClick={() => {
            navigate("/wheel");
          }}
        />
        <Tab
          content={"음식 룰렛"}
          onClick={() => {
            navigate("wheel");
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
        {name ? name : "로그인"}
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
