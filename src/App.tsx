import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Signup from "./auth/auth/Signup";
import Login from "./auth/auth/Login";
import PostList from "./components/posts/PostList";
import SearchPost from "./pages/SearchPost";
import SingleUserProfile from "./pages/SingleUserProfile";
import SinglePostPopup from "./components/ui/SinglePostPopup";
import PrivateRoutes from "./auth/auth/PrivateRoutes";
import Profile from "./pages/Profile";
import CreatePostForm from "./components/posts/CreatePostForm";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import StatusModal from "./components/ui/StatusModal";
export default function App() {
  const isLogin = useSelector((state: RootState) => state.post.isLogin);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<PostList />} />
            <Route path="/search" element={<SearchPost />} />
            <Route path="/create" element={<CreatePostForm />} />
            <Route path="/status/:id" element={<StatusModal />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<SingleUserProfile />} />
            <Route path="/post/:id" element={<SinglePostPopup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
