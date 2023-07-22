import { useParams } from "react-router-dom";
import { useSearchFetch, useSearchState } from "../../hooks";
import { Card, PageLoader } from "../shared";
const CardContainer = () => {
  const { type, searchValue, pageNumber } = useParams();
  console.log(type, searchValue, pageNumber);
  const arg = {
    searchValue,
    page: Number(pageNumber),
    type,
  };
  useSearchFetch({ arg });
  const { loading, results } = useSearchState();
  return (
    <div className="bg-gray-950 w-full flex flex-col  items-center py-[100px]">
      {loading === "fulfilled" && results.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ">
          {results.map((item) => (
            <Card
              type={item.mediaType}
              shape={"ver"}
              item={item}
              key={item.id}
            />
          ))}
        </div>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CardContainer;
