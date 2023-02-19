import { Box,Heading,Text,useToast } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import axios from "axios";
import BaseUrl from "../../server.url";
import Crousel from "../components/crousel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GridComponent from "../components/grid";


const Dashboard = () => {
const [Blogs,setblogs]=useState([])
const toast=useToast()
const navigate=useNavigate()
  
  async function GetData(){
    try{

      axios.get(`${BaseUrl}/post`).then((res)=>{
setblogs(res.data)
      }).catch((err)=>{
        toast({
          title:"Error in getting data from backend",
          status:"info",
          position:"top"
        })
      })

    }catch(err){
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
console.log(Blogs)

  return (
  <Box>
<Box><Crousel/></Box>

<Box mt={4} padding="2%" backgroundColor="gray.100" color="green" ><Heading>Blogs/Articles</Heading></Box>
{Blogs[0] && <GridComponent data={Blogs}/>}


 </Box>
  );
};

export default Dashboard;
