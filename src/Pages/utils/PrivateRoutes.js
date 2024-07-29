import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoutes = () => {
  const [cookies, setCookie] = useCookies(["username"]);

  let auth = false;
  const recievedusername = cookies.username;
  recievedusername ? (auth = true) : (auth = false);
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
