import * as S from "../components/style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import axios from "axios";

const Sign = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = ({ text, name }) => {
    setData({ ...data, [name]: text });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClickBtn();
    }
  };

  const navigate = useNavigate();

  const onClickBtn = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/foodify/signup`,
        {
          ...data,
        }
      );
      localStorage.setItem("name", data.username);
      const token = response.data.token;
      localStorage.setItem("accessToken", token);
      navigate("/wheel");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <S.LoginWrap>
      <S.LoginText>
        <S.PiCKText>FoodiFy</S.PiCKText> 가입하기
      </S.LoginText>
      <S.ContentWrap>
        <Input
          onChange={handleChange}
          value={data.username}
          label="아이디"
          name="username"
        />
        <Input
          onChange={handleChange}
          value={data.email}
          label="이메일"
          name="email"
        />
        <Input
          onChange={handleChange}
          value={data.password}
          label="비밀번호"
          password={true}
          name="password"
          onKeyDown={handleKeyDown}
        />
        <button onClick={onClickBtn}>회원가입</button>
      </S.ContentWrap>
    </S.LoginWrap>
  );
};

export default Sign;
