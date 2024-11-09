import { Link } from "react-router-dom";
import { W500_URL } from "../../../constant/imgUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";

const Container = styled.section`
  padding: 10px 150px;
  color: #fff;
`;
const Title = styled.div`
  margin: 50px 0 20px 0;
  font-size: 24px;
  font-weight: 700;
`;
const Con = styled.div`
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const params = {
  spaceBetween: 10,
  slidesPerView: 3.3,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 4.5,
    },

    640: {
      spaceBetween: 15,
      slidesPerView: 3.5,
    },
    430: {
      spaceBetween: 10,
      slidesPerView: 2.5,
    },
  },
};

const Movies = ({ data, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Swiper {...params}>
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Con>
              <Link to={`/detail/${movie.id}`}>
                <img src={W500_URL + movie.poster_path} alt={movie.title} />
              </Link>
            </Con>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;
