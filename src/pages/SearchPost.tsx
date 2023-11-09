import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import Loading from "../components/layouts/Loading";
import { PostType } from "../utils";
import { getUserPosts } from "../utils/api";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import FollowButton from "../components/ui/FollowButton";
export default function SearchPost() {
  const [loading, setLoading] = useState(false);
  const [post, setPosts] = useState<PostType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const isfollowing = useSelector((state: RootState) => state.post.follow);
  useEffect(() => {
    setLoading(true);
    getUserPosts().then((res) => {
      setLoading(false);
      setPosts(res);
    });
  }, []);
  if (loading) return <Loading />;
  const filteredItems = post.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex items-center justify-center mx-auto gap-3 dark:bg-black dark:text-white">
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 p-4 border-2 w-[550px] shadow-lg rounded-lg mx-auto dark:bg-black dark:text-white"
          placeholder="Search..."
        />
        {filteredItems.map((post) => (
          <div className="w-[600px]rounded-lg py-4 my-4">
            <div className="flex items-center justify-between">
              <div className="flex items-start justify-start">
                <Link to={`/profile/${post.id}`}>
                  <Avatar src={post?.image} className="ml-2 cursor-pointer" />
                </Link>
                <Link to={`/profile/${post.id}`}>
                  <h1 className="ml-2 font-bold">
                    {post?.name?.toLowerCase()}
                  </h1>
                  <h1 className="ml-2 text-gray-500">
                    {post?.username?.toLowerCase()}
                  </h1>
                </Link>
              </div>
              <div>
                <FollowButton
                  isFollow={isfollowing.some((p) => p.id === post?.id)}
                  data={post}
                />
              </div>
            </div>
            <hr className="mt-5 text-black font-bold rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
