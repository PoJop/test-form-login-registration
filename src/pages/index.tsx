import { routes } from "app/configs";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import AuthenticationPage from "./authentication";


export const Routing = () => {

  return (
    <>

      <Routes>
        <Route path={routes.HOME_PAGE_ROUTE} element={<><Link to={routes.AUTH_PAGE_ROUTE}>AUTH_PAGE_ROUTE</Link></>} />
        <Route path={routes.AUTH_PAGE_ROUTE + "*"} element={<AuthenticationPage />} />
      </Routes>
    </>
  );
};
