
export const USER_Logged_In="USER_Logged_In"
export const User_logged_out="User Logged_out"
export const Get_Blogs_request="Get_Blogs_request"
export const Get_Blogs_fail="Get_Blogs_fail"
export const Get_Blogs_success="Get_Blogs_success"

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

export const BlogRequest=()=>{

    return{
        type:Get_Blogs_request
    }

}

export const BlogRequestFail=()=>{
    return {
        type:Get_Blogs_fail
    }

}

export const BlogRequestSuccess=(payload)=>{
    return {
        type:Get_Blogs_success,
        payload:payload
    }

}