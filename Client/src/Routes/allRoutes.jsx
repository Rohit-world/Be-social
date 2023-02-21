import { Route,Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";
import Register from "./register";
import CreatePost from "./createPost";
import Post from "./post";
import UserBlog from "./UserBlog";

const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="create/post" element={<CreatePost/>} />
            <Route path="/post/:ID"element={<Post/>} />
            <Route path="/post/user/:username" element={<UserBlog/>} />
        </Routes>
    )
}
export default AllRoutes