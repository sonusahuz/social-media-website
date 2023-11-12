import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUserPosts } from "../utils/api";
import { PostType } from "../utils";
import { Avatar } from "@material-tailwind/react";
import TabsButton from "../components/ui/TabsButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import FollowButton from "../components/ui/FollowButton";
export default function SingleUserProfile() {
  const [post, setPosts] = useState<PostType>();
  const isfollowing = useSelector((state: RootState) => state.post.follow);
  const { id } = useParams();
  useEffect(() => {
    getSingleUserPosts(`${id}`).then((res) => {
      setPosts(res);
    });
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center mx-auto gap-3 dark:text-white dark:bg-black mb-20">
        <div>
          <div className="w-[600px]">
            <div>
              <img
                src={post?.posts_banner}
                alt={post?.title}
                className="h-[200px] w-[600px] object-cover rounded"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-start justify-center flex-col gap-3">
                <h1 className="font-bold text-2xl dark:text-white dark:bg-black">
                  {post?.name}
                </h1>
                <h1 className="text-gray-500 dark:text-white dark:bg-black">
                  {post?.username?.toLowerCase()}
                </h1>
                <h1 className="text-black text-sm dark:text-white">
                  {post?.bio}
                </h1>
                <div className="">
                  <ul className="flex items-center justify-between gap-5">
                    <li>{post?.user_posts.length} Posts</li>
                    <li>{post?.followers.length} Followers</li>
                    <li>{post?.following.length} Following</li>
                    <li>{post?.join_date}</li>
                  </ul>
                </div>
              </div>
              <div>
                <Avatar
                  src={`${post?.image}`}
                  size="xxl"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-start gap-3 mt-3">
              <FollowButton
                isFollow={isfollowing.some((p) => p.id === post?.id)}
                data={post}
              />
              <button className="px-6 rounded-lg text-sm py-2 bg-white text-black dark:bg-black border dark:text-white">
                Message
              </button>
            </div>
            <div className="mt-5">
              <TabsButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
