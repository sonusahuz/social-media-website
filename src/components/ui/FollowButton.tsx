import { useDispatch } from "react-redux";
import { postAction } from "../../store/postSlice";
export default function FollowButton({ isFollow, data }: any) {
  const dispatch = useDispatch();
  const handleSubscribeClick = () => {
    if (isFollow) {
      dispatch(postAction.unfollowUser(data));
    } else {
      dispatch(postAction.followUser(data));
    }
  };
  return (
    <div onClick={handleSubscribeClick}>
      {isFollow ? (
        <button className="px-4 py-2 text-black bg-white border-2 dark:bg-white dark:text-black rounded-lg text-sm">
          UnFollow
        </button>
      ) : (
        <button className="px-4 py-2 text-white bg-black dark:bg-white dark:text-black rounded-lg text-sm">
          Follow
        </button>
      )}
    </div>
  );
}
