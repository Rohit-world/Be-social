import { Box,Heading,Text,useToast } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import axios from "axios";
import BaseUrl from "../../server.url";
import Crousel from "../components/crousel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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

<Box mt={4} display="grid" gridTemplateColumns="repeat(3,1fr)" gap={5} >


{Blogs[0] && Blogs.map((ele)=>
  <Box _hover={{backgroundColor:"gray.100"}}  cursor="pointer" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="10px" > 

<img onClick={()=>navigate("/post")} style={{borderRadius:"10px"}} src={ele.photo} alt="" />
<Box padding="4%">
<Text  onClick={()=>navigate("/post")}fontSize="1.5vw"  fontWeight="bold" color="orange.900"> {ele.title.slice(0,30)}...  </Text>

<Box width="20%">
  <Link to={`/post/user/${ele.username}`}>
<Text _hover={{color:"blue",textDecoration:"none"}} textDecoration="underline" color="blueviolet" align="start">@{ele.username}</Text>
</Link>
</Box>

<Text onClick={()=>navigate("/post")} color="gray.600" align="start">{ele.description.slice(0,340)}  ...........</Text>
</Box>
</Box>
)}
</Box>

 </Box>
  );
};

export default Dashboard;