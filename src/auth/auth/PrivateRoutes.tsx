import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  const isLogin = useSelector((state: RootState) => state.post.isLogin);
  return isLogin ? <Outlet /> : <Navigate to={"/login"} />;
}
