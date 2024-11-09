import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 150px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Bg = styled.div`
  width: 45%;
  height: 700px;
  background-color: lightblue;
`;
const TitileWrap = styled.div`
  width: 53%;
  h3 {
    font-size: 32px;
    font-weight: 700;
  }
  span {
    font-size: 18px;
  }
`;
const InfoWrap = styled.div``;

const Detail = () => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={data?.title} />
          <Wrapper>
            <Container>
              <Bg
                style={{
                  background: `url(${
                    data.poster_path ? W500_URL + data.poster_path : NOIMG_URL
                  }) no-repeat center / cover`,
                }}
              />
              <TitileWrap>
                <h3>{data.title}</h3>
                <span>{Math.round(data.vote_average)}점</span> /{" "}
              </TitileWrap>

              <InfoWrap>
                <p>{data.runtime}분</p>
                <p>{data.release_date}</p>
                <div>
                  {data.genres.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))}
                </div>
                <p>{data.overview}</p>
              </InfoWrap>
            </Container>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Detail;
