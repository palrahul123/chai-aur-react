import React from 'react'
import service from '../../appwrite/config'
import{Container, PostCard} from '../index'
import { useState,useEffect } from 'react'

function AllPost() {
    const {posts,setPost}=useState([]);  
    useEffect(()=>{
        service.getPosts([]).then((post)=>{
            if(post){
                setPost(post.documents);
            }
        })
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {
                     posts?.map((post)=>{
                        <div key={post.$id}>
                            <PostCard  post={post} />   
                        </div>
                         
                     })
                }
            </div>
        
    </Container>
    </div>
    
  )
}

export default AllPost