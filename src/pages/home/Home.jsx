import { Hero } from "../../components/home";
import { CardSlider } from "../../components/shared";
const Home = () => {
  return (
    <>
      <Hero />
      <div id='movie'>
        <CardSlider shape={"ver"} type='movie' list='upcoming' />
        <CardSlider type='movie' list='now_playing' />
        <CardSlider shape={"ver"} type='movie' list='popular' />
        <CardSlider type='movie' list='top_rated' />
      </div>
      <div id='tv'>
        <CardSlider shape={"ver"} type='tv' list='airing_today' />
        <CardSlider type='tv' list='on_the_air' />
        <CardSlider shape={"ver"} type='tv' list='popular' />
        <CardSlider type='tv' list='top_rated' />
      </div>
    </>
  );
};

export default Home;
