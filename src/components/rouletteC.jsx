import React, { useState, useRef, useEffect } from "react";
import * as S from "./style";

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

      // 값 텍스트 그리기
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

      // 값 테두리 그리기
      ctx.save();
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
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
      const rotate = ran * arc + 3600 + arc * 3 - arc / 4;

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

  return (
    <div>
      <S.Wheel>
        <S.Canvas ref={canvasRef} width="500" height="500" />
        <S.Button onClick={rotate}>START</S.Button>
      </S.Wheel>

      <div>
        <S.Input
          type="text"
          id="menuAdd"
          value={menuInput}
          onChange={(e) => setMenuInput(e.target.value)}
        />
        <button onClick={addMenu}>메뉴 추가</button>
      </div>
    </div>
  );
};

export default Wheel;
