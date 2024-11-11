import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../../components/Loading";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import PageTitle from "../../components/PageTitle";
import { nowPlaying, popular, topRated, upComing } from "../../api";

// const Genre = styled.div`
//   display: flex;
// `;

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setRateData] = useState();
  const [upData, setUpComingData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: now } = await nowPlaying();
        const { results: pop } = await popular();
        const { results: top } = await topRated();
        const { results: up } = await upComing();
        setNowData(now);
        setPopData(pop);
        setUpComingData(up);
        setRateData(up);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"HOME"} />
          {nowData && (
            <div>
              <Banner data={nowData} />
            </div>
          )}

          {nowData && <Movies title="현재 상영 영화" data={nowData} />}
          {popData && <Movies title="인기 영화" data={popData} />}
          {topData && <Movies title="평점 높은 영화" data={topData} />}
          {upData && <Movies title="개봉 예정 영화" data={upData} />}
        </>
      )}

      {/* <Genre>
        <button>Action</button>
        <button>Drama</button>
        <button>Thriller</button>
        <button>Horror</button>
        <button>Documentary</button>
      </Genre> */}
    </div>
  );
};

export default Home;
