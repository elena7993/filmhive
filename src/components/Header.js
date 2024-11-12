import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";
import { useEffect, useRef } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderWrap = styled.header`
  width: 100%;
  padding: 20px ${mainStyle.Padding_pc};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  @media screen and (max-width: 1024px) {
    padding: 20px ${mainStyle.Padding_1024};
  }
  @media screen and (max-width: 768px) {
    padding: 20px ${mainStyle.Padding_768};
  }
  @media screen and (max-width: 440px) {
    padding: 20px ${mainStyle.Padding_440};
  }
`;
const Logo = styled.h3`
  font-size: 28px;
  font-weight: 800;
  a {
    color: rgba(232, 141, 1, 1);
  }
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  color: #fff;
  li {
    margin-left: 100px;
    a {
      color: #fff;
    }
  }
`;

const Bar = styled.div`
  font-size: 18px;
`;

const Header = () => {
  const headerRef = useRef();

  const scrollHandler = () => {
    const pageY = window.scrollY;
    const current = headerRef.current;
    console.log(pageY);
    // console.log(current);

    if (pageY >= 400) {
      current.style.position = "fixed";
      current.style.backgroundColor = "raga(0,0,0,0.5)";
      current.style.backdropFilter = "blur(10px)";
    } else {
      current.style.position = "absolute";
      current.style.backgroundColor = "transparent";
      current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });

  return (
    <HeaderWrap ref={headerRef}>
      <Logo>
        <Link to={"/"}>FILMHIVE</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>

        <li>
          <Link to={"/search"}>SEARCH</Link>
        </li>
      </Menu>

      <Bar>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </Bar>
    </HeaderWrap>
  );
};

export default Header;
