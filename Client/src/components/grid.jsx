import { Box,Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const GridComponent = ({data}) => {
    const navigate=useNavigate()
    return (         
<Box mt={4} display="grid" gridTemplateColumns="repeat(3,1fr)" gap={5} >


{data[0] && data.map((ele,index)=>
  <Box key={index} _hover={{backgroundColor:"gray.100"}}  cursor="pointer" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="10px" > 

<img onClick={()=>navigate(`/post/${ele._id}`)}  style={{borderRadius:"10px",height:"280px"}} src={ele.photo} alt="" />
<Box padding="4%">
<Text  onClick={()=>navigate(`/post/${ele._id}`)} fontSize="1.5vw"  fontWeight="bold" color="orange.900"> {ele.title.slice(0,30)}...  </Text>

<Box width="20%">
  <Link to={`/post/user/${ele.username}`}>
<Text _hover={{color:"blue",textDecoration:"none"}} textDecoration="underline" color="blueviolet" align="start">@{ele.username}</Text>
</Link>
</Box>

<Text onClick={()=>navigate(`/post/${ele._id}`)} color="gray.600" align="start">{ele.description.slice(0,340)}  ...........</Text>
</Box>
</Box>
)}
</Box>
    );
}

export default GridComponent;
