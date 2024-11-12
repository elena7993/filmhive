import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";

const Container = styled.div`
  padding: 100px ${mainStyle.pcPadding};
  @media screen and (max-width: 1024) {
    padding: 100px ${mainStyle.Padding_1024};
  }
  @media screen and (max-width: 768) {
    padding: 100px ${mainStyle.Padding_768};
  }
  @media screen and (max-width: 440) {
    padding: 80px ${mainStyle.Padding_440};
  }
`;
const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
