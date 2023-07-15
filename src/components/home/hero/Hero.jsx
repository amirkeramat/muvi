import { useHomeState } from "../../../hooks";
import { BACK_DROP_ORIGINAL } from "../../../api/image";
import { useEffect, useState } from "react";
import {
  Container,
  Content,
  Language,
  ReleaseData,
  Title,
  Vote,
} from "./hero.style";
import { Link } from "react-router-dom";
const Hero = () => {
  const { data } = useHomeState("movie", "now_playing");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 19) {
        setCount(0);
      } else {
        setCount((prv) => prv + 1);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <Container
      style={{
        "--image-url": `url(${BACK_DROP_ORIGINAL}${data[count].backdropPath})`,
      }}
    >
      <Content>
        <Title className="rounded-full flex justify-center items-center text-zinc-50 text-2xl">
          <Link to={`/movie/${data[count].id}`}>{data[count].originalTitle}</Link>
        </Title>

        <span className="flex child:py-4 child:px-6">
          <Language>
            {data[count].originalLanguage === "en"
              ? "English"
              : data[count].originalLanguage}
          </Language>
          <Vote>{data[count].voteAverage}</Vote>
          <ReleaseData>{data[count].releaseDate}</ReleaseData>
        </span>
      </Content>
    </Container>
  );
};

export default Hero;
