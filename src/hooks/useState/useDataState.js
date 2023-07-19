import { useSelector } from "react-redux";

const useDataState = (type) => {
  const singleData = useSelector((state) => state.singleData);
  return {
    loading: singleData.data.loading,
    error: singleData.data.error,
    data:
      singleData.data.loading === "fulfilled"
        ? {
            adult: singleData.data[type]?.adult,
            backdropPath: singleData.data[type]?.backdrop_path,
            belongsToCollection: singleData.data[type]?.belongs_to_collection
              ? {
                  backDropPath:
                    singleData.data[type].belongs_to_collection?.backdrop_path,
                  id: singleData.data[type].belongs_to_collection?.id,
                  name: singleData.data[type].belongs_to_collection?.name,
                  posterPath:
                    singleData.data[type].belongs_to_collection?.poster_path,
                }
              : null,
            budget: singleData.data[type]?.budget,
            genres: singleData.data[type]?.genres,
            homepage: singleData.data[type]?.homepage,
            id: singleData.data[type]?.id,
            imdbId: singleData.data[type]?.imdb_id,
            originalLanguage: singleData.data[type]?.original_language,
            originalTitle: singleData.data[type]?.original_title,
            overview: singleData.data[type]?.overview,
            popularity: singleData.data[type]?.popularity,
            posterPath: singleData.data[type]?.poster_path,
            productionCompanies: singleData.data[
              type
            ]?.production_companies.map((company) => {
              return {
                id: company.id,
                logoPath: company.logo_path,
                name: company.name,
              };
            }),
            productionCountries: singleData.data[
              type
            ]?.production_countries.map((country) => {
              return {
                iso_3166_1: country.iso_3166_1,
                name: country.name,
              };
            }),
            releaseDate: singleData.data[type]?.release_date,
            revenue: singleData.data[type]?.revenue,
            runtime: singleData.data[type]?.runtime,
            spokenLanguages: singleData.data[type]?.spoken_languages,
            status: singleData.data[type]?.status,
            tagline: singleData.data[type]?.tagline,
            title: singleData.data[type]?.title,
            type: singleData.data[type]?.type,
            voteAverage: singleData.data[type]?.vote_average,
            voteCount: singleData.data[type]?.vote_count,
            createdBy: singleData.data[type]?.created_by,
            episodeRunTime: singleData.data[type]?.episodeRunTime,
            firstAirDate: singleData.data[type]?.first_air_date,
            inProduction: singleData.data[type]?.in_production,
            last_air_date: singleData.data[type]?.last_air_date,
            lastEpisodeToAir: singleData.data[type]?.last_episode_to_air,
            name: singleData.data[type]?.name,
            nextEpisodeToAir: singleData.data[type]?.next_episode_to_air,
            networks: singleData.data[type]?.networks,
            numberOfEpisodes: singleData.data[type]?.number_of_episodes,
            numberOfSeasons: singleData.data[type]?.number_of_seasons,
            originalName: singleData.data[type]?.original_name,
            seasons: singleData.data[type]?.seasons,
          }
        : [],
    videos:
      singleData.videos.loading === "fulfilled"
        ? singleData.videos?.results.slice(0,5).filter((video) => video.site === "YouTube")
        : null,
    credits:
      singleData.credits?.loading === "fulfilled"
        ? {
            loading: singleData.credits?.loading,
            cast: singleData.credits?.cast.map((cast) => {
              return {
                name: cast.name,
                profilePath: cast.profile_path,
                character: cast.character,
              };
            }),
            crew: singleData.credits?.crew.map((crew) => {
              return {
                name: crew.name,
                profilePath: crew.profile_path,
                job: crew.job,
              };
            }),
          }
        : [],
  };
};
export default useDataState;
