import { useSelector } from "react-redux";
const useHomeState = (type, list) => {
  const homeData = useSelector((state) => state.home);
  if (type === "movie") {
    return {
      loading: homeData[type][list].loading,
      error: homeData[type][list].error,

      pager:
        homeData[type][list].loading === "fulfilled"
          ? {
              page: homeData[type][list].page,
              totalPages: homeData[type][list].total_pages,
              totalResults: homeData[type][list].total_results,
            }
          : {
              page: 1,
              totalPages: null,
              totalResults: null,
            },
      type,
      data:
        homeData[type][list].loading === "fulfilled"
          ? homeData[type][list].results.map((result) => {
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
            })
          : [],
      moreLoading: homeData[type][list].moreLoading
        ? homeData[type][list].moreLoading
        : "idle",
    };
  } else if (type === "tv") {
    return {
      loading: homeData[type][list].loading,
      error: homeData[type][list].error,

      pager:
        homeData[type][list].loading === "fulfilled"
          ? {
              page: homeData[type][list].page,
              totalPages: homeData[type][list].total_pages,
              totalResults: homeData[type][list].total_results,
            }
          : {
              page: 1,
              totalPages: null,
              totalResults: null,
            },
      type,
      data:
        homeData[type][list].loading === "fulfilled"
          ? homeData[type][list].results.map((result) => {
              return {
                adult: result.adult,
                backdropPath: result.backdrop_path,
                genreIds: result.genre_ids,
                id: result.id,
                originalLanguage: result.original_language,
                originalTitle: result.original_name,
                overview: result.overview,
                popularity: result.popularity,
                posterPath: result.poster_path,
                releaseDate: result.release_date,
                title: result.name,
                video: result.video,
                voteAverage: result.vote_average,
                voteCount: result.vote_count,
                firstAirDate: result.first_air_date,
                originCountry: result.origin_country,
              };
            })
          : [],
      moreLoading: homeData[type][list].moreLoading
        ? homeData[type][list].moreLoading
        : "idle",
    };
  }
};

export default useHomeState;
