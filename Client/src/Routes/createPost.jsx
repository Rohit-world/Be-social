import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Textarea,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../server.url";
import PreviwPng from "../assets/preview.png";


const CreatePost = () => {
  const [isLargerThan850] = useMediaQuery("(min-width: 850px)");
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");
  const Toast = useToast();
  const [postData, setpostdata] = useState({ title: "", description: "",photo:"",category:"" });
  const [loading,setloading]=useState(false)
  const LoggedUser=useSelector((state)=>state.User.username)
  const navigate=useNavigate()
useSelector((state)=>console.log(state.User))

  function PassedValidationCheck() {
    if (!postData.photo|| !postData.title || !postData.description ||!postData.category) {
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
            username:LoggedUser,
            postTime:Date.now(),
            }).then((res)=>{
             if(res.data){
              Toast({
                title:"Post added Successfully",
                status:"success",
                position:"top"
              })
             }
              setloading(false)
              navigate("/")
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
    <Box pb="5%" minHeight="75vh">
      <Heading color="green.600">Create New Post</Heading>
      <Box pt="5%" display={isLargerThan850?"flex":"grid"} justifyContent="space-around">
        <Box display="grid" gap={10}>
          <img
            
            width="400px"
            src={postData.photo|| PreviwPng}
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
            onChange={handleImageChange}
            type="file"
            placeholder="Choose a Image"
          />


          {/* <Input onChange={handleChange} type="url" placeholder="Image Url" name="photo"/> */}
        </Box>

        <Box
          width={isLargerThan850 && "40%"}
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
          <Select  onChange={handleChange} name="category"  mt="10px">
            <option value="">Select Category</option>
            <option value="photoghraphy">PhotoGraphy</option>
            <option value="wildlife">Wildlife</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="travelling">Travelling</option>
            <option value="books">Books</option>
            <option value="music">Music</option>
            <option value="humanlife">Human Life</option>
          </Select>

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
