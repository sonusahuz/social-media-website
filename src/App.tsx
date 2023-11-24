import { BrowserRouter, Route, Routes } from "react-router-dom";
import withLazy from "./components/layouts/LazyLoad";
const Signup = withLazy(() => import("./auth/Signup"));
const Login = withLazy(() => import("./auth/Login"));
const PostList = withLazy(() => import("./components/ui/PostList"));
const SearchPost = withLazy(() => import("./pages/SearchPost"));
const SingleUserProfile = withLazy(() => import("./pages/SingleUserProfile"));
const SinglePostPopup = withLazy(
  () => import("./components/ui/SinglePostPopup")
);
const PrivateRoutes = withLazy(() => import("./auth/PrivateRoutes"));
const Profile = withLazy(() => import("./pages/Profile"));
const StatusModal = withLazy(() => import("./components/ui/StatusModal"));
const Layout = withLazy(() => import("./components/layouts/Layouts"));
const Explore = withLazy(() => import("./pages/Explore"));
const CreatePost = withLazy(() => import("./pages/CreatePost"));
const EditProfile = withLazy(() => import("./pages/EditProfile"));

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<PostList />} />
            <Route path="/search" element={<SearchPost />} />
            <Route path="/edit-profile/:id" element={<EditProfile />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/status/:id" element={<StatusModal />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<SingleUserProfile />} />
            <Route path="/post/:id" element={<SinglePostPopup />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
