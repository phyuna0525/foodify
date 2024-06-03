import React from "react";
import * as S from "./style";

const ReciptList = ({ Name, ingredient, recipe }) => {
  return (
    <S.ReciptListContent>
      <div>
        <img src="" alt="" />
      </div>
      <div>{Name}</div>
      <div>재료</div>
      <div>{ingredient}</div>
      <div>레시피</div>
      <div>{recipe}</div>
    </S.ReciptListContent>
  );
};

export default ReciptList;
