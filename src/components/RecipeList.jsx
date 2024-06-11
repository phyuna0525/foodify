import React, { useEffect, useState, useRef } from "react";
import * as S from "./style"; // Ensure this is correct and matches your project structure
import axios from "axios";

const ReciptList = ({ Name, ingredient, recipe }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("전체");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `/api/openapi/f9b9a13eac292e208d58050a2b2b41ac1bf41fa8ae4769a15fe32542dd4384fa/json/Grid_20150827000000000226_1/1/537`
      );
      setData(response.data.Grid_20150827000000000226_1.row);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleFilterSelect = (filter) => {
    setFilter(filter);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!data.length) {
    return <div>Loading...</div>;
  }

  const filteredData =
    filter === "전체" ? data : data.filter((item) => item.NATION_NM === filter);

  return (
    <S.ReciptListContent>
      <S.ReciptWrap>
        <S.ReciptText>번호</S.ReciptText>
        <S.Dropdown ref={dropdownRef}>
          <S.DropdownToggle onClick={() => setDropdownOpen(!dropdownOpen)}>
            {filter}
          </S.DropdownToggle>
          {dropdownOpen && (
            <S.DropdownMenu>
              {[
                "전체",
                "한식",
                "퓨전",
                "일본",
                "동남아시아",
                "서양",
                "이탈리아",
              ].map((option) => (
                <S.DropdownItem
                  key={option}
                  onClick={() => handleFilterSelect(option)}
                >
                  {option}
                </S.DropdownItem>
              ))}
            </S.DropdownMenu>
          )}
        </S.Dropdown>
      </S.ReciptWrap>
      {filteredData.map((item) => (
        <S.ReciptList key={item.ROW_NUM}>
          <S.ReciptLeft>
            <p>{item.ROW_NUM}</p>
            <S.ReciptTitle>{item.RECIPE_NM_KO}</S.ReciptTitle>
            {item.SUMRY}
          </S.ReciptLeft>
          <S.ReciptType>{item.NATION_NM}</S.ReciptType>
        </S.ReciptList>
      ))}
    </S.ReciptListContent>
  );
};

export default ReciptList;
