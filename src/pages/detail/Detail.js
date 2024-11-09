import styled from "styled-components";
import { NOIMG_URL, ORIGINAL_URL, W500_URL } from "../../constant/imgUrl";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import Loading from "../../components/Loading";
import PageTitle from "../../components/PageTitle";

const Wrapper = styled.div`
  padding: 150px;
  min-height: 100vh;
  position: relative;
  z-index: 1;
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
  /* align-items: flex-start; */
  position: relative;
`;
const Bg = styled.div`
  width: 44%;
  height: 650px;
  border-radius: 15px;
`;

const InnerWrap = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgba(11, 20, 43, 0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0 20px;
`;

const TitileWrap = styled.div`
  width: 500px;
  height: 70px;
  color: #fff;
  background-color: rgba(11, 20, 43, 0.8);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 45px;
  /* margin-bottom: 10px; */
  h3 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  span {
    font-size: 18px;
    font-weight: 500;
  }
`;

const InfoWrap = styled.div`
  margin-top: 50px;
  color: lightgrey;
  p {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    p {
      background-color: #2a2a2a;
      padding: 5px 10px;
      border-radius: 5px;
    }
  }

  p.overview {
    margin-top: 20px;
    line-height: 1.6;
    color: #e0e0e0;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setData(detailData);
        setIsLoading(false);
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
                  <span>{Math.round(data.vote_average)}점</span>{" "}
                </TitileWrap>

                <InfoWrap>
                  <p>{data.runtime}분</p>
                  <p>{data.release_date}</p>
                  <div>
                    {data.genres.map((genre) => (
                      <p key={genre.id}>{genre.name}</p>
                    ))}
                  </div>
                  <p className="overview">{data.overview}</p>
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
