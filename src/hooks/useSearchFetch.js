import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/slice/searchSlice";
const useSearchFetch = (props) => {
  const { arg } = props;
  const { searchValue } = arg;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(arg));
  }, [searchValue]);
};

export default useSearchFetch;
