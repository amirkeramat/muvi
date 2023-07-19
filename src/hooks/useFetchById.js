import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData, resetAction } from "../redux/slice/dataSlice";
const useFetchById = (props) => {
  const { arg } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({top:0,left:0,behavior:"smooth"})
    dispatch(getData(arg));
    return () => dispatch(resetAction());
  }, []);
};

export default useFetchById;
