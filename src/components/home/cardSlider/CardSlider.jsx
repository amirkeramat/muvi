import { useHomeState } from "../../../hooks";
import Card from "../../shared/card/Card";
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
import { getData } from "../../../redux/slice/homeSlice";
import listFixer from "../../../helper/list";
function CardSlider({ type, list }) {
  const arg = {
    type,
    list,
    page: 1,
  };
  useFetch({
    arg,
    getData,
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
        <div className="w-full bg-zinc-950 text-orange-500  flex justify-center">
          <div className=" w-full flex flex-col items-center p-4">
            <div className="w-full flex justify-between text-4xl child:py-4">
              <h2>{type.toUpperCase()}</h2>
              <h3>{listFixer(list)}</h3>
            </div>

            <Swiper
              spaceBetween={5}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper w-full"
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
                  slidesPerView: 8,
                  spaceBetween: 10,
                },
              }}
            >
              {data.map((item) => (
                <SwiperSlide className="relative w-full" key={item.id}>
                  <Card item={item} />
                </SwiperSlide>
              ))}
              <SwiperSlide className="flex flex-col justify-center items-center">
                <button onClick={loadMoreHandler}>Load More..</button>
                {moreLoading === "pending" ? (
                  <LoadingOutlined className="text-4xl" />
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
