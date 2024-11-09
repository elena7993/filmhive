import { PacmanLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <PacmanLoader color="rgba(232, 141, 1, 1)" />
    </Container>
  );
};

export default Loading;
