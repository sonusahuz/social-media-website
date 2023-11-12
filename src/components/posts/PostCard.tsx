import { SinglePostType } from "../../utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MessageSquare, Send } from "lucide-react";
import { Avatar } from "@material-tailwind/react";
import { RootState } from "../../store/store";
import FollowButton from "../ui/FollowButton";
import LikeButton from "../ui/LikeButton";
import SaveButton from "../ui/SaveButton";
export default function PostCard({ post }: SinglePostType) {
  const isLike = useSelector((state: RootState) => state.post.like);
  const isFollowing = useSelector((state: RootState) => state.post.follow);
  const isSave = useSelector((state: RootState) => state.post.savePost);
  return (
    <div className="flex items-center justify-between">
      <div key={post.id}>
        <div className="flex items-start justify-start">
          <Link to={`/profile/${post.id}`}>
            <Avatar src={post?.image} className="cursor-pointer" />
          </Link>
          <div>
            <h1 className="ml-2 font-bold">{post?.username?.toLowerCase()}</h1>
            <h1 className="ml-2 py-0 mb-3">{post?.title}</h1>
          </div>
          <div className="ml-[460px] absolute">
            <FollowButton
              isFollow={isFollowing.some((p) => p.id === post.id)}
              data={post}
            />
          </div>
        </div>
        <Link to={`/post/${post.id}`}>
          <img
            src={post?.blogImage}
            alt={post.title}
            className="rounded-lg cursor-pointer"
          />
        </Link>
        <div className="flex items-center py-4 justify-between gap-4">
          <div className="flex items-center py-4 justify-start gap-4">
            <LikeButton
              isLike={isLike.some((p) => p.id === post?.id)}
              data={post}
            />
            <Link to={`/post/${post.id}`}>
              <MessageSquare className=" cursor-pointer" size={25} />
            </Link>
            <Send className=" cursor-pointer" size={25} />
          </div>
          <div>
            <SaveButton
              isSave={isSave.some((p) => p.id === post.id)}
              data={post}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
