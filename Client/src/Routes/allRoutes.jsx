import { Route,Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";
import Register from "./register";
import CreatePost from "./createPost";
import Post from "./post";
import UserBlog from "./UserBlog";
import PrivateRoute from "./PrivateRoutes";
import NotFound from "./NotFound";
import PostCategorypage from "./postCategorypage";

const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="create/post" element={<PrivateRoute><CreatePost/></PrivateRoute>} />
            <Route path="/post/:ID"element={<PrivateRoute><Post/></PrivateRoute>} />
            <Route path="/post/user/:username" element={<PrivateRoute><UserBlog/></PrivateRoute>} />
            <Route path="/post/cat/:category" element={<PrivateRoute><PostCategorypage/></PrivateRoute>} />

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
export default AllRoutes