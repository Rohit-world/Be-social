import { Avatar, Box ,Menu,MenuButton,MenuItem,MenuList,useMediaQuery,IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';



const Navbar = () => {
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
    const [isSmallerThan500]=useMediaQuery('(max-width: 500px)')
    return (
       <Box>
{  isLargerThan500 && 
    <Box shadow="base" paddingY="1%" paddingX="2%" alignContent="center"alignItems="center" maxH="20vh" display="flex" justifyContent="space-between">
               <Box > <img width="100vw" src="https://i.ibb.co/02gQmNN/580b57fcd9996e24bc43c529.png" alt="580b57fcd9996e24bc43c529" border="0"></img></Box>
               <Box fontWeight="bold" display="flex" gap="10vw" >
                   <Link>Home</Link>
                   <Link>Blog</Link>
                   <Link>Login</Link>
                   <Link>Singup</Link>
               </Box>
               <Box> <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<Avatar />}
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
          <img width="100vw" src="https://i.ibb.co/02gQmNN/580b57fcd9996e24bc43c529.png" alt="580b57fcd9996e24bc43c529" border="0"></img>
          </Box>

          <Box><Avatar></Avatar></Box>
            </Box>
          } 
       </Box>
    );
}

export default Navbar;
