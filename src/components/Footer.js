import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 ${mainStyle.Padding_pc};
  background-color: rgba(2, 0, 15, 1);
  display: flex;
  align-items: center;
  p {
    margin-right: 12px;
    color: rgba(232, 141, 1, 0.9);
  }
  div {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 ${mainStyle.Padding_1024};
  }

  @media screen and (max-width: 440px) {
    padding: 0 ${mainStyle.Padding_440};
    display: block;
    margin-top: 4px;
    .name {
      margin-top: 6px;
      margin-bottom: 3px;
    }
  }
`;

const Footer = () => {
  return (
    <Wrap>
      <p>CopyRight 2024</p>
      <p className="name">이현아(Elena Lee)</p>
      <div>
        <p>https://github.com/elena7993/filmhive.git</p>
        <a
          style={{ color: "rgba(232, 141, 1, 0.9)", fontSize: "15px" }}
          href="https://github.com/elena7993/filmhive.git"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
        </a>
      </div>
    </Wrap>
  );
};

export default Footer;
