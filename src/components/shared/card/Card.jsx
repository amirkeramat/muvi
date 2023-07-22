import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import {
  POSTER_W342,
  POSTER_W780,
  BACK_DROP_W780,
  BACK_DROP_W300,
} from "../../../api/image";
import { StarOutlined } from "@ant-design/icons";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ item, type, shape }) => {
  return (
    <div className='w-full md:hover:opacity-90  cursor-pointer p-4 md:p-0'>
      {shape === "ver" ? (
        <LazyLoadImage
          width={"100%"}
          src={`${POSTER_W780}/${item.posterPath}`}
          className='h-[350px] w-full object-cover object-center'
          placeholderSrc={`${POSTER_W342}/${item.posterPath}`}
          effect='blur'
          alt={item.title}
        />
      ) : (
        <LazyLoadImage
          width={"100%"}
          src={`${BACK_DROP_W780}/${item.backdropPath}`}
          className='h-[200px]  object-fill object-center'
          placeholderSrc={`${BACK_DROP_W300}/${item.backdropPath}`}
          effect='blur'
          alt={item.title}
        />
      )}
      <div className='absolute w-full top-0 h-[50px] bg-zinc-950/40 flex flex-col  justify-center items-center'>
        <Link
          to={`/mediaInfo/${type}/${item.id}`}
          className='text-zinc-50 text-ellipsis font-bold text-center hover:underline text-sm'>
          {item.originalTitle}
        </Link>
      </div>
      <div className='absolute w-full bottom-0 h-[40px] bg-zinc-950/50 flex flex-col  justify-center items-center'>
        <h3 className='text-orange-500 text-ellipsis text-center flex flex-col items-center'>
          {item.voteAverage.toFixed(1)}
          <StarOutlined />
        </h3>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  item: PropTypes.object,
  type: PropTypes.string,
  shape: PropTypes.string,
};
