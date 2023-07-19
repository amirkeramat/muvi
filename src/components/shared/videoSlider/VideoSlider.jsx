import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const VideoSlider = ({ videos }) => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2 w-full'>
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className='w-full flex justify-center p-10'>
              <YouTube
                className='w-full flex justify-center'
                iframeClassName='w-full md:w-[50%]'
                videoId={video.key}
                opts={{
                  height: "390",
                  width: "640",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                  },
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VideoSlider;

VideoSlider.propTypes = {
  videos: PropTypes.array,
};
