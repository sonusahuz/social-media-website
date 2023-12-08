import { getUserPosts } from "../../utils/api";
import { PostType } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import Loading from "../layout/Loading";
import UserStatus from "./UserStatus";
import MobileNavbar from "../layout/MobileNavbar";
import { Menu } from "lucide-react";
export default function PostList() {
  const { data: posts, isLoading } = useQuery<PostType[]>({
    queryKey: ["post"],
    queryFn: getUserPosts,
    staleTime: 20000,
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <div className=" hidden lg:block">
        <div className="flex items-center justify-center mx-auto dark:text-white dark:bg-black">
          <UserStatus />
        </div>
      </div>
      <div className="flex items-center justify-between px-2 lg:hidden">
        <h1 className="text-xl font-bold">Instagram</h1>
        <Menu size={25} />
      </div>
      <div className="flex items-center justify-center mx-auto gap-3 dark:bg-black dark:text-white lg:pt-3">
        <div className="lg:w-[600px] dark:text-white dark:bg-black">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="lg:w-[600px] lg:h-[580px] h-[400px] bg-gray-100 lg:rounded-lg  py-4 lg:px-4 px-2 my-4 dark:text-white dark:bg-black"
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <MobileNavbar />
      </div>
    </>
  );
}
