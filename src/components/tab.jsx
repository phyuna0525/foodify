import * as S from "./style";

const Tab = ({ content, onClick }) => {
  return <S.TabWarp onClick={onClick}>{content}</S.TabWarp>;
};

export default Tab;
