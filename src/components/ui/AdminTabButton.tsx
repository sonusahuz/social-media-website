import { useEffect, useState } from "react";
import { getUserPosts } from "../../utils/api";
import { PostType } from "../../utils";
import { Avatar } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FollowButton from "./FollowButton";
import { Link } from "react-router-dom";
import { storage } from "../../auth/firebase/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

export default function AdminTabsButton() {
  const [imgList, setImgList] = useState<any>([]);
  const [userPost, setPosts] = useState<PostType[]>([]);
  const posts = useSelector((state: RootState) => state.post);
  useEffect(() => {
    getUserPosts().then((res) => {
      setPosts(res);
    });
  }, []);
  const imgs = ref(storage, "img/");

  useEffect(() => {
    listAll(imgs).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((res) => {
          setImgList((prev: any) => [...prev, res]);
          console.log(res);
        });
      });
    });
  }, []);

  const data = [
    {
      label: "Posts",
      value: "post",
      desc: (
        <div className="flex items-center justify-between gap-2 flex-wrap mt-6 dark:bg-black dark:text-white">
          {imgList.map((item: any) => (
            <div className="">
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
          {userPost?.map((item) => (
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
          {/* <div>
            <Avatar src={post?.image} size="xxl" />
            <h1 className="text-3xl mt-2 font-bold">{post?.name}</h1>
            <h1>{post?.username}</h1>
            <h1>{post?.join_date}</h1>
          </div> */}
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
