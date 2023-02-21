import {
  Avatar,
  Box,
  Button,
  Heading,

  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import BaseUrl from "../../server.url";
import PreviwPng from "../assets/preview.png";
import resizeImage from "../js/ResizeImage";

const CreatePost = () => {
  const Toast = useToast();
  const [base64Image, setbase64Image] = useState("");
  const [postData, setpostdata] = useState({ title: "", description: "",photo:"" });
  const [loading,setloading]=useState(false)


  function PassedValidationCheck() {
    if (!postData.photo|| !postData.title || !postData.description) {
      Toast({
        title: "Please Give all the Details",
        status: "info",
        position: "top",
      });
      return false;
    } else if (postData.description.length < 100) {
      Toast({
        title: "Description must be atleast 100 Words",
        status: "info",
        position: "top",
      });
      return false;
    } else {
      return true;
    }
  }


  async function handleSubmit() {
    if (PassedValidationCheck()) {

        try{
setloading(true)
            axios.post(`${BaseUrl}/post`,{
            ...postData,
            username:"rohit",
            postTime:Date.now(),category:["life","photography"]
            }).then((res)=>{
             if(res.data){
              Toast({
                title:"Post added Successfully",
                status:"success",
                position:"top"
              })
             }
              setloading(false)
            }).catch((err)=>{
              console.log("errir",err)
              setloading(false)
            })

        }catch(err){
console.log(err)
setloading(false)
        }

    } else {
      return;
    }
  }

  // function handleImageChange(e) {
  //   setloading(true)
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.addEventListener("load", async() => {
  //     setbase64Image(reader.result);
  //     resizeImage(base64Image).then((result) => {
  //      setbase64Image(result)
  //      setloading(false)
  //   });

  //   });
  //   reader.readAsDataURL(file);
  // }
  function handleChange(e) {
    setpostdata({ ...postData, [e.target.name]: e.target.value });
  }
  return (
    <Box>
      <Heading color="green.600">Create New Post</Heading>
      <Box pt="5%" display="flex" justifyContent="space-around">
        <Box display="grid" gap={10}>
          <img
            
            width="400px"
            src={postData.photo|| PreviwPng}
          />
          {/* <Input
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
            onChange={handleImageChange}
            type="file"
            placeholder="Choose a Image"
          /> */}


          <Input onChange={handleChange} type="url" placeholder="Image Url" name="photo"/>
        </Box>

        <Box
          width="40%"
          justifyContent="space-around"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Input
            name="title"
            onChange={handleChange}
            placeholder="Title of the post"
            type="text"
          />

          <Textarea
            mt="10px"
            height="150px"
            name="description"
            onChange={handleChange}
            placeholder="Description of the post"
            type="text"
          />

          <Button  isLoading={loading} onClick={handleSubmit} mt="10px" colorScheme="messenger">
            Publish
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatePost;
