import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/slice/homeSlice";
const useFetch = (props) => {
  const { arg } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(arg));
  }, []);
};

export default useFetch;
