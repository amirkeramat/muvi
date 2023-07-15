import { Hero } from "../../components/home";
import { useDispatch, useSelector } from "react-redux";
import { getData, resetAction } from "../../redux/slice/homeSlice";
import { useEffect } from "react";
const Home = () => {
  const homeState = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    const arg = {
      type: "movie",
      list: "now_playing",
    };
    dispatch(getData(arg));
    return () => dispatch(resetAction());
  }, []);

  return <div className="w-full h-full">{homeState.loading === "fulfilled" ? <Hero /> : null}</div>;
};

export default Home;
