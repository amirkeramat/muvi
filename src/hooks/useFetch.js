import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const useFetch = (props) => {
  const { arg, getData, resetAction } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(arg));
    return () => dispatch(resetAction());
  }, []);

  const homeState = useSelector((state) => state.home);
  return [homeState.loading]
};

export default useFetch;
