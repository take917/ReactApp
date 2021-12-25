import { Modal } from "./components/modal";
import styled from "styled-components";
import { Button } from "./components/button";
const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: white;
`;
const ButtonWrappter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const FormModal = ({ confirm, cancel }) => {
  return (
    <Modal>
      <Container>
        <div>本当に作成しますか？</div>
        <ButtonWrappter>
          <Button onClick={cancel}>cancel</Button>
          <Button onClick={confirm}>OK</Button>
        </ButtonWrappter>
      </Container>
    </Modal>
  );
};
