import { useEffect, useState } from "react";
import { List } from "./List";
import "./styles.css";
import { Form } from "./Form";
import { getLanguages, LANGUAGES } from "./languages";
import styled from "styled-components";
import { withLoading } from "./hoc/withLoading";
import { Modal } from "./components/modal";
import { Header } from "./Header";
function App({ data }) {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(data);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  return (
    <div>
      <Header tab={tab} setTab={setTab} />
      {tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />}
      <Modal />
    </div>
  );
}
export default withLoading(App, getLanguages);
