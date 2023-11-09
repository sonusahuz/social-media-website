import { useDispatch } from "react-redux";
import { postAction } from "../../store/postSlice";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
export default function SaveButton({ isSave, data }: any) {
  const dispatch = useDispatch();
  const handleSubscribeClick = () => {
    if (isSave) {
      dispatch(postAction.unSavePost(data));
    } else {
      dispatch(postAction.savePost(data));
    }
  };
  return (
    <div onClick={handleSubscribeClick}>
      {isSave ? (
        <BsFillBookmarkFill className="cursor-pointer font-bold" size={22} />
      ) : (
        <BsBookmark className="cursor-pointer font-bold" size={22} />
      )}
    </div>
  );
}
