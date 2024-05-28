import * as S from "./style.js";
import Icon from "../assets/svg/icon.svg";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderLeft>
        <img src={Icon} alt="" />
        <div>음식룰렛</div>
        <div>레시피보기</div>
      </S.HeaderLeft>
      <div>로그인</div>
    </S.HeaderContainer>
  );
};

export default Header;
