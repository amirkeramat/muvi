import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Layout from "./layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation, resetAction } from "./redux/slice/ipSlice";
import PageLoader from "./components/shared/pageLoader/PageLoader";
import ErrorPage from "./components/shared/errorPage/ErrorPage";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocation());
    return ()=>dispatch(resetAction())
  }, []);

  const ipAddress = useSelector((state) => state.ipAddress);
  const router = useRoutes(routes);

  return (
    <>
      {ipAddress.loading !== "fulfilled" && <PageLoader />}
      {ipAddress.loading === "fulfilled" &&
        ipAddress.data.countryName !== "Iran" && <Layout>{router}</Layout>}
      {ipAddress.loading === "fulfilled" &&
        ipAddress.data.countryName === "Iran" && <ErrorPage />}
    </>
  );
}

export default App;
