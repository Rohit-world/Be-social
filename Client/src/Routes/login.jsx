import { Box, Button, Input, Text,useToast } from '@chakra-ui/react';
import React,{useState} from 'react';
import loginSvg from "../assets/login.svg"
import { useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BaseUrl from '../../server.url';


const Login = () => {
const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
const toast=useToast()
const [Userdata, setUserdata] = useState({username:"", password:""});
const [loading ,setloading]=useState(false)
function handleChange(e){
const {name,value}=e.target
setUserdata({
    ...Userdata,
    [name]:value
})
}

async function  handleSubmit(){
if(!Userdata.username||!Userdata.password||!Userdata)return toast({title:"Please Fill all credentials",position:"top",status:"info"})

setloading(true)
try {
    axios.post(`${BaseUrl}/auth/login`,Userdata).then((res)=>{
        setloading(false)

    }).catch((err)=>{
        setloading(false)
        toast({title:err.response.data,status:"error",position:"top"})  })

} catch (error) {
 setloading(false)
  toast({title:"Something went wrong",status:"error",position:"top"})
}
}



    return (
        <Box padding="3%" display="flex" justifyContent="center" alignItems="center">

           {isLargerThan500 &&  <Box   width="50vw"> <img src={loginSvg} alt="" /></Box>}

            <Box  width={isLargerThan500?"50vw":"90vh"} > 
                <Box margin="auto"  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" h="75vh" borderRadius="10px">
                    <Text pt="5%" color="messenger.500"  fontFamily="fantasy" fontWeight="bold" pb="8%" fontSize="4xl">Login</Text>
                   <Box paddingX={isLargerThan500?  "20%" :"5%"}  display="grid" gap={10}>
                   <Input name="username" onChange={handleChange} placeholder='USERNAME' type="username"  />
                    <Input name="password" onChange={handleChange} placeholder='PASSWORD' type="password"  />
                    <Button isLoading={loading} onClick={handleSubmit} colorScheme="messenger">Login</Button>

                    <Text color="gray">New To website? <Link to="/register" style={{color:"blue"}}>Register</Link></Text>
                   </Box>

                
                </Box>
            </Box>


        </Box>
    );
}

export default Login;
