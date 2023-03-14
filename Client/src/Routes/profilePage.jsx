import {
  Avatar,
  Box,
  Button,
  Input,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../server.url";
import { imageUpload } from "../js/imageUpload";
import {LoggedIn} from "../Redux/action"
const ProfilePage = () => {
  const [newData, setNewData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [profilepic, setProfilePic] = useState(null);
  const dispatch=useDispatch()
  const [imgFile, setImgFile] = useState(null);
  const toast = useToast();
  const userLoggedIn = useSelector((state) => state.User);
  const navigate = useNavigate();
  const [isLargerThan850] = useMediaQuery("(min-width: 850px)");

  function handleChange(e) {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  }
  function HandleFileUpload(e) {
    setImgFile(e.target.files[0]);
    covertimageToLink()
  }
  async function covertimageToLink() {
    imageUpload(imgFile).then((url) => setProfilePic(url));
  }

  async function UploadProfilpic() {
    console.log("trigg");
    if (!profilepic) {
      return toast({
        status: "info",
        title: "Please Choose the Picture",
        position: "top",
      });
    }
    try {
      axios
        .patch(`${BaseUrl}/user/pic/${userLoggedIn._id}`, {
          userID: userLoggedIn._id,
          profilepic: profilepic,
        })
        .then((res) => {
          toast({
            status: "success",
            title: "Profile picture Changed Successfully",
            position: "top",
          });
          navigate("/");
          dispatch(LoggedIn(res.data));
          localStorage.setItem("be-socialuser",JSON.stringify(res.data))
        })
        .catch((err) => {
          toast({
            status: "error",
            title: "something went wrong",
            position: "top",
          });
        });
    } catch (err) {
      toast({
        status: "error",
        title: "something went wrong",
        position: "top",
      });
    }
  }

  async function handleSubmit() {
    if (newData.password != newData.confirmPassword) {
      return toast({
        status: "info",
        title: "Fill Same Password",
        position: "top",
      });
    }
    try {
      axios
        .patch(`${BaseUrl}/user/${userLoggedIn._id}`, {
          userID: userLoggedIn._id,
          password: newData.password,
          profilepic: newData.profilepic,
        })
        .then((res) => {
          toast({
            status: "success",
            title: "Password changed Sucessfull",
            position: "top",
          });
          navigate("/");
        })
        .catch((err) => {
          toast({
            status: "error",
            title: "something went wrong",
            position: "top",
          });
        });
    } catch (err) {
      toast({
        status: "error",
        title: "something went wrong",
        position: "top",
      });
    }
  }




  return (
    <Box height="75vh">
      <Box>
        <Text fontSize="2xl" fontWeight="extrabold" color="green.500">
          {" "}
          Hello {userLoggedIn.username} !
        </Text>
      </Box>

      <Box
        mt="5%"
        display={isLargerThan850 && "flex"}
        justifyContent="space-around"
      >
        <Box display="grid">
          <Avatar
            src={profilepic || userLoggedIn.profilepic}
            margin="auto"
            size="2xl"
          />
          <Input
            css={{
              "&::-webkit-file-upload-button": {
                backgroundColor: "rgb(0,120,255)",
                marginTop: "6px",
                border: "none",
                color: "white",
                borderRadius: "5px",
              },
            }}
            accept="image/png, image/jpeg, image/jpeg"
            onChange={HandleFileUpload}
            type="file"
            placeholder="Choose a Image"
          />

          {/* <Input onChange={handleChange} mt="10%" type="url" placeholder='Profile Picture' name="profilepic"  /> */}
          <Button onClick={UploadProfilpic} mt="10px" colorScheme="messenger">
            Upload
          </Button>
        </Box>

        <Box width="35%" display="grid" gap="30%">
          <Text color="blueviolet" fontSize="xl" fontWeight="bold">
            Change Password
          </Text>
          <Input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Enter New Password"
          />
          <Input
            name="confirmPassword"
            onChange={handleChange}
            type="password"
            placeholder="Confirm New Password"
          />
          <Button onClick={handleSubmit} colorScheme="messenger">
            Change Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
