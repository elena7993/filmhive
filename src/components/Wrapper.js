import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";

const Container = styled.div`
  padding: 100px ${mainStyle.pcPadding};
  @media screen and (max-width: 1024px) {
    padding: 100px ${mainStyle.Padding_1024};
  }
  @media screen and (max-width: 768px) {
    padding: 100px ${mainStyle.Padding_768};
  }
  @media screen and (max-width: 440px) {
    padding: 100px ${mainStyle.Padding_440};
  }
`;
const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
