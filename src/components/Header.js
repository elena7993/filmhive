import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 100%;
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  /* @media screen and (max-width:) {
  
} */
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

const Header = () => {
  return (
    <HeaderWrap>
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
    </HeaderWrap>
  );
};

export default Header;
