import { Avatar, Box, Button, Input, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../../server.url';

const ProfilePage = () => {

  const [newData,setNewData]=useState({
    password:"",
    confirmPassword:"",
    propic:"",
  })
  const toast=useToast()
  const userLoggedIn=useSelector((state)=>state.User)  
  const navigate=useNavigate()


function handleChange(e){
  const {name,value}=e.target
setNewData({...newData,[name]:value})

}


async function handleSubmit(){
if(newData.password!=newData.confirmPassword){
  return toast({
    status:"info",
    title:"Fill Same Password",
    position:"top"
  })
}
try{

  
axios.patch(`${BaseUrl}/user/${userLoggedIn._id}`,{
  userID:userLoggedIn._id,
  password:newData.password
}).then((res)=>{
  toast({
    status:"success",
    title:"Password changed Sucessfull",
    position:"top"

  })
navigate("/")
}).catch((err)=>{
  toast({
    status:"error",
    title:"something went wrong",
    position:"top"

  })
})


}catch(err){
  toast({
    status:"error",
    title:"something went wrong",
    position:"top"

  })
}


}

    return (
        <Box height="75vh">
           <Box>
            <Text fontSize="2xl" fontWeight="extrabold" color="green.500" > Hello {userLoggedIn.username} !</Text>
           </Box>




           <Box  mt="5%" display="flex" justifyContent="space-around">


           <Box>
            <Avatar size="2xl"/></Box>


<Box width="35%" display="grid" gap="30%">
  
  <Text color="blueviolet" fontSize="xl" fontWeight="bold">Change Password</Text>
  <Input name='password' onChange={handleChange} type="password" placeholder='Enter New Password'/>
  <Input name="confirmPassword" onChange={handleChange} type="password" placeholder='Confirm New Password'/>
  <Button onClick={handleSubmit} colorScheme="messenger">Change Password</Button>


</Box>
           </Box>





        </Box>
    );
}

export default ProfilePage;
