import { Box, Text, useToast } from "@chakra-ui/react";
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
  const toast = useToast();

  async function GetData() {
    try {
      axios
        .get(`${BaseUrl}/post?user=${username}`)
        .then((res) => {
          setBlog(res.data);
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
  }, [username]);

  return (
    <Box>
      <Text padding="2%" fontSize="3xl" fontWeight="medium" bgColor="gray.100">
        All Blogs/Articles of{" "}
        <span style={{ textTransform: "capitalize", color: "green" }}>
          {username == LoggedUser ? "You" : username}
        </span>
      </Text>

      {Blogs[0] && <GridComponent data={Blogs} />}

      <Footer />
    </Box>
  );
};

export default UserBlog;
