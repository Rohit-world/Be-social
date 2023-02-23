import { Box,Heading,Text,useToast } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import axios from "axios";
import BaseUrl from "../../server.url";
import Crousel from "../components/crousel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GridComponent from "../components/grid";
import { BlogRequest,BlogRequestFail,BlogRequestSuccess } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "../components/LoadingIndicator";

const Dashboard = () => {

const toast=useToast()
const navigate=useNavigate()
const dispatch=useDispatch()
const Blogs=useSelector((state)=>state.Blogs) 
  
  async function GetData(){
    dispatch(BlogRequest())
    try{
 axios.get(`${BaseUrl}/post`).then((res)=>{
dispatch(BlogRequestSuccess(res.data))

      }).catch((err)=>{
        dispatch(BlogRequestFail())
        toast({
          title:"Error in getting data from backend",
          status:"info",
          position:"top"
        })
      })

    }catch(err){
      dispatch(BlogRequestFail())
      toast({
        title:"Something Went Wrong",
        position:"top",
        status:"error"
      })
    }
  }



useEffect(() => {
  GetData()
  return () => {
    GetData()
  };
}, []);



return (
<Box>
<Box><Crousel/></Box>
<Box mt={4} padding="2%" backgroundColor="gray.100" color="green" ><Heading>Blogs/Articles</Heading></Box>
{Blogs.loading && <LoadingIndicator />}
{Blogs.Blogs[0] && <GridComponent data={Blogs.Blogs}/>}
</Box>
  );
};

export default Dashboard;
