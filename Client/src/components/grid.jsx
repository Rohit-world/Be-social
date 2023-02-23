import { Box,Text,useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const GridComponent = ({data}) => {
  const [isLargerThan850] = useMediaQuery("(min-width: 850px)");
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");

  const navigate=useNavigate()


  
    return (         
<Box mt={4} display="grid" gridTemplateColumns={isSmallerThan500 &&"repeat(1,1fr)"||isSmallerThan850 && "repeat(2,1fr)" || isLargerThan850&&"repeat(3,1fr)" } gap={5} >


{data[0] && data.map((ele,index)=>
  <Box key={index} _hover={{backgroundColor:"gray.100"}}  cursor="pointer" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="10px" > 

<img onClick={()=>navigate(`/post/${ele._id}`)}  style={{borderRadius:"10px",height:"280px",width:"100%"}} src={ele.photo} alt="" />
<Box padding="4%">
<Text  textTransform="uppercase" onClick={()=>navigate(`/post/${ele._id}`)} fontSize="xl"  fontWeight="bold" color="orange.900"> {ele.title.slice(0,30)}...  </Text>

<Box >
  {/* <Link to={`/post/user/${ele.username}`}>
<Text  _hover={{color:"blue",textDecoration:"none"}} textDecoration="underline" color="blueviolet" align="start">@{ele.username}</Text>
</Link> */}

<Text textTransform="capitalize" fontSize="small" mt="3px"  fontFamily="mono">
Posted on: <span >{Date(ele.postTime).slice(3,15)}</span> by <span style={{color:"green",}} >{ele.username}</span>
  </Text>

</Box>

<Text mt="5px" onClick={()=>navigate(`/post/${ele._id}`)} color="gray.600" align="start">{ele.description.slice(0,340)}......</Text>


</Box>
</Box>
)}
</Box>
    );
}

export default GridComponent;
