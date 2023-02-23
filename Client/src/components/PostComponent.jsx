import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const PostComponent = ({data}) => {
    const navigate=useNavigate()


    return (
        <Box display="grid" gap="2%">

            <Text  padding="2%" fontSize="3xl" fontWeight="medium" bgColor="gray.100"  >
                
    See all posts of <span onClick={()=>navigate(`/post/user/${data.username}`)} style={{textTransform:"capitalize",color:"green",cursor:"pointer",textDecoration:"underline"}}>{data.username}</span></Text>



    <Text cursor="pointer" color="blueviolet"   fontSize="3xl" fontWeight="medium"   >
             </Text>
             <Image width="95vw" borderRadius="5px" margin="auto" src={data.photo}/>
            <Box>

            <Text textTransform="capitalize" mt="3px" color="green.600" fontFamily="mono">
                Posted on: {Date(data.postTime).slice(3,15)} by {data.username}</Text>

            <Text color="orange.900" fontWeight="medium" fontSize="4xl">{data.title}</Text>
           
          <Box mt="30px" px="4%" maxW="100vw">
              <pre style={{textAlign:"start",overflowWrap:"break-word",wordBreak:"break-all",display:"flex",whiteSpace:"break-spaces",fontFamily:"sans-serif"}} >
                 {data.description}
                </pre>
                </Box>


                


            </Box>
        </Box>
    );
}

// text-align: start;
//    overflow-wrap: break-word;
//    word-break: break-all;
export default PostComponent;
