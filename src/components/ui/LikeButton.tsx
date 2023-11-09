import { useDispatch } from "react-redux";
import { postAction } from "../../store/postSlice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
export default function LikeButton({ isLike, data }: any) {
  const dispatch = useDispatch();
  const handleSubscribeClick = () => {
    if (isLike) {
      dispatch(postAction.dislike(data));
    } else {
      dispatch(postAction.addLike(data));
    }
  };
  return (
    <div onClick={handleSubscribeClick}>
      {isLike ? (
        <AiFillHeart className="cursor-pointer text-red-700" size={25} />
      ) : (
        <AiOutlineHeart className="cursor-pointer" size={25} />
      )}
    </div>
  );
}
