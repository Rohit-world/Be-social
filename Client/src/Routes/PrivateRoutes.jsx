import React from 'react';
import { useSelector } from 'react-redux';
import Login from './login';


const PrivateRoute = ({children}) => {
let username=useSelector((state)=>state.User.username)
if(username){
    return children
}else{
return <Login/>
}

}

export default PrivateRoute;
