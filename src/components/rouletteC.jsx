import React, { useState, useRef, useEffect } from "react";
import * as S from "./style";
import Location from "../assets/svg/location.svg";

const Wheel = () => {
  const canvasRef = useRef(null);
  const [menuInput, setMenuInput] = useState("");
  const [product, setProduct] = useState([
    "떡볶이",
    "돈가스",
    "초밥",
    "피자",
    "냉면",
    "치킨",
    "족발",
    "피자",
    "삼겹살",
  ]);
  const [korean] = useState([
    "김치찌개",
    "된장찌개",
    "불고기",
    "칼국수",
    "떡볶이",
    "잡채",
    "삼겹살",
    "갈비",
  ]);
  const [china] = useState([
    "짜장면",
    "짬뽕",
    "깐풍기",
    "마라탕",
    "딤섬",
    "마라샹궈",
    "마파두부",
    "고추잡채",
    "크림새우",
  ]);
  const [western] = useState([
    "피자",
    "샐러드",
    "파스타",
    "스테이크",
    "샌드위치",
    "햄버거",
    "핫도그",
    "리조또",
  ]);
  const [japen] = useState([
    "스시",
    "우동",
    "회",
    "오뎅",
    "라면",
    "소바",
    "샤브샤브",
    "타코야키",
    "가라아게",
  ]);

  const [buttonsState, setButtonsState] = useState({
    korean: false,
    china: false,
    western: false,
    japen: false,
  });

  useEffect(() => {
    drawWheel();
  }, [product]);

  const drawWheel = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const [cw, ch] = [canvas.width / 2, canvas.height / 2];
    const arc = Math.PI / (product.length / 2);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < product.length; i++) {
      const angle = arc * i + arc / 2;

      ctx.save();
      ctx.fillStyle = "#000";
      ctx.font = "18px Pretendard";
      ctx.textAlign = "center";
      ctx.translate(
        cw + Math.cos(angle) * (cw - 50),
        ch + Math.sin(angle) * (ch - 50)
      );
      ctx.rotate(angle + Math.PI / 2);
      product[i].split(" ").forEach((text, j) => {
        ctx.fillText(text, 0, 30 * j);
      });
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = "#9bd1dd";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(cw, ch, cw - 5, arc * i, arc * (i + 1));
      ctx.stroke();
      ctx.restore();
    }
  };

  const rotate = () => {
    const canvas = canvasRef.current;
    canvas.style.transform = `initial`;
    canvas.style.transition = `initial`;

    setTimeout(() => {
      const ran = Math.floor(Math.random() * product.length);

      const arc = 360 / product.length;
      const rotate = ran * arc + 3600 + 110 - arc / 2;

      canvas.style.transform = `rotate(-${rotate}deg)`;
      canvas.style.transition = `2s`;

      setTimeout(
        () => alert(`오늘의 야식은?! ${product[ran]} 어떠신가요?`),
        2000
      );
    }, 1);
  };

  const addMenu = () => {
    if (menuInput !== "") {
      setProduct([...product, menuInput]);
      setMenuInput("");
    } else {
      alert("메뉴를 입력한 후 버튼을 클릭 해 주세요");
    }
  };

  const addCategory = (category, categoryName) => {
    if (!buttonsState[categoryName]) {
      const newProduct = [...product, ...category];
      setProduct(shuffleArray(newProduct));
      setButtonsState((prevState) => ({
        ...prevState,
        [categoryName]: true,
      }));
    }
  };

  const removeCategory = (category, categoryName) => {
    if (buttonsState[categoryName]) {
      const newProduct = product.filter((item) => !category.includes(item));
      setProduct(newProduct);
      setButtonsState((prevState) => ({
        ...prevState,
        [categoryName]: false,
      }));
    }
  };

  const toggleCategory = (category, categoryName) => {
    if (buttonsState[categoryName]) {
      removeCategory(category, categoryName);
    } else {
      addCategory(category, categoryName);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addMenu();
    }
  };

  return (
    <S.WheelContent>
      <S.MenuLeft>
        <p>무엇을 먹어야지 잘 먹었다고 소문날까?</p>
        <S.InputWrap>
          <S.Input
            type="text"
            id="menuAdd"
            value={menuInput}
            onChange={(e) => setMenuInput(e.target.value)}
            placeholder="먹고싶은 음식을 입력해주세요"
            onKeyDown={handleKeyDown}
          />
          <S.MenuInputButton onClick={addMenu}> 추가 </S.MenuInputButton>
        </S.InputWrap>
        <S.ButtonContentWrap>
          <p> 먹고싶은 음식 종류를 선택하세요</p>
          <S.ButtonWrap>
            <S.MenuButton
              onClick={() => toggleCategory(korean, "korean")}
              active={buttonsState.korean}
            >
              한식
              {buttonsState.korean && (
                <span onClick={() => removeCategory(korean, "korean")}>x</span>
              )}
            </S.MenuButton>
            <S.MenuButton
              onClick={() => toggleCategory(china, "china")}
              active={buttonsState.china}
            >
              중식
              {buttonsState.china && (
                <span onClick={() => removeCategory(china, "china")}>x</span>
              )}
            </S.MenuButton>
            <S.MenuButton
              onClick={() => toggleCategory(western, "western")}
              active={buttonsState.western}
            >
              양식
              {buttonsState.western && (
                <span onClick={() => removeCategory(western, "western")}>
                  x
                </span>
              )}
            </S.MenuButton>
            <S.MenuButton
              onClick={() => toggleCategory(japen, "japen")}
              active={buttonsState.japen}
            >
              일식
              {buttonsState.japen && (
                <span onClick={() => removeCategory(japen, "japen")}>x</span>
              )}
            </S.MenuButton>
          </S.ButtonWrap>
        </S.ButtonContentWrap>
      </S.MenuLeft>
      <S.Wheel>
        <S.Canvas ref={canvasRef} width="500" height="500" />
        <S.Button onClick={rotate}>START</S.Button>
        <S.LocationImg src={Location} />
      </S.Wheel>
    </S.WheelContent>
  );
};

export default Wheel;
