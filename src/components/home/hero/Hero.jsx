import { useHomeState } from "../../../hooks";
import { BACK_DROP_ORIGINAL, BACK_DROP_W300 } from "../../../api/image";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetch from "../../../hooks/useFetch";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const Hero = () => {
  const arg = {
    type: "movie",
    list: "now_playing",
    page: 1,
  };
  useFetch({
    arg,
  });
  const { data } = useHomeState(arg.type, arg.list);
  return (
    <>
      {data.length ? (
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
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
          className="mySwiper w-full md:h-screen h-[500px]"
        >
          {data.slice(0, 20).map((item) => (
            <SwiperSlide key={item.id}>
              <Container>
                <LazyLoadImage
                  src={`${BACK_DROP_ORIGINAL}${item.backdropPath}`}
                  width={"100%"}
                  className="md:h-screen h-[500px]  object-cover object-center"
                  wrapperClassName="h-full  w-full after:absolute after:inset-0 after:content-[''] after:bg-zinc-950/40 "
                  placeholderSrc={`${BACK_DROP_W300}/${item.posterPath}`}
                  effect="blur"
                  alt={item.title}
                />
                <Content>
                  <Title className="rounded-full flex items-center text-zinc-50 text-2xl justify-center w-full">
                    <Link to={`/mediaInfo/${arg.type}/${item.id}`}>
                      {item.originalTitle}
                    </Link>
                  </Title>

                  <span className="flex w-full child:py-4 child:px-6 items-center justify-center">
                    <Language>
                      {item.originalLanguage === "en"
                        ? "English"
                        : item.originalLanguage}
                    </Language>
                    <Vote>{item.voteAverage}</Vote>
                    <ReleaseData>{item.releaseDate.slice(0, 4)}</ReleaseData>
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
