import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleUserPosts } from "../../utils/api";
import { PostType } from "../../utils";
import { Avatar } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import FollowButton from "./FollowButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
export default function TabsButton() {
  const isFollow = useSelector((state: RootState) => state.post.follow);
  const [post, setPosts] = useState<PostType>();
  const { id } = useParams();
  useEffect(() => {
    getSingleUserPosts(`${id}`).then((res) => {
      setPosts(res);
    });
  }, []);
  const data = [
    {
      label: "Posts",
      value: "post",
      desc: (
        <div className="flex items-center justify-between gap-2 flex-wrap mt-6">
          {post?.user_posts.map((item) => (
            <div className="">
              <img src={item.blogImage} className="w-44 h-44 cursor-pointer" />
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Like Posts",
      value: "like",
      desc: (
        <div className="flex items-center justify-between gap-4 flex-wrap mt-6">
          {post?.user_like_posts.map((item) => (
            <div className="">
              <img
                src={item.blogImage}
                alt={item.title}
                className="w-44 h-44 cursor-pointer"
              />
            </div>
          ))}
        </div>
      ),
    },

    {
      label: "Followers",
      value: "followers",
      desc: (
        <div className="flex items-start justify-between flex-col gap-4 flex-wrap mt-6">
          {post?.followers.map((item) => (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start gap-3">
                <Avatar src={item.image} />
                <div>
                  <h1 className="font-bold text-black">{item.username}</h1>
                  <h1>{item.name}</h1>
                </div>
              </div>
              <div>
                <FollowButton
                  isFollow={isFollow.some((p) => p.id === item.id)}
                  data={item}
                />
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
        <div className="flex items-start justify-between flex-col gap-4 flex-wrap mt-6">
          {post?.following.map((item) => (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-between gap-3">
                <Avatar src={item.image} />
                <div>
                  <h1 className="font-bold text-black">{item.username}</h1>
                  <h1>{item.name}</h1>
                </div>
              </div>
              <div>
                <FollowButton
                  isFollow={isFollow.some((p) => p.id === item.id)}
                  data={item}
                />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "About",
      value: "about",
      desc: (
        <div className="flex items-center justify-center text-center gap-4 mt-6">
          <div>
            <Avatar src={post?.image} size="xxl" />
            <h1 className="text-3xl mt-2 font-bold">{post?.name}</h1>
            <h1>{post?.username}</h1>
            <h1>{post?.join_date}</h1>
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
