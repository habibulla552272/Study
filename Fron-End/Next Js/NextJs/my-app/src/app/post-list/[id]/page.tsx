import { log } from 'console';
import React from 'react'

const page = async ({params}) => {
    const {id}=await params;

    const res =await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data= await res.json()
   
  return (
    <div>
      this is bussnes
      
            <h2>{data.name}</h2>
          
    
    </div>
  )
}

export async function generateStaticParams() {
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const posts= await res.json();

    return posts.map(post=>({
        id:String(post.id),
    }))
}

export default page
