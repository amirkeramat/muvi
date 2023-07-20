import { useFetchById } from "../../hooks";
import { useParams } from "react-router-dom";
import { Intro } from "../../components/mediaInfo";
import Credits from "../../components/mediaInfo/credits/Credits";
import Videos from "../../components/mediaInfo/videos/Videos";
import Similar from "../../components/mediaInfo/similar/Similar";
const MediaInfo = () => {
  const { type, typeId } = useParams();
  const arg = {
    id: Number(typeId),
    type,
    detail: "",
  };
  useFetchById({ arg });
  return (
    <>
      <Intro type={type} />
      <Videos/>
      <Credits/>
      <Similar/>
    </>
  );
};

export default MediaInfo;
