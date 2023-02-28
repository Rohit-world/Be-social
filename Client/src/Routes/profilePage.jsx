import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {

  const userLoggedIn=useSelector((state)=>state.User.username)  
    return (
        <Box height="75vh">
           <Box>
            <Text fontSize="2xl" fontWeight="extrabold" color="green.500" > Hello {userLoggedIn} !</Text>
           </Box>

           <Box>

           </Box>
        </Box>
    );
}

export default ProfilePage;
