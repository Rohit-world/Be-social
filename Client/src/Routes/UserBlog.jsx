import { Avatar, Box, Text, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "../../server.url";
import GridComponent from "../components/grid";
import { useSelector } from "react-redux";
import Footer from "../components/footer";

const UserBlog = () => {
  const [Blogs, setBlog] = useState([]);
  const { username } = useParams();
  const LoggedUser = useSelector((state) => state.User.username);
  const [profilePic,setProfilepic]=useState("")
  const toast = useToast();

  async function GetData() {
    try {
      axios
        .get(`${BaseUrl}/post?user=${username}`)
        .then((res) => {
          setBlog(res.data.posts);
        })
        .catch((err) => {
          toast({
            title: "Error in getting data from backend",
            status: "info",
            position: "top",
          });
        });
    } catch (err) {
      toast({
        title: "Something Went Wrong",
        position: "top",
        status: "error",
      });
    }
  }

  async function GetProfilepic() {
    try {
      axios
        .get(`${BaseUrl}/auth/${username}`)
        .then((res) => {
         setProfilepic(res.data.profilepic)
        })
        .catch((err) => {
          toast({
            title: "Error in getting data from backend",
            status: "info",
            position: "top",
          });
        });
    } catch (err) {
      toast({
        title: "Something Went Wrong",
        position: "top",
        status: "error",
      });
    }
  }

  useEffect(() => {
    GetData();
    GetProfilepic()
  }, [username]);

  return (
    <Box>

      <Box gap="2%" padding="1%" bgColor="gray.100" display="flex" justifyContent="center" alignItems="center">
      <Text fontSize="3xl" fontWeight="medium" >
        All Blogs/Articles of{" "}
        <span style={{ textTransform: "capitalize", color: "green" }}>
          {username == LoggedUser ? "You" : username}
        </span>
      </Text>

      <Avatar size="xl" src={profilePic}/>
      </Box>
       
     
     

      {Blogs[0] && <GridComponent data={Blogs} />}

      <Footer />
    </Box>
  );
};

export default UserBlog;
