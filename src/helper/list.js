const listFixer = (list) => {
  if (list === "now_playing") {
    return "NowPlaying";
  } else if (list === "top_rated") {
    return "TopRated";
  } else if (list === "on_the_air") {
    return "OnTheAir";
  } else if (list === "airing_today") {
    return "AiringToday";
  } else {
    return list.toUpperCase();
  }
};

export default listFixer;
