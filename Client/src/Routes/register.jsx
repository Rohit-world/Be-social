import { Box, Button, Input, Text,useToast } from '@chakra-ui/react';
import React,{useState} from 'react';
import loginSvg from "../assets/login.svg"
import { useMediaQuery } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BaseUrl from '../../server.url';
import Footer from '../components/footer';


const Register = () => {
const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
const toast=useToast()
const [Userdata, setUserdata] = useState({username:"", password:"",email:""});
const [loading ,setloading]=useState(false)
const navigate=useNavigate()
function handleChange(e){
const {name,value}=e.target
setUserdata({
    ...Userdata,
    [name]:value
})
}

function DetailsValitadion(){
if(!Userdata.email.includes("@")){
toast({
    title:"Email must Enclude @ ",
    status:"info",
    position:"top"
})
return false
}else if(Userdata.password.length<8){
    toast({
        title:"Password must be 8 Char. ",
        status:"info",
        position:"top"
    })
    return false
}else{
    return true
}
}

async function  handleSubmit(){
if(!Userdata.username||!Userdata.password|| !Userdata.email)return toast({title:"Please Fill all credentials",position:"top",status:"info"})
if(!DetailsValitadion())return

setloading(true)
try {
    axios.post(`${BaseUrl}/auth/register`,Userdata).then((res)=>{
       setloading(false)
       toast({title:"Account Created successfully",status:"success",position:"top"})
       navigate("/login")

    }).catch((err)=>{
        setloading(false)
        toast({title:err.response.data,status:"error",position:"top"})})

} catch (error) {
 setloading(false)
  toast({title:"Something went wrong",status:"error",position:"top"})
}
}



    return (
        <Box padding="3%" display="flex" justifyContent="center" alignItems="center">

           {isLargerThan500 &&  <Box   width="50vw"> <img src={loginSvg} alt="" /></Box>}

            <Box  width={isLargerThan500?"50vw":"90vw"} > 
                <Box margin="auto"  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" py="4%" borderRadius="10px">
                    <Text  color="messenger.500"  fontFamily="fantasy" fontWeight="bold" pb="8%" fontSize="4xl">Create Account</Text>
                   <Box paddingX={isLargerThan500?  "20%" :"5%"}  display="grid" gap={10}>
                   <Input name="username" onChange={handleChange} placeholder='Enter Username' type="username"  />
                   <Input name="email" onChange={handleChange} placeholder='Enter Email' type="email"  />
                    <Input name="password" onChange={handleChange} placeholder='Enter Password' type="password"  />

                    
                    <Button isLoading={loading} onClick={handleSubmit} colorScheme="messenger">Register</Button>

                    <Text color="gray">Already have an account? <Link to="/login" style={{color:"blue"}}>Login</Link></Text>
                   </Box>

                
                </Box>
            </Box>

            <Footer/>

        </Box>
    );
}

export default Register;
