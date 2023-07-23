import { useSelector } from "react-redux";

const useSearchState = () => {
  const searchState = useSelector((state) => state.search);
  if (searchState.loading === "fulfilled") {
    return {
      loading: searchState?.loading,
      moreLoading: searchState?.moreLoading,
      pager: {
        page: searchState.data?.page,
        totalPages: searchState.data?.total_pages,
        totalResults: searchState.data?.total_results,
      },
      results: searchState.data.results?.map((result) => {
        return {
          id: result?.id,
          title: result?.title,
          originalTitle: result?.original_title,
          posterPath: result?.poster_path,
          profilePath: result?.profile_path,
          voteAverage: result?.vote_average,
          originalName: result?.original_name,
          mediaType: result?.media_type ? result.media_type : searchState?.type,
        };
      }),
    };
  } else {
    return {
      page: 1,
      error: searchState.error,
      loading: searchState.loading,
      results: [],
    };
  }
};

export default useSearchState;
