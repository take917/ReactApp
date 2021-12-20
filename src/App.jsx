import { useEffect, useState } from "react";
import { List } from "./List";
import "./styles.css";
import { Form } from "./Form";
import { LANGUAGES } from "./languages";
import styled from "styled-components";

const Header = styled.header`
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
function App() {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(LANGUAGES);

  useEffect(() => {
    console.log("App.js:useEffect");
  });
  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  return (
    <div>
      <Header>
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
      </Header>

      {tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />}
    </div>
  );
}
export default App;
