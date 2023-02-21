import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import BaseUrl from '../../server.url';
import PostComponent from '../components/PostComponent';
const Post = () => {
const{ID}=useParams()
const toast=useToast()
const [Blog,setBlog]=useState({})

 
async function GetData(){
    
    try{
 axios.get(`${BaseUrl}/post/${ID}`).then((res)=>{
setBlog(res.data)

      }).catch((err)=>{
        toast({
          title:"Error in getting data from backend",
          status:"info",
          position:"top"
        })
      })

    }catch(err){
    console.log(err)
      toast({
        title:"Something Went Wrong",
        position:"top",
        status:"error"
      })
    }
  }

useEffect(()=>{
GetData()
},[])
console.log(Blog)

    return (
        <div>
           {Blog && <PostComponent data={Blog}/>}
        </div>
    );
}

export default Post;
