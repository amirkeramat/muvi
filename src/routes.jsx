import { Home, MediaInfo, Search } from "./pages";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/mediaInfo/:type/:typeId", element: <MediaInfo /> },
  { path: "/search/:type/:searchValue/:pageNumber", element: <Search /> },
];

export default routes;
