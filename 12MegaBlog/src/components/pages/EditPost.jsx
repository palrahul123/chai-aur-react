import React,{useState,useEffect} from 'react'
import {Container,PostForm} from '../index'
import service from '../../appwrite/config'
import { useParams,useNavigate } from 'react-router-dom';
function EditPost() {
    const {posts,setPost}=useState([]);
    const {slug}=useParams();  
    const navigate=useNavigate();
    
    useEffect(()=>{

        if(slug){
            service.getPosts(slug).then((post)=>{
                if(post){
                    setPost(post);
                }
            })
        }
        else{
            navigate("/")
        }
    },[navigate,slug]);
    
  return (
    <div className='py-8'>
        <Container>
            <PostForm post={posts}></PostForm>
        </Container>
    </div>
  )
}

export default EditPost