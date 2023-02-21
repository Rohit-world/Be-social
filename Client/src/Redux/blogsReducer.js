import { Get_Blogs_fail,Get_Blogs_request,Get_Blogs_success } from "./action"
const intaialData={
  loading:false,
  error:false,
  Blogs:[]
}
  const BlogsReducer=(state=intaialData,action)=>{
   const {type,payload}=action

    switch (type){
      case Get_Blogs_request:
        return{
          ...state,
          loading:true
        }

      case Get_Blogs_fail :
        return{
          ...state,
          loading:false,
          error:true
        }

      case Get_Blogs_success:
        return{
          ...state,
          loading :false,
          error:false,
          Blogs:payload

        }
        default :
        return state
    }

}
export default BlogsReducer