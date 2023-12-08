import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../utils/api";
import Loading from "../components/layout/Loading";
import { PostType } from "../utils";
import { Link } from "react-router-dom";
export default function Explore() {
  const { data: posts, isLoading } = useQuery<PostType[]>({
    queryKey: ["post"],
    queryFn: getUserPosts,
  });
  if (isLoading) return <Loading />;

  return (
    <div className="flex items-center justify-center mx-auto gap-3 dark:bg-black dark:text-white">
      <div className="w-[600px] mx-auto dark:text-white dark:bg-black flex items-center justify-center flex-wrap gap-1">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="rounded-lg dark:text-white dark:bg-black"
          >
            <Link to={`/post/${post.id}`}>
              <img src={post.blogImage} className="w-48 h-48 cursor-pointer" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
