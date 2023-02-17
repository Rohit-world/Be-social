import { Route,Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";
import Register from "./register";

const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route />
            <Route />
            <Route />
        </Routes>
    )
}
export default AllRoutes