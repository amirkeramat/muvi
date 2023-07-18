const listFixer = (list) => {
  if (list === "now_playing") {
    return "NowPlaying";
  } else if (list === "top_rated") {
    return "TopRated";
  } else {
    return list.toUpperCase();
  }
};

export default listFixer;
