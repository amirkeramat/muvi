import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, resetAction } from "../../redux/slice/dataSlice";
import { useParams } from "react-router-dom";
const Movie = () => {
  const { movieID } = useParams();
  const { loading } = useSelector((state) => state.singleData);
  const dispatch = useDispatch();
  useEffect(() => {
    const arg = {
      id: Number(movieID),
      type: "movie",
    };
    dispatch(getData(arg));
    return () => dispatch(resetAction());
  }, []);
  return <>{loading === "fulfilled" ? <div>Movie</div> : null}</>;
};

export default Movie;
