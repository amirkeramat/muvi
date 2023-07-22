import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/slice/dataSlice";
import { useParams } from "react-router-dom";
const useFetchById = (props) => {
  const { typeId } = useParams();
  const { arg } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getData(arg));
  }, [typeId]);
};

export default useFetchById;
