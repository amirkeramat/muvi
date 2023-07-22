import PropTypes from "prop-types";
import { useDataState } from "../../../hooks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BACK_DROP_ORIGINAL, BACK_DROP_W780 } from "../../../api/image";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { PageLoader } from "../../shared";
import { useParams } from "react-router-dom";
import {useFetchById} from "../../../hooks";
const Intro = () => {
   const { type, typeId } = useParams();
   const arg = {
     id: Number(typeId),
     type,
     detail: "",
   };
   useFetchById({ arg });
  const { data, loading } = useDataState(type);
  const {
    backdropPath,
    name,
    originalTitle,
    tagline,
    status,
    releaseDate,
    voteAverage,
    firstAirDate,
    overview,
    genres,
  } = data;
  return (
    <>
      {loading === "fulfilled" ? (
        <div className="bg-zinc-950">
          <div className="w-full h-[500px] md:h-screen relative  ">
            <LazyLoadImage
              wrapperClassName="h-full  w-full after:absolute after:inset-0 after:content-[''] after:bg-zinc-950/40 "
              src={`${BACK_DROP_ORIGINAL}/${backdropPath}`}
              placeholderSrc={`${BACK_DROP_W780}/${backdropPath}`}
              effect="blur"
              className="w-full h-[500px] md:h-screen  object-cover object-center"
            />
            <div className="absolute z-[99] bottom-0 left-0 w-full p-2 md:p-4 child:my-2">
              <h3 className="text-zinc-50 text-2xl md:text-5xl">
                {name ? name : originalTitle}
              </h3>

              <h5 className="text-zinc-50 text-xl">
                {tagline ? tagline : null}
              </h5>
              <span className="child:me-2 child:mb-2 flex flex-wrap">
                {genres?.map((genre) => (
                  <Link
                    className="bg-gray-400 text-gray-900 rounded-xl py-1 px-2 hover:underline text-sm"
                    key={genre.id}
                  >
                    {genre.name}
                  </Link>
                ))}
              </span>
              <div className="grid grid-cols-3 child:mb-2 text-sm md:w-[350px]">
                <h6 className="bg-gray-900 text-gray-400 whitespace-nowrap md:py-3 md:px-2 px-2 py-2 w-[110px] rounded-xl flex justify-center items-center">
                  {status}
                </h6>
                <h6 className="bg-gray-900 text-gray-400 whitespace-nowrap md:py-3 md:px-2 w-[110px] px-1 py-2 rounded-xl flex justify-center items-center">
                  {releaseDate?.slice(0, 4)}
                  {firstAirDate?.slice(0, 4)}
                </h6>
                <h6 className="bg-gray-900   text-gray-400 whitespace-nowrap md:py-3 md:px-2 px-1 py-2 w-[110px] rounded-xl flex justify-center items-center child:me-1">
                  <span className="bg-yellow-500 px-1 font-bold rounded-lg text-zinc-950">
                    IMDB
                  </span>
                  {voteAverage?.toFixed(1)}
                  {"/"}
                  {10}
                </h6>
              </div>
              <button className="bg-orange-500 px-8 py-2 rounded-xl">
                Download
              </button>
            </div>
          </div>
          <div className="py-8 px-4 text-xl">
            <span className="text-gray-400">
              <h6 className="text-orange-500">Story</h6>
              {overview}
            </span>
          </div>
        </div>
      ) : (
        <PageLoader />
      )}
    </>
  );
};

export default Intro;

Intro.propTypes = {
  type: PropTypes.string,
};
