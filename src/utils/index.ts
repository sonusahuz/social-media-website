interface UserPosts {
  title: string;
  blogImage: string;
  username: string;
  image: string;
  id: string;
}
interface Comments {
  id: string;
  text: string;
  image: string;
  username: string;
}
export interface VideosType {
  url: string;
  username: string;
  id: string;
}
export interface ReelsType {
  id: string;
  link: string;
}
export interface StatusType {
  id: string;
  status: string;
  image: string;
}
interface FollowersType {
  username: string;
  image: string;
  name: string;
  id: string;
}
export interface PostType {
  title: string;
  id: string;
  username: string;
  image: string;
  name: string;
  blogImage: string;
  followers: FollowersType[];
  following: FollowersType[];
  bio: string;
  join_date: string;
  posts_banner: string;
  user_posts: UserPosts[];
  user_like_posts: UserPosts[];
  comment: Comments[];
  videos: VideosType[];
  status: StatusType[];
}

export interface SinglePostType {
  post: {
    id: string;
    title: string;
    username: string;
    image: string;
    name: string;
    blogImage: string;
    followers: FollowersType[];
    following: FollowersType[];
    bio: string;
    join_date: string;
    posts_banner: string;
    user_posts: UserPosts[];
    user_like_posts: UserPosts[];
    comment: Comments[];
    videos: VideosType[];
    status: StatusType[];
  };
}

interface StateType {
  imagePopup: boolean;
  like: PostType[];
  follow: PostType[];
  savePost: PostType[];
  isLogin: boolean;
  comment: Comments[];
  notification: string;
}

export const initialState: StateType = {
  imagePopup: false,
  like: [],
  follow: [],
  savePost: [],
  isLogin: false,
  comment: [],
  notification: "",
};

export interface VideoType {
  id: number;
  link: string;
}

export interface UserProfile {
  id: string;
  username: string;
  fullName: string;
}
