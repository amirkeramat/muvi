import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { POSTER_W342, POSTER_W780 } from "../../../api/image";
import { StarOutlined } from "@ant-design/icons";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ item }) => {
  return (
    <div className="w-full">
      <LazyLoadImage
        width={"100%"}
        src={`${POSTER_W342}/${item.posterPath}`}
        className="h-[350px] w-full object-cover object-center"
        PlaceholderSrc={`${POSTER_W342}/${item.posterPath}`}
        effect="blur"
        alt={item.title}
      />
      <div className="absolute w-full top-0 h-[50px] bg-zinc-950/70 flex flex-col  justify-center items-center">
        <Link
          to={`${item.type}/${item.id}`}
          className="text-zinc-50 text-ellipsis text-center"
        >
          {item.originalTitle}
        </Link>
      </div>
      <div className="absolute w-full bottom-0 h-[50px] bg-zinc-950/70 flex flex-col  justify-center items-center">
        <h3 className="text-orange-500 text-ellipsis text-center flex flex-col items-center">
          {item.voteAverage}

          <StarOutlined />
        </h3>
      </div>
    </div>
  );
};

export default Card;