import { USER_Logged_In,User_logged_out } from "./action"
const initialData =JSON.parse(localStorage.getItem("be-socialuser"))||{
    username:"",
    email:"",
    profilepic:""
}
const UserReducer=(state=initialData,action)=>{
switch (action.type){
    case USER_Logged_In:
        return {
            ...state,
            ...action.payload
        }
    case User_logged_out:
        return {
            ...state,username:"",
            email:""
        }
        default:
            return state
}
}

export default UserReducer