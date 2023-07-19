import { useFetchById } from "../../../hooks";
import { useParams } from "react-router-dom";
import { useDataState } from "../../../hooks";
import VideoSlider from "../../shared/videoSlider/VideoSlider";
const Videos = () => {
  const { type, typeId } = useParams();
  const arg = {
    id: Number(typeId),
    type,
    detail: "videos",
  };
  useFetchById({ arg });
  const { videos } = useDataState(type);
  return (
    <div className='p-4 md:p-20 bg-zinc-950'>
      <h1 className='text-orange-500 text-center text-2xl'>Trailers</h1>
      {videos ? <VideoSlider videos={videos} /> : null}
    </div>
  );
};

export default Videos;
