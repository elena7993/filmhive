import styled from "styled-components";
import { ORIGINAL_URL } from "../../../constant/imgUrl";

const MainBanner = styled.section`
  height: 80vh;
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
    cover;
  padding: 0 20px;
  position: relative;
`;

const TitleWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 150px;
  left: 0;
  padding: 0 150px;
  color: #fff;
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
