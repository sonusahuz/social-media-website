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
      setTimeout(() => {
        navigate("/login");
        alert("Logout Successfully");
        dispatch(postAction.setIsLogin(false));
      }, 2000);
    });
  };

  const navLink = [
    {
      name: "Home",
      url: "/",
      icons: <Home className="dark:text-white" size={23} />,
    },
    {
      name: "Explore",
      url: "/explore",
      icons: <Compass className="dark:text-white" size={23} />,
    },
    {
      name: "Search",
      url: "/search",
      icons: <Search className="dark:text-white" size={23} />,
    },
    {
      name: "Create",
      url: "/create",
      icons: <PlusSquare className="dark:text-white" size={23} />,
    },
    {
      name: "Profile",
      url: "/profile",
      icons: <User2 className="dark:text-white" size={23} />,
    },
    { name: "", url: "", icons: <DarkModeButton /> },
  ];

  return (
    <>
      {isLogin && (
        <header className="fixed ml-20">
          <div>
            <h1 className=" text-2xl font-bold style">Instagram</h1>
          </div>
          <div className="">
            <ul className="flex items-start justify-start flex-col gap-10 mt-14">
              {navLink.map((item) => (
                <NavLink
                  to={item.url}
                  className="flex items-center justify-start gap-3"
                >
                  {item.icons}
                  {item.name}
                </NavLink>
              ))}
              <li
                className="flex items-start justify-start gap-3 cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="dark:text-white cursor-pointer" size={23} />
                Logout
              </li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
}
