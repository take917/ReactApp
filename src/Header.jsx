import styled from "styled-components";
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #e0e0e0;
`;
const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
const HeaerLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${(props) => (props.focused ? "2px solid #F44336" : "none")};
`;

export const Header = ({ tab, setTab }) => {
  return (
    <Container>
      <HeaderUl>
        <HeaerLi
          focused={tab === "list"}
          onClick={() => {
            setTab("list");
          }}
        >
          リスト
        </HeaerLi>
        <HeaerLi
          focused={tab === "form"}
          onClick={() => {
            setTab("form");
          }}
        >
          フォーム
        </HeaerLi>
      </HeaderUl>
    </Container>
  );
};
