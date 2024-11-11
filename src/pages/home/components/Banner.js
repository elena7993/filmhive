import styled from "styled-components";
import { ORIGINAL_URL } from "../../../constant/imgUrl";
import { mainStyle } from "../../../GlobalStyled";

const MainBanner = styled.section`
  height: 80vh;
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
    cover;
  padding: 0 ${mainStyle.Padding_pc};
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 0 ${mainStyle.Padding_1024};
  }

  @media screen and (max-width: 440px) {
    padding: 0 ${mainStyle.Padding_440};
  }
`;

const TitleWrap = styled.div`
  width: 85%;
  position: absolute;
  bottom: 110px;
  left: 0;
  padding: 0 ${mainStyle.Padding_pc};
  color: #fff;
  @media screen and (max-width: 1024px) {
    padding: 0 ${mainStyle.Padding_1024};
  }

  @media screen and (max-width: 440px) {
    width: 85%;
    bottom: 35px;
    h3 {
      font-size: 24px;
    }
    padding: 0 ${mainStyle.Padding_440};
  }
  h3 {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    line-height: 20px;
    opacity: 0.7;
  }
`;

const Banner = ({ data }) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomMovie = data[randomIndex];
  return (
    <MainBanner $coverImg={randomMovie.backdrop_path}>
      <TitleWrap>
        <h3>{randomMovie?.title}</h3>
        <p>{randomMovie?.overview.slice(0, 100) + "..."}</p>
      </TitleWrap>
    </MainBanner>
  );
};

export default Banner;
