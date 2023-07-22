import { useDataState, useFetchById } from "../../../hooks";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Reviews = () => {
  const [showMore, setShowMore] = useState(false);
  const { type, typeId } = useParams();
  const arg = {
    id: Number(typeId),
    type,
    detail: "reviews",
  };
  useFetchById({ arg });
  const { reviews } = useDataState(type);
  return (
    <>
      {reviews.loading === "fulfilled" && reviews.results.length > 0 ? (
        <div className=" w-full flex flex-col items-center justify-center  my-10 px-2">
          <h1 className="text-white underline underline-offset-4 decoration-orange-500">
            Reviews
          </h1>

          <div
            className={`relative container  md:w-[70%] overflow-hidden  ${
              showMore ? "max-h-auto" : "max-h-[600px]"
            }`}
          >
            {reviews.results.map((review) => (
              <div
                className=" flex text-gray-400 my-2  flex-col items-center child:pb-6 bg-gray-900 p-2 md:p-4"
                key={review.id}
              >
                <span className="flex w-full justify-between items-center">
                  <h6 className="text-orange-500">{review.author}</h6>
                  <h6 className="text-orange-300">
                    {review.createdAt.slice(0, 10)}
                  </h6>
                </span>
                <p className="leading-relaxed px-2   text-xs md:text-base">
                  {review.content}
                </p>
              </div>
            ))}
            <button
              className="absolute z-[999] text-orange-500 bottom-0 bg-gray-950 p-2 rounded-2xl right-0"
              onClick={() => setShowMore((prv) => !prv)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Reviews;
