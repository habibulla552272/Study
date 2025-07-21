'use client'

import { getUser } from "@/FetchData/fetchdata";
import { useQuery } from "@tanstack/react-query";

interface user{
  name: string;
  id:number;
}

export default function Home() {
  const {data,isLoading,isError}=useQuery({
    queryKey:['users'],
    queryFn: getUser,
  })
  if(isError){
    return <h2>Error</h2>
  }
  if(isLoading){
    return <h2>loading....</h2>
  }
  
  return (
    <>
      <h2>hey bro</h2>
      {
        data?.map((item:user)=>{
          return(
            <h2 key={item.id}>{item.name}</h2>
          )
        })
      }
    </>
  );
}
