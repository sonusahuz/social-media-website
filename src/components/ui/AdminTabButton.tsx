import { useEffect, useState } from "react";
import { getUserPosts, getUserProfile } from "../../utils/api";
import { PostType, UserProfile } from "../../utils";
import { Avatar } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FollowButton from "./FollowButton";
import { Link, useNavigate } from "react-router-dom";
import { auth, storage } from "../../auth/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useQuery } from "@tanstack/react-query";
import Loading from "../layout/Loading";
import { postAction } from "../../store/postSlice";
export default function AdminTabsButton() {
  const [imgList, setImgList] = useState<any>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile[]>([]);
  const posts = useSelector((state: RootState) => state.post);
  const imgs = ref(storage, "img/");
  const { data: post, isLoading } = useQuery<PostType[]>({
    queryKey: ["post"],
    queryFn: getUserPosts,
  });

  useEffect(() => {
    getUserProfile().then((res) => {
      setUser(res);
    });
  }, []);

  useEffect(() => {
    listAll(imgs).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((res) => {
          setImgList((prev: any) => [...prev, res]);
        });
      });
    });
  }, []);

  const handlerDelete = (id: string) => {
    dispatch(postAction.setIsLogin(false));
    alert("Your threads account successfully deleted");
    navigate("/login");
  };

  if (isLoading) return <Loading />;

  const data = [
    {
      label: "Posts",
      value: "post",
      desc: (
        <div className="flex items-center justify-between gap-2 flex-wrap mt-6 dark:bg-black dark:text-white">
          {imgList.map((item: any) => (
            <div className="" key={item.id}>
              <img src={item} alt="" className="w-44 h-44" />
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Like Posts",
      value: "like",
      desc: (
        <>
          {posts.like.length > 0 ? (
            <div className="flex items-center justify-between gap-4 flex-wrap mt-6">
              {posts.like?.map((item) => (
                <div className="" key={item.id}>
                  <Link to={`/post/${item.id}`}>
                    <img src={item.blogImage} alt="" className="w-44 h-44" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <h1>no like posts</h1>
          )}
        </>
      ),
    },

    {
      label: "Followers",
      value: "followers",
      desc: (
        <div className="flex items-start justify-between flex-col gap-4 flex-wrap mt-6">
          {post?.map((item) => (
            <div
              className="flex items-center justify-between w-full"
              key={item.id}
            >
              <div className="flex items-center justify-between gap-3">
                <Avatar src={item.image} />
                <div>
                  <h1 className="font-bold text-black">{item.username}</h1>
                  <h1>{item.name}</h1>
                </div>
              </div>
              <div>
                <button className="px-4 py-2 text-sm border bg-black rounded text-white">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Following",
      value: "following",
      desc: (
        <>
          {posts.follow.length > 0 ? (
            <div className="flex items-start justify-between flex-col gap-4 flex-wrap mt-6">
              {posts?.follow?.map((item) => (
                <div
                  className="flex items-center justify-between w-full"
                  key={item.id}
                >
                  <div className="flex items-center justify-start gap-3">
                    <Avatar src={item.image} />
                    <div>
                      <h1 className="font-bold text-black">{item.username}</h1>
                      <h1>{item.name}</h1>
                    </div>
                  </div>
                  <div>
                    <FollowButton
                      isFollow={posts.follow.some((p) => p.id === item.id)}
                      data={item}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>no followers</h1>
          )}
        </>
      ),
    },
    {
      label: "Saved",
      value: "save",
      desc: (
        <>
          {posts.like.length > 0 ? (
            <div className="flex items-center justify-between gap-4 flex-wrap mt-6">
              {posts.savePost?.map((item) => (
                <div className="" key={item.id}>
                  <Link to={`/post/${item.id}`}>
                    <img src={item.blogImage} alt="" className="w-44 h-44" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <h1>no saved posts</h1>
          )}
        </>
      ),
    },
    {
      label: "About",
      value: "about",
      desc: (
        <div className="flex items-center justify-center text-center gap-4 mt-6">
          <div>
            {user.map((item) => (
              <div key={item.id}>
                <Avatar src={"/threadsback.avif"} size="xxl" />
                <h1 className="text-3xl mt-2 font-bold">{item.fullName}</h1>
                <h1>{item.username}</h1>
                <h1>{auth.currentUser?.email}</h1>
                <h1>{auth.currentUser?.metadata.creationTime}</h1>
                <button
                  onClick={() => handlerDelete(item.id)}
                  className="px-2 py-2.5 mt-3 bg-red-700  dark:text-white dark:bg-red-500 text-white rounded w-28 text-xs text-center "
                >
                  Delete Account
                </button>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="mt-4">
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
