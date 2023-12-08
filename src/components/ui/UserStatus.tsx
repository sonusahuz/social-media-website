import { getUserPosts } from "../../utils/api";
import { PostType } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Loading from "../layout/Loading";
import { PlusCircle } from "lucide-react";
export default function UserStatus() {
  const { data: status, isLoading } = useQuery<PostType[]>({
    queryKey: ["post"],
    queryFn: getUserPosts,
    staleTime: 20000,
  });
  if (isLoading) return <Loading />;
  return (
    <div className="flex items-center justify-between gap-6 lg:ml-36 ml-16">
      <PlusCircle size={65} className=" cursor-pointer" />
      {status?.map((item) => (
        <div key={item.id}>
          {item?.status?.map((user) => (
            <Link to={`/status/${user.id}`} key={item.id}>
              <Avatar
                src={user?.image}
                className=" cursor-pointer p-0.5 lg:h-16 lg:w-16"
                withBorder={true}
                color="green"
              />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
