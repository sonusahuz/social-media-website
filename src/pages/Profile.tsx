import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../store/store";
import AdminTabsButton from "../components/ui/AdminTabButton";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import { getUserProfile } from "../utils/api";
import { UserProfile } from "../utils";
export default function Profile() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const userData = useSelector((state: RootState) => state.post);
  useEffect(() => {
    getUserProfile().then((res) => {
      setUsers(res);
    });
  }, []);
  return (
    <div className="flex items-start justify-center mx-auto gap-3 h-screen dark:text-white  dark:bg-black mb-20">
      <div>
        <div className="w-[600px]">
          <div>
            <img
              src={"/threadsback.avif"}
              className="h-[200px] w-[600px] object-cover rounded border"
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-start justify-center flex-col gap-3">
              {users.map((item) => (
                <div key={item.id}>
                  <h1 className="font-bold text-2xl dark:text-white dark:bg-black">
                    {item.username}
                  </h1>
                  <h1 className="text-gray-500 dark:text-white dark:bg-black">
                    {item.fullName}
                  </h1>
                </div>
              ))}
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
                src={"/threadsback.avif"}
                size="xxl"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <NavLink
              to={"/create"}
              className="px-2 py-2.5 mt-3 bg-black text-white rounded w-28 text-xs text-center dark:bg-white dark:text-black"
            >
              Create Post
            </NavLink>
            {users.map((item) => (
              <NavLink
                to={`/edit-profile/${item.id}`}
                className="px-2 py-2.5 mt-3 bg-black text-white rounded w-28 text-xs text-center dark:bg-white dark:text-black"
              >
                Edit Profile
              </NavLink>
            ))}
          </div>
          <div className="mt-5">
            <AdminTabsButton />
          </div>
        </div>
      </div>
    </div>
  );
}
