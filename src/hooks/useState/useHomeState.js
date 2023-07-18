import { useSelector } from "react-redux";
const useHomeState = (type, list) => {
  const homeData = useSelector((state) => state.home);
  if (homeData.loading === "fulfilled") {
    return {
      loading: homeData.loading,
      error: homeData.error,
      pager: {
        page: homeData.data[list].page,
        totalPages: homeData.data[list].total_pages,
        totalResults: homeData.data[list].total_results,
      },
      dates: homeData.data[list].dates,
      type,
      data: homeData.data[list].results.map((result) => {
        return {
          adult: result.adult,
          backdropPath: result.backdrop_path,
          genreIds: result.genre_ids,
          id: result.id,
          originalLanguage: result.original_language,
          originalTitle: result.original_title,
          overview: result.overview,
          popularity: result.popularity,
          posterPath: result.poster_path,
          releaseDate: result.release_date,
          title: result.title,
          video: result.video,
          voteAverage: result.vote_average,
          voteCount: result.vote_count,
        };
      }),
    };
  } else {
    return {
      loading: homeData.loading,
      error: homeData.error,
      data:[]
    };
  }
};

export default useHomeState;
