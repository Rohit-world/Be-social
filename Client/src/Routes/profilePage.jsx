import { Avatar, Box, Button, Input, Text } from '@chakra-ui/react';
import React,{useState} from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {

  const [newData,setNewData]=useState({
    password:"",
    confirmPassword:"",
    propic:"",
  })
  const userLoggedIn=useSelector((state)=>state.User.username)  

function handleChange(){
  
}


    return (
        <Box height="75vh">
           <Box>
            <Text fontSize="2xl" fontWeight="extrabold" color="green.500" > Hello {userLoggedIn} !</Text>
           </Box>




           <Box  mt="5%" display="flex" justifyContent="space-around">


           <Box>
            <Avatar size="2xl"/></Box>


<Box width="35%" display="grid" gap="30%">
  
  <Text color="blueviolet" fontSize="xl" fontWeight="bold">Change Password</Text>
  <Input name='password' onChange={handleChange} type="password" placeholder='Enter New Password'/>
  <Input name="confirmPassword" onChange={handleChange} type="password" placeholder='Confirm New Password'/>
  <Button colorScheme="messenger">Change Password</Button>


</Box>
           </Box>





        </Box>
    );
}

export default ProfilePage;
