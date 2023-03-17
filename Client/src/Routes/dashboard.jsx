import { Box, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "../../server.url";
import Crousel from "../components/crousel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GridComponent from "../components/grid";
import {
  BlogRequest,
  BlogRequestFail,
  BlogRequestSuccess,
} from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "../components/LoadingIndicator";
import Footer from "../components/footer";

const Dashboard = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const Blogs = useSelector((state) => state.Blogs);
  const [totalPostCount, setTotalPostCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const LIMIT = 6;

  const TotalPageCalulator=(total,limit)=>{
const Pages=[]
for(let x=1;x<= parseInt(total)/limit;x++){
Pages.push(x)
}
return Pages
  }


  async function GetData() {

    dispatch(BlogRequest());
    try {
      axios
        .get(`${BaseUrl}/post`,
        {params:{
          page:activePage,
          size:LIMIT
        }})
        .then((res) => {
          dispatch(BlogRequestSuccess(res.data.posts));
          setTotalPostCount(res.data.totalPosts);
        })
        .catch((err) => {
          dispatch(BlogRequestFail());
          toast({
            title: "Error in getting data from backend",
            status: "info",
            position: "top",
          });
        });
    } catch (err) {
      dispatch(BlogRequestFail());
      toast({
        title: "Something Went Wrong",
        position: "top",
        status: "error",
      });
    }

   
  }

  useEffect(() => {
    GetData();
    return () => {
      GetData();
    };
  }, [activePage]);

  return (
    <Box>
      <Box>
        <Crousel />
      </Box>
      <Box mt={10} padding="2%" backgroundColor="gray.100" color="green">
        <Heading>Blogs/Articles</Heading>
      </Box>
      {Blogs.loading && <LoadingIndicator />}
      {Blogs.Blogs[0] && <GridComponent data={Blogs.Blogs} />}

     <Box color="rgb(22,137,205)" paddingY="40px" display="flex" justifyContent="center"> <ul style={{display:"flex",gap:"1vw"}}>
      <Button isDisabled={activePage==1} 
       onClick={()=>{ 
        setActivePage((prev)=>prev-1)
      window.scrollTo(0, 400)
      }} >Previous</Button>




       {TotalPageCalulator(totalPostCount,LIMIT).map((pageNo)=>(
        <Button key={pageNo} colorScheme ={activePage==pageNo?"messenger":"gray" }  onClick={()=>{ 
        setActivePage(pageNo)
      window.scrollTo(0, 400)
      }}>{pageNo}</Button>
       ))}

<Button isDisabled={activePage==totalPostCount/LIMIT}  onClick={()=>{ 
        setActivePage((prev)=>prev+1)
      window.scrollTo(0, 400)
      }}>Next</Button>



      </ul></Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
