import React, { useEffect, useState } from "react";
import { getUserPosts } from "../../utils/api";
import { PostType } from "../../utils";
import { UserCircle2 } from "lucide-react";
import PostCard from "./PostCard";
import Loading from "../layouts/Loading";
export default function PostList() {
  const [loading, setLoading] = useState(false);
  const [post, setPosts] = useState<PostType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setLoading(true);
    getUserPosts().then((res) => {
      setLoading(false);
      setPosts(res);
    });
  }, []);
  if (loading) return <Loading />;
  const filteredItems = post.filter((item) =>
    item.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="flex items-center justify-center mx-auto dark:text-white dark:bg-black">
        <div className="flex items-center justify-between gap-8 bg-gray-100 rounded-lg px-4 py-4 dark:bg-black dark:text-white">
          <div>
            <UserCircle2 size={44} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 p-4 border-2 w-[320px] shadow-lg rounded-lg mx-auto dark:bg-black dark:text-white"
            placeholder="Search..."
          />
          <div>
            <button className="px-6 rounded-lg text-sm p-4 dark:bg-white text-white dark:text-black bg-black border">
              Create Post
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto gap-3 dark:bg-black dark:text-white pt-3">
        <div className="w-[600px] mx-auto dark:text-white dark:bg-black">
          {filteredItems.map((post) => (
            <div className="w-[600px] h-[580px] bg-gray-100 rounded-lg py-4 px-4 my-4 dark:text-white dark:bg-black">
              <PostCard post={post} key={post.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
