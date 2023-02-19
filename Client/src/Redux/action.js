
export const USER_Logged_In="USER_Logged_In"
export const User_logged_out="User Logged_out"

export const LoggedIn=(payload)=>{
return{
payload,
type:USER_Logged_In
}
}

export const LoggedOut=()=>{
    return{
        type:User_logged_out
    }
}