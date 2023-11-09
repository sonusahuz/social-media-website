import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { UserCircle2 } from "lucide-react";
import AdminTabsButton from "../components/ui/AdminTabButton";
import { useEffect, useState } from "react";
import { Models } from "appwrite";
import { Link, NavLink } from "react-router-dom";
import { getCurrentUser } from "../auth/appwrite";
export default function Profile() {
  const [user, setUser] = useState<Models.Preferences>();
  const userData = useSelector((state: RootState) => state.post);
  useEffect(() => {
    getCurrentUser().then((res) => {
      setUser(res);
    });
  }, []);
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
                  username
                </h1>
                <h1 className="text-gray-500 dark:text-white dark:bg-black">
                  name
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
                <UserCircle2 className="" size={130} />
                {/* <Avatar
                  src={`${post?.image}`}
                  size="xxl"
                  className="cursor-pointer"
                /> */}
              </div>
            </div>
            <div className="flex items-center justify-start gap-3">
              <NavLink
                to={"/create"}
                className="px-6 py-2.5 bg-black text-white rounded w-36 text-sm text-center dark:bg-white dark:text-black"
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
