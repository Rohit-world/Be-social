import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormHelperText,
  Input,
  FormLabel,
  Textarea,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  Popover,
  PopoverTrigger,

} from "@chakra-ui/react";

import axios from "axios";
import BaseUrl from "../../server.url";
import PostComponent from "../components/PostComponent";

const Post = () => {
  const { ID } = useParams();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDelopen, onToggle, onClose: isDelClose } = useDisclosure();
  const navigate = useNavigate();
  const [Blog, setBlog] = useState({});
  const [UpdatedData, setUpdatedData] = useState({
    title: "",
    description: "",
    photo: "",
  });
  const loggedUser = useSelector((state) => state.User.username);

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdatedData({ ...UpdatedData, [name]: value });
  }

  //function for getting data
  async function GetData() {
    try {
      axios
        .get(`${BaseUrl}/post/${ID}`)
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
      console.log(err);
      toast({
        title: "Something Went Wrong",
        position: "top",
        status: "error",
      });
    }
  }

  async function UpdateBlog() {
    try {
      axios
        .patch(`${BaseUrl}/post/${ID}`, {
          ...UpdatedData,
          username: loggedUser,
        })
        .then((res) => {
          toast({
            title: "Post Updated Sucessfull",
            position: "top",
            status: "success",
          });
          GetData();
        })
        .catch((err) => {
          console.log("error", err);
          toast({
            title: "Can't update the post",
            position: "top",
            status: "error",
          });
        });
    } catch (error) {
      toast({
        title: "Something went Wrong",
        position: "top",
        status: "error",
      });
    }

    onClose();
  }

  async function DeleteBlog() {
    try {
      axios
        .put(`${BaseUrl}/post/${ID}`, {
          username: loggedUser,
        })
        .then((res) => {
          toast({
            title: "Post Deleted Sucessfull",
            position: "top",
            status: "success",
          });
          navigate(`/post/user/${loggedUser}`);
        })
        .catch((err) => {
          console.log("error", err);
          toast({
            title: "Can't Delete the post",
            position: "top",
            status: "error",
          });
        });
    } catch (error) {
      toast({
        title: "Something went Wrong",
        position: "top",
        status: "error",
      });
    }

    isDelClose();
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Box >
      {Blog && <PostComponent data={Blog} />}

      {Blog.username == loggedUser && (
        <Box
          marginTop="15%"
          display="flex"
          justifyContent="space-evenly"
          padding="4%"
        >
          <Button onClick={onOpen} colorScheme="green">
            Edit Post
          </Button>

          <Popover
            returnFocusOnClose={false}
            isOpen={isDelopen}
            onClose={isDelClose}
            placement="auto"
            closeOnBlur={false}
          >
            <PopoverTrigger>
              <Button onClick={onToggle} colorScheme="red">
                Delete Post
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                Are you sure you want to Delete this Post?
              </PopoverBody>
              <PopoverFooter display="flex" justifyContent="flex-end">
                <ButtonGroup size="sm">
                  <Button onClick={isDelClose} variant="outline">
                    No
                  </Button>
                  <Button onClick={DeleteBlog} colorScheme="red">
                    Yes
                  </Button>
                </ButtonGroup>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </Box>
      )}

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <FormControl paddingLeft={10} paddingRight={10} paddingTop={10}>
              <FormHelperText
                color="green"
                fontWeight="bold"
                fontSize="25px"
                textAlign="center"
              >
                Edit Post
              </FormHelperText>
              <FormLabel paddingTop={5} color="teal">
                Title
              </FormLabel>
              <Input
                name="title"
                onChange={handleChange}
                border="1px solid teal"
                type="text"
              />
              <FormLabel paddingTop={5} color="teal">
                Image
              </FormLabel>
              <Input
                name="photo"
                onChange={handleChange}
                border="1px solid teal"
                type="url"
              />
              <FormLabel paddingTop={5} color="teal">
                Description
              </FormLabel>
              <Textarea
                border="1px solid teal"
                name="description"
                onChange={handleChange}
                type="text"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={UpdateBlog} colorScheme="linkedin">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>






    </Box>
  );
};

export default Post;
