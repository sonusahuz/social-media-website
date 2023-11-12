import { NavLink, useNavigate } from "react-router-dom";
import { Home, Search, User2, PlusSquare, Compass, LogOut } from "lucide-react";
import DarkModeButton from "./DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../../store/postSlice";
import { RootState } from "../../store/store";
import { logoutUser } from "../../utils/api";
export default function SideBar() {
  const isLogin = useSelector((state: RootState) => state.post.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser().then(() => {
      navigate("/login");
      dispatch(postAction.setIsLogin(false));
    });
  };

  return (
    <>
      {isLogin && (
        <header className="fixed ml-20">
          <div>
            <h1 className=" text-2xl font-bold style">Instagram</h1>
          </div>
          <div className="">
            <ul className="flex items-start justify-start flex-col gap-10 mt-14">
              <NavLink
                to={"/"}
                className="flex items-center justify-start gap-3"
              >
                <Home className="dark:text-white" size={23} />
                Home
              </NavLink>
              <NavLink
                to={"/explore"}
                className="flex items-start justify-start gap-3 dark:text-white"
              >
                <Compass className="dark:text-white" size={23} />
                Explore
              </NavLink>
              <NavLink
                to={"/search"}
                className="flex items-start justify-start gap-3"
              >
                <Search className="dark:text-white" size={23} />
                Search
              </NavLink>

              <NavLink
                to={"/create"}
                className="flex items-start justify-start gap-3"
              >
                <PlusSquare className="dark:text-white" size={23} />
                Create
              </NavLink>
              <NavLink
                to={"/profile"}
                className="flex items-start justify-start gap-3"
              >
                <User2 className="dark:text-white" size={23} />
                Profile
              </NavLink>
              <div className="flex items-start justify-start gap-3">
                <DarkModeButton />
              </div>
              {isLogin && (
                <li
                  className="flex items-start justify-start gap-3 cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut
                    className="dark:text-white cursor-pointer"
                    size={23}
                  />
                  Logout
                </li>
              )}
            </ul>
          </div>
        </header>
      )}
    </>
  );
}
