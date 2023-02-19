import { Avatar, Box ,Menu,MenuButton,MenuItem,MenuList,useMediaQuery,IconButton, Text } from '@chakra-ui/react';
import { Link,useLocation } from 'react-router-dom';
import React from 'react';
import NavLogo from "../assets/logo.png"






const Navbar = () => {
const location=useLocation()
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
    const [isSmallerThan500]=useMediaQuery('(max-width: 500px)')
    return (
       <Box mb="10px">
{  isLargerThan500 && 
    <Box shadow="base" paddingY="1%" paddingX="2%" alignContent="center"alignItems="center" maxH="20vh" display="flex" justifyContent="space-between">
               <Box > <img width="90px" src={NavLogo} alt="580b57fcd9996e24bc43c529" border="0"></img></Box>
               <Box fontSize="large" fontWeight="bold" display="flex" gap="10vw" >
                   <Link><Text color={location.pathname=="/" && "green"} >Home</Text></Link>
                   <Link>Blog</Link>
                   <Link><Text color={location.pathname=="/login" && "green"} >Login</Text></Link>
                   <Link>Singup</Link>
               </Box>
               <Box> <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<Avatar name="rohit kumar" />}
              borderRadius="full"
           
              variant='outline'
            />
            <MenuList>
              <MenuItem >
                Home Blog 
              </MenuItem>
              <MenuItem >
                This That
              </MenuItem>
              <MenuItem >
                New Tab
              </MenuItem>
              <MenuItem >
                New Tab
              </MenuItem>
            </MenuList>
          </Menu></Box>
           </Box>}



{/* smaller screen  */}



          {
            isSmallerThan500 && <Box shadow="base" paddingY="1%" paddingX="2%" alignContent="center"alignItems="center" maxH="20vh" display="flex" justifyContent="space-between">

          

          <Box>
          <img width="100vw"src={NavLogo} border="0"></img>
          </Box>

          <Box><Avatar></Avatar></Box>
            </Box>
          } 
       </Box>
    );
}

export default Navbar;
