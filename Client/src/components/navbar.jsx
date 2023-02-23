import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import NavLogo from "../assets/logo.png";
import { useSelector,useDispatch } from "react-redux";
import { LoggedOut } from "../Redux/action";
const Navbar = () => {
  const location = useLocation();
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");
  const user=useSelector((state)=>state.User)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  function LogutUser(){
dispatch(LoggedOut())
localStorage.setItem("be-socialuser",null)
  }
  return (
    <Box mb="10px">
      {isLargerThan500 && (
        <Box
          shadow="base"
          paddingY="1%"
          paddingX="2%"
          alignContent="center"
          alignItems="center"
          maxH="20vh"
          display="flex"
          justifyContent="space-between"
        >
          <Box>
            {" "}
            <img
            onClick={()=>navigate("/")}
              width="90px"
              src={NavLogo}
              alt="580b57fcd9996e24bc43c529"
              border="0"
            ></img>
          </Box>
          <Box fontSize="large" fontWeight="bold" display="flex" gap="10vw">
            <Link to="/">
              <Text color={location.pathname == "/" && "green"}>Home</Text>
            </Link>

             <Text cursor="pointer" onClick={()=>navigate(`/post/user/${user.username}`)} color={location.pathname == `/post/user/${user.username}` && "green"}>Your Posts</Text>
            <Link to="/create/post">
              <Text color={location.pathname == "/create/post" && "green"}>
                Create Post
              </Text>
            </Link>
            <Link to="/about">
              <Text color={location.pathname == "/about" && "green"}>
               About
              </Text>
            </Link>
          </Box>
          <Box>
            {" "}
           {user.username &&  <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<Avatar name="rohit kumar" />}
                borderRadius="full"
                variant="outline"
              />
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem >This That</MenuItem>
                <MenuItem>New Tab</MenuItem>
                <MenuItem onClick={LogutUser}> Logout</MenuItem>
              </MenuList>
            </Menu>}
          </Box>
        </Box>
      )}







      {/* smaller screen  */}

      {isSmallerThan500 && (
        <Box
          shadow="base"
          paddingY="1%"
          paddingX="2%"
          alignContent="center"
          alignItems="center"
          maxH="20vh"
          display="flex"
          justifyContent="space-between"
        >
          <Box>
            <img width="100vw" src={NavLogo} border="0"></img>
          </Box>

          <Box>
            <Avatar></Avatar>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
