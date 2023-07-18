import { useHomeState } from "../../../hooks";
import { BACK_DROP_ORIGINAL } from "../../../api/image";
import {
  Container,
  Content,
  Language,
  ReleaseData,
  Title,
  Vote,
} from "./hero.style";
import { Link } from "react-router-dom";
import PageLoader from "../../shared/pageLoader/PageLoader";
import { getData, resetAction } from "../../../redux/slice/homeSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetch from "../../../hooks/useFetch";
const Hero = () => {
  const arg = {
    type: "movie",
    list: "now_playing",
    page: "1",
  };
  useFetch({
    arg,
    getData,
    resetAction,
  });
  const { data, loading } = useHomeState(arg.type, arg.list);
  return (
    <>
      {data.length && loading === "fulfilled" ? (
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper w-screen h-screen"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Container
                style={{
                  "--image-url": `url(${BACK_DROP_ORIGINAL}${item.backdropPath})`,
                }}
              >
                <Content>
                  <Title className="rounded-full flex items-center text-zinc-50 text-2xl justify-center w-full">
                    <Link to={`/movie/${item.id}`}>{item.originalTitle}</Link>
                  </Title>

                  <span className="flex w-full child:py-4 child:px-6 items-center justify-center">
                    <Language>
                      {item.originalLanguage === "en"
                        ? "English"
                        : item.originalLanguage}
                    </Language>
                    <Vote>{item.voteAverage}</Vote>
                    <ReleaseData>{item.releaseDate}</ReleaseData>
                  </span>
                </Content>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <PageLoader />
      )}
    </>
  );
};

export default Hero;
