import { Link, useNavigate } from "react-router-dom";
import { TbBrandThreads } from "react-icons/tb";
import { Home, Search, User2, PenSquare, Video, VideoIcon } from "lucide-react";
import DarkModeButton from "./DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { postAction } from "../../store/postSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../auth/firebase/firebase";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state: RootState) => state.post.isLogin);
  const handleLogout = () => {
    signOut(auth).then((res) => {
      navigate("/login");
      dispatch(postAction.setIsLogin(false));
    });
  };

  return (
    <>
      <header className="flex items-center justify-between px-40 flex-wrap py-4 w-full bg-white z-20 dark:text-white dark:bg-black pl-56">
        <div>
          <Link to={"/"}>
            <TbBrandThreads size={40} />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10">
            <Link to={"/"}>
              <Home
                className="dark:text-white dark:hover:text-black link"
                size={60}
              />
            </Link>
            <Link to={"/search"}>
              <Search
                className="dark:text-white dark:hover:text-black link"
                size={60}
              />
            </Link>

            <Link to={"/create"}>
              <PenSquare
                className="dark:text-white dark:hover:text-black link"
                size={60}
              />
            </Link>
            <Link to={"/profile"}>
              <User2
                className="dark:text-white dark:hover:text-black link"
                size={60}
              />
            </Link>
            <DarkModeButton />
          </ul>
        </div>
        <div className="">
          {login ? (
            <button
              onClick={handleLogout}
              className="px-6 py-2.5 bg-black text-white rounded w-24 text-sm text-center dark:bg-white dark:text-black"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/signup"}
              className="px-6 py-2.5 bg-black text-white rounded w-24 text-sm text-center dark:bg-white dark:text-black"
            >
              Signup
            </Link>
          )}
        </div>
      </header>
    </>
  );
}
