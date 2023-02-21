import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const PostComponent = ({data}) => {
    const navigate=useNavigate()

    return (
        <Box display="grid" gap="2%">
            <Text onClick={()=>navigate(`/post/user/${data.username}`)} color="blueviolet" fontSize="xl" cursor="pointer" >@{data.username}</Text>
             <Image maxH="80vh" borderRadius="10px" margin="auto" src={data.photo}/>
            <Box>


            <Text color="orange.900" fontWeight="medium" fontSize="4xl">{data.title}</Text>
           
            <Text px="10%" >{data.description}</Text>


            </Box>
        </Box>
    );
}

export default PostComponent;
