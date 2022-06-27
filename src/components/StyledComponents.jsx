/**
 * Styled Componentsの書き方です.
 */
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>Styled componentsです</STitle>
      <SButton>ボタン</SButton>
    </SContainer>
  );
};

// 関数コンポーネントの外側に記述
const SContainer = styled.div`
  border: solid 1px #aaa;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #aaa;
`;

// SCSS記法(ここでいう&:hover以降の記述)がそのまま使える
const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;
