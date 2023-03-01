import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import {AiFillInstagram} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import {IoLogoLinkedin} from "react-icons/io"
const Footer = () => {
    return (
        <Box  justifyContent="space-around" padding="2%" display="flex" justifyItems="center" alignItems="center" color="white" width="100%" height="50px" bgColor="rgb(22,137,205)">
            <Box><Text>© Designed and Built by Rohit Kumar</Text></Box>

            
            <Box display="flex" gap={10}>
            <a href="mailto:rohitrs319791@gmail.com"><MdEmail  size="30px"/></a> 
               <a target="_blank" href="https://www.linkedin.com/in/iamrohit90/"  > <IoLogoLinkedin  size="30px"/></a>
               <a target="_blank" href="https://www.instagram.com/rohitisonline/"> <AiFillInstagram size="30px"/></a>
              
            </Box>

        </Box>
    );
}

export default Footer;
