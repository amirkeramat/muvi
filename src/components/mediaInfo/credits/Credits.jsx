import PropTypes from "prop-types";
import { useFetchById } from "../../../hooks";
import { useParams } from "react-router-dom";
import { useDataState } from "../../../hooks";
import { PROFILE_ORIGINAL, PROFILE_W185 } from "../../../api/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Credits = () => {
  const { type, typeId } = useParams();
  const arg = {
    id: Number(typeId),
    type,
    detail: "credits",
  };
  useFetchById({ arg });
  const { credits } = useDataState(type);
  console.log(credits);

  const Slider = ({ item, title }) => {
    return (
      <div className='bg-zinc-950 flex flex-col items-start child:pb-4 px-4 md:px-10'>
        <h1 className='text-zinc-50 text-2xl decoration-orange-500 underline underline-offset-4'>
          {title}
        </h1>
        <Swiper
          spaceBetween={5}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          className='mySwiper w-full px-2 md:px-10'
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1368: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}>
          {item.map((item) => (
            <SwiperSlide className='relative w-full' key={item.id}>
              <div
                key={item.id}
                className='bg-gray-700  h-[140px] flex rounded-lg p-2'>
                {item.profilePath ? (
                  <LazyLoadImage
                    src={`${PROFILE_ORIGINAL}${item.profilePath}`}
                    className='h-[120px] w-[100px] object-fill'
                    placeholderSrc={`${PROFILE_W185}/${item.profilePath}`}
                    effect='blur'
                    alt={item.name}
                  />
                ) : (
                  <LazyLoadImage
                    src='./title-logo.png'
                    className='h-[120px] w-[100px] object-contain'
                    effect='blur'
                    alt={item.name}
                  />
                )}

                <span className='flex w-[100px] flex-col justify-between  text-sm px-2'>
                  <h6 className='text-zinc-50'>{item.name}</h6>
                  <h6 className='text-gray-400 text-xs whitespace-pre-wrap '>
                    {title === "cast" ? item.character : item.job}
                  </h6>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  return (
    <>
      {credits.loading === "fulfilled" ? (
        <>
          <Slider item={credits.cast} title={"cast"} />
          <Slider item={credits.crew} title={"crew"} />
        </>
      ) : null}
    </>
  );
};

export default Credits;
Credits.propTypes = {
  item: PropTypes.array,
  title: PropTypes.string,
};