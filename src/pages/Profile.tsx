import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import AdminTabsButton from "../components/ui/AdminTabButton";
import { Link, NavLink } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import { auth } from "../auth/firebase/firebase";
export default function Profile() {
  const userData = useSelector((state: RootState) => state.post);
  return (
    <div>
      <div className="flex items-center justify-center mx-auto gap-3 dark:text-white dark:bg-black mb-20">
        <div>
          <div className="w-[600px]">
            <div>
              {/* <img
                src={post?.posts_banner}
                alt={post?.title}
                className="h-[200px] w-[600px] object-cover rounded"
              /> */}
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-start justify-center flex-col gap-3">
                <h1 className="font-bold text-2xl dark:text-white dark:bg-black">
                  {userData.isLogin ? auth.currentUser?.displayName : "name"}
                </h1>
                <h1 className="text-gray-500 dark:text-white dark:bg-black">
                  {userData.isLogin
                    ? auth.currentUser?.displayName
                    : "username"}
                </h1>
                <div className="">
                  <ul className="flex items-center justify-between gap-5">
                    <li>{userData.savePost.length} Post</li>
                    <li>100 Followers</li>
                    <li>{userData.follow.length} Following</li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div>
                <Avatar
                  src={`${auth.currentUser?.photoURL}`}
                  size="xxl"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-start gap-3">
              <NavLink
                to={"/create"}
                className="px-6 py-2.5 mt-3 bg-black text-white rounded w-36 text-sm text-center dark:bg-white dark:text-black"
              >
                Create Post
              </NavLink>
            </div>
            <div className="mt-5">
              <AdminTabsButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
