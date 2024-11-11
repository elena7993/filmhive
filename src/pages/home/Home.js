import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import PageTitle from "../../components/PageTitle";
import { nowPlaying, popular, topRated, upComing } from "../../api";

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

          {nowData && <Movies title="Now Playing" data={nowData} />}
          {popData && <Movies title="Popular" data={popData} />}
          {topData && <Movies title="Top Rated" data={topData} />}
          {upData && <Movies title="Upcoming" data={upData} />}
        </>
      )}
    </div>
  );
};

export default Home;
