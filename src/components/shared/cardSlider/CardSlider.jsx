import PropTypes from "prop-types";
import { useHomeState } from "../../../hooks";
import Card from "../card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { LoadingOutlined } from "@ant-design/icons";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";
import { getPushData } from "../../../redux/slice/homeSlice";
import useFetch from "../../../hooks/useFetch";
import listFixer from "../../../helper/list";
function CardSlider({ type, list, shape }) {
  const arg = {
    type,
    list,
    page: 1,
  };
  useFetch({
    arg,
  });
  const { data, pager, moreLoading } = useHomeState(type, list);
  const { page } = pager;
  const dispatch = useDispatch();
  const loadMoreHandler = () => {
    const arg = {
      type,
      list,
      page: page + 1,
    };
    dispatch(getPushData(arg));
  };
  return (
    <>
      {data.length ? (
        <div className='w-full bg-zinc-950 text-orange-500  flex justify-center'>
          <div className=' w-full flex flex-col items-center p-4'>
            <div className='w-full flex justify-start items-start md:text-2xl child:py-4 child:me-2'>
              <h2 className='underline underline-offset-4 decoration-white'>
                {type === "tv" ? "TV Series" : type.toUpperCase()}
              </h2>
              <h3 className='text-sm text-white'>{listFixer(list)}</h3>
            </div>

            <Swiper
              spaceBetween={5}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              className='mySwiper w-full'
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 1,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 1,
                },
                1368: {
                  slidesPerView: shape === "ver" ? 6 : 4,
                  spaceBetween: 1,
                },
              }}>
              {data.map((item) => (
                <>
                  {shape === "ver" ? (
                    <SwiperSlide className='relative w-[200px]' key={item.id}>
                      <Card shape={shape} type={type} item={item} />
                    </SwiperSlide>
                  ) : (
                    <SwiperSlide className='relative w-[400px]' key={item.id}>
                      <Card shape={shape} type={type} item={item} />
                    </SwiperSlide>
                  )}
                </>
              ))}
              <SwiperSlide className='flex flex-col justify-center items-center'>
                <button onClick={loadMoreHandler}>Load More..</button>
                {moreLoading === "pending" ? (
                  <LoadingOutlined className='text-4xl' />
                ) : null}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CardSlider;

CardSlider.propTypes = {
  type: PropTypes.string,
  list: PropTypes.string,
  shape: PropTypes.string,
};
