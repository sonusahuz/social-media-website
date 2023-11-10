import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { getSingleUserPosts } from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { PostType } from "../../utils";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Avatar } from "@material-tailwind/react";
import { Edit2, MessageSquare, Send, Trash2, X } from "lucide-react";
import LikeButton from "./LikeButton";
import SaveButton from "./SaveButton";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import UserComments from "./UserComments";
import { postAction } from "../../store/postSlice";
import { auth } from "../../auth/firebase/firebase";

export default function SinglePostPopup() {
  const [post, setPosts] = useState<PostType>();
  const isLike = useSelector((state: RootState) => state.post);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get single user posts
  useEffect(() => {
    getSingleUserPosts(`${id}`).then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <Modal>
      <div className=" bg-white dark:bg-black dark:text-white w-[1000px] h-[620px]">
        <div
          className="flex items-start justify-start flex-wrap"
          key={post?.id}
        >
          <div>
            <img src={post?.blogImage} alt="" className="h-[620px] w-[500px]" />
          </div>
          <div className="p-4 h-[620px] flex items-center justify-between flex-col">
            <div className="">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  <Avatar src={post?.image} size="sm" />
                  <h1 className=" font-bold">{post?.username}</h1>
                  <VscVerifiedFilled className=" text-blue-900" />
                </div>
                <div>
                  <X onClick={() => navigate(-1)} className=" cursor-pointer" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-start gap-2 mt-4">
                  <Avatar src={post?.image} size="sm" />
                  <h1 className=" font-bold">{post?.username}</h1>
                  <VscVerifiedFilled className=" text-blue-900" />
                  <p>{post?.title}</p>
                </div>
              </div>
              <div>
                {post?.comment.map((item) => (
                  <div
                    className="flex items-center justify-start my-4 gap-2"
                    key={item.id}
                  >
                    <Avatar src={item?.image} size="sm" className=" block" />
                    <div>
                      <h1 className=" font-medium text-sm">{item.username}</h1>
                      <p className="text-sm w-[400px]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {isLike.comment.map((item) => (
                  <div
                    className="flex items-center justify-start my-4 gap-2"
                    key={item.id}
                  >
                    <Avatar
                      src={`${auth.currentUser?.photoURL}`}
                      size="sm"
                      className=" block"
                    />
                    <div>
                      <h1 className=" font-medium text-sm">{item.username}</h1>
                      <div className="flex items-center justify-start">
                        <p className="text-sm w-[360px]">{item.text}</p>
                        <div className="flex items-center gap-2">
                          <Edit2 size={20} className=" cursor-pointer" />
                          <Trash2
                            size={20}
                            className=" cursor-pointer"
                            onClick={() =>
                              dispatch(postAction.deleteComment(item.id))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-[450px]">
              <div className="flex items-center py-4 justify-between gap-4 ">
                <div className="flex items-center py-4 justify-start gap-4">
                  <LikeButton
                    isLike={isLike.like.some((p) => p.id === post?.id)}
                    data={post}
                  />
                  <MessageSquare className=" cursor-pointer" size={25} />
                  <Send className=" cursor-pointer" size={25} />
                </div>
                <div>
                  <SaveButton
                    isSave={isLike.savePost.some((p) => p.id === post?.id)}
                    data={post}
                  />
                </div>
              </div>
              <UserComments />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
