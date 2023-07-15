import { Home,Movie } from "./pages";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/movie/:movieID", element: <Movie /> }
];

export default routes;
