import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const useFetch = (props) => {
  const { arg, getData } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(arg));
  }, []);

  const homeState = useSelector((state) => state.home);
  return [homeState.loading]
};

export default useFetch;
