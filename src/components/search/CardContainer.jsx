import { useParams } from "react-router-dom";
import { useSearchFetch, useSearchState } from "../../hooks";
import { Card, PageLoader } from "../shared";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getPushData } from "../../redux/slice/searchSlice";
const CardContainer = () => {
  const dispatch = useDispatch();
  const { type, searchValue, pageNumber } = useParams();
  console.log(type, searchValue, pageNumber);
  const arg = {
    searchValue,
    page: Number(pageNumber),
    type,
  };
  useSearchFetch({ arg });
  const { loading, results, moreLoading, pager } = useSearchState();
  const loadMoreHandler = () => {
    if (pager.page <= pager.totalPages) {
      const arg = {
        searchValue,
        page: pager.page + 1,
        type,
      };
      dispatch(getPushData(arg));
    }
  };
  return (
    <div className="bg-gray-950 w-full flex flex-col  items-center py-[100px]">
      {loading === "fulfilled" && results.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          {results.map((item) => (
            <Card
              type={item.mediaType}
              shape={"ver"}
              item={item}
              key={item.id}
            />
          ))}
          <div className="flex flex-col col-span-1 sm:col-span-2 md:col-span-4 justify-center items-center text-orange-500">
            <button
              className=" bg-gray-900 w-[200px] rounded-2xl p-2"
              onClick={loadMoreHandler}
            >
              Load More..
            </button>
            {moreLoading === "pending" ? (
              <LoadingOutlined className="text-4xl" />
            ) : null}
          </div>
        </div>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CardContainer;
