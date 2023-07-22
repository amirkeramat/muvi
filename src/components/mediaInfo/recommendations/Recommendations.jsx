import { useFetchById } from "../../../hooks";
import { useParams } from "react-router-dom";
import { useDataState } from "../../../hooks";
import Card from "../../shared/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
// import { LoadingOutlined } from "@ant-design/icons";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { useDispatch } from "react-redux";
// import { getPushData } from "../../../redux/slice/dataSlice";
const Recommendations = () => {
  // const dispatch = useDispatch();
  const { type, typeId } = useParams();
  const arg = {
    id: Number(typeId),
    type,
    detail: "recommendations",
  };
  useFetchById({ arg });
  const { recommendations } = useDataState(type);
  // const loadMoreHandler = () => {
  //   const arg = {
  //     id: Number(typeId),
  //     type,
  //     detail: "similar",
  //     page: recommendations.page + 1,
  //   };
  //   dispatch(getPushData(arg));
  // };
  return (
    <>
      {recommendations.loading === "fulfilled" &&
      recommendations.results.length > 0 ? (
        <div className='w-full bg-zinc-950 text-white  flex justify-center'>
          <div className=' w-full flex flex-col items-center px-4 py-8'>
            <div className='w-full flex justify-between md:text-2xl child:py-4'>
              <h2 className='underline underline-offset-4 decoration-orange-500'>
                recommendations
              </h2>
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
                  slidesPerView: 4,
                  spaceBetween: 1,
                },
                1368: {
                  slidesPerView: 4,
                  spaceBetween: 1,
                },
              }}>
              {recommendations.results.map((item) => (
                <SwiperSlide className='relative w-full' key={item.id}>
                  <Card  type={type} item={item} />
                </SwiperSlide>
              ))}
              {/* <SwiperSlide className='flex flex-col justify-center items-center'>
                <button onClick={loadMoreHandler}>Load More..</button>
                {similar.moreLoading === "pending" ? (
                  <LoadingOutlined className='text-4xl' />
                ) : null}
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Recommendations;
