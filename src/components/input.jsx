import * as S from "./style";
import React, { useState } from "react";
import eyeOff from "../assets/svg/eye.svg";
import eye from "../assets/svg/eyesOpen.svg";

const Input = ({
  label,
  placeholder,
  widthtype,
  name = "",
  onChange,
  value,
  onKeyDown,
  password,
}) => {
  const [showOpen, setShowOpen] = useState(false);
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = () => {
    setShowOpen(!showOpen);
    setInputType(showOpen ? "password" : "text");
  };

  return (
    <S.InputWraps>
      <S.inputLabel>{label}</S.inputLabel>
      <S.InputContainer type={widthtype}>
        <S.inputContent
          type={password ? inputType : "text"}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => onChange({ text: e.target.value, name })}
          onKeyDown={onKeyDown}
        />
        {password && (
          <S.Icon onClick={togglePasswordVisibility}>
            {showOpen ? (
              <img src={eye} alt="Eyes Open" />
            ) : (
              <img src={eyeOff} alt="Eyes Close" />
            )}
          </S.Icon>
        )}
      </S.InputContainer>
    </S.InputWraps>
  );
};

export default Input;
