import styled from "styled-components";
import { NOIMG_URL, ORIGINAL_URL, W500_URL } from "../../constant/imgUrl";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieCredits, movieDetail, personImages } from "../../api";
import Loading from "../../components/Loading";
import PageTitle from "../../components/PageTitle";
import {
  faCalendar,
  faClock,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mainStyle } from "../../GlobalStyled";

const Wrapper = styled.div`
  padding: ${mainStyle.Padding_pc};
  min-height: 100vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1024) {
    padding: 100px ${mainStyle.Padding_1024};
  }

  @media screen and (max-width: 768) {
    padding: 0 ${mainStyle.Padding_768};
  }

  @media screen and (max-width: 440) {
    padding: 0;
  }
`;

const Bgimage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bgImg}) no-repeat center / cover;
  filter: blur(8px);
  z-index: -1;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  @media screen and (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 440px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Bg = styled.div`
  /* width: 42%; */
  width: 100%;
  max-width: 500px;
  height: 650px;
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 600px;
  }

  @media screen and (max-width: 440px) {
    width: 100%;
    height: 550px;
  }
`;

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 440px) {
    margin-top: 20px;
  }
`;

const TitileWrap = styled.div`
  width: 38%;
  height: 70px;
  color: #fff;
  background-color: rgba(11, 20, 43, 0.8);
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  line-height: 70px;
  position: absolute;
  top: 10px;
  right: 165px;
  @media screen and (max-width: 1024px) {
    width: 35%;
    h3 {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 350px;
    right: 70px;
    width: 76%;
  }

  @media screen and (max-width: 440px) {
    position: absolute;
    top: 335px;
    right: 60px;
    width: 100%;
    background-color: transparent;

    h3 {
      font-size: 20px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  span {
    font-size: 18px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const InfoWrap = styled.div`
  width: 650px;
  height: 550px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 70px 25px 25px 30px;
  color: #fff;
  @media screen and (max-width: 1024px) {
    width: 450px;
    height: auto;
    padding: 20px;
  }
  @media screen and (max-width: 768px) {
    /* width: 450px; */
    height: auto;
    padding: 15px;
    margin-top: 20px;
  }

  @media screen and (max-width: 440px) {
    width: 100%;
    height: auto;
    padding: 0;
    background-color: transparent;
  }

  .release_date {
    margin: 20px 0;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    opacity: 0.7;
    font-size: 14px;
    p {
      background-color: rgba(4, 0, 41, 1);
      border: 2px solid rgb(232, 141, 1, 0.4);
      padding: 5px 10px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
  }

  p.overview {
    margin-top: 10px;
    line-height: 1.6;
    color: #fff;
    opacity: 0.6;
  }

  .director {
    font-size: 18px;
    /* font-weight: 600; */
    margin-top: 25px;
    margin-bottom: 10px;
  }

  .cast {
    font-size: 18px;
    /* font-weight: 500; */
    margin-top: 25px;
    margin-bottom: 10px;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [creditData, setCreditData] = useState();

  // useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        const creditData = await movieCredits(id);
        const castWithImages = await Promise.all(
          creditData.cast.slice(0, 5).map(async (actor) => {
            const personImageData = await personImages(actor.id);
            console.log(personImageData);
            return {
              ...actor,
              profileImage:
                personImageData?.profiles && personImageData.profiles.length > 0
                  ? personImageData.profiles[0].file_path
                  : null,
            };
          })
        );

        setData(detailData);
        setIsLoading(false);
        setCreditData({ ...creditData, cas: castWithImages });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={data?.title} />
          <Wrapper>
            <Bgimage
              bgImg={
                data && data.backdrop_path
                  ? ORIGINAL_URL + data.backdrop_path
                  : NOIMG_URL
              }
            />
            <Container>
              <Bg
                style={{
                  background: `url(${
                    data.poster_path ? W500_URL + data.poster_path : NOIMG_URL
                  }) no-repeat center / cover`,
                }}
              />

              <InnerWrap>
                <TitileWrap>
                  <h3>{data.title}</h3>
                  <span style={{ color: "rgb(232, 141, 1)" }}>
                    <span>
                      <FontAwesomeIcon
                        style={{ fontSize: "17px", marginRight: "4px" }}
                        icon={faStar}
                      ></FontAwesomeIcon>
                    </span>
                    {Math.round(data.vote_average)}점
                  </span>{" "}
                </TitileWrap>

                <InfoWrap>
                  <p>
                    <span>
                      <FontAwesomeIcon
                        style={{
                          color: "rgb(232, 141, 1)",
                          marginRight: "6px",
                        }}
                        icon={faClock}
                      ></FontAwesomeIcon>
                    </span>
                    {data.runtime}분
                    <div
                      style={{ display: "inline-block", float: "right" }}
                      className="video_icon"
                    >
                      <button
                        style={{
                          width: "100px",
                          height: "30px",
                          backgroundColor: "rgb(232, 141, 1",
                          color: "#fff",
                          border: "none",
                          borderRadius: "20px",
                          cursor: "pointer",
                        }}
                      >
                        Watch Trailer
                      </button>
                    </div>
                  </p>
                  <p className="release_date">
                    <span>
                      <FontAwesomeIcon
                        style={{
                          color: "rgb(232, 141, 1)",
                          marginRight: "8px",
                        }}
                        icon={faCalendar}
                      ></FontAwesomeIcon>
                    </span>
                    {data.release_date}
                  </p>
                  <div>
                    {data.genres.map((genre) => (
                      <p key={genre.id}>{genre.name}</p>
                    ))}
                  </div>
                  <p className="overview">{data.overview}</p>
                  <h4 className="director">Director</h4>
                  {creditData?.crew
                    .filter((person) => person.job === "Director")
                    .map((director) => (
                      <p key={director.id} style={{ opacity: "0.6" }}>
                        {director.name}
                      </p>
                    ))}
                  <h4 className="cast">Cast</h4>
                  <div style={{ display: "flex", gap: "8px", opacity: "0.6" }}>
                    {creditData?.cast.slice(0, 4).map((actor) => (
                      <p
                        key={actor.id}
                        style={{
                          border: "none",
                          backgroundColor: "rgba(0,0,0,0)",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        {actor.name}
                        <span
                          style={{
                            paddingLeft: "5px",
                            paddingTop: "5px",
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.6)",
                            // verticalAlign: "meddle",
                          }}
                        >
                          |
                        </span>
                      </p>
                    ))}
                  </div>
                </InfoWrap>
              </InnerWrap>
            </Container>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Detail;
