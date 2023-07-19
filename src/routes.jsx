import { Home, MediaInfo } from "./pages";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/mediaInfo/:type/:typeId", element: <MediaInfo /> },
];

export default routes;
