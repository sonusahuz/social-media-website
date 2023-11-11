import { getUserPosts } from "../../utils/api";
import { PostType } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import Loading from "../layouts/Loading";
import UserStatus from "../ui/UserStatus";
export default function PostList() {
  const { data: posts, isLoading } = useQuery<PostType[]>({
    queryKey: ["post"],
    queryFn: getUserPosts,
    staleTime: 20000,
  });
  if (isLoading) return <Loading />;
  return (
    <>
      <div className="flex items-center justify-center mx-auto dark:text-white dark:bg-black">
        <UserStatus />
      </div>
      <div className="flex items-center justify-center mx-auto gap-3 dark:bg-black dark:text-white pt-3">
        <div className="w-[600px] mx-auto dark:text-white dark:bg-black">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="w-[600px] h-[580px] bg-gray-100 rounded-lg py-4 px-4 my-4 dark:text-white dark:bg-black"
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
