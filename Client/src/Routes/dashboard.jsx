import { Box,Text,useToast } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import axios from "axios";
import BaseUrl from "../../server.url";
import Crousel from "../components/crousel";

const Dashboard = () => {
const [Blogs,setblogs]=useState([])
const toast=useToast()
  
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

<Box display="grid" gridTemplateColumns="repeat(3,1fr)" gap={5} >
{Blogs[0] && Blogs.map((ele)=>
  <Box  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="10px" padding={5}> 

<img  src={ele.photo} alt="" />
<Text fontSize="1.5vw"  fontWeight="bold" color="orange.900"> {ele.title}  </Text>

<Text align="start">{ele.description.slice(0,350)}  ...........</Text>
</Box>
)}
</Box>

 </Box>
  );
};

export default Dashboard;
