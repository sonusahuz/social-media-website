import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./auth/auth/Signup";
import Login from "./auth/auth/Login";
import PostList from "./components/posts/PostList";
import SearchPost from "./pages/SearchPost";
import SingleUserProfile from "./pages/SingleUserProfile";
import SinglePostPopup from "./components/ui/SinglePostPopup";
import PrivateRoutes from "./auth/auth/PrivateRoutes";
import Profile from "./pages/Profile";
import StatusModal from "./components/ui/StatusModal";
import Layout from "./components/layouts/Layouts";
import Explore from "./pages/Explore";
import CreatePost from "./components/posts/CreatePost";
import EditProfile from "./pages/EditProfile";

export default function App() {
  return (
    <>
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
    </>
  );
}
