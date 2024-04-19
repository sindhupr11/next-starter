"use client"
import { Button } from "@/components/ui/button"
import { useEarthoOne } from '@eartho/one-client-react';

async function getProjects(acesstoken) {
  
  const res = await fetch(`http://localhost:3000/backend/python`,
  {
    headers: {
      Authorization: `Bearer ${acesstoken}`,
    },
    cache: 'no-store'
  })
  const projects = await res.json()
  console.log(projects)
  return projects.message
}

export default function Dashboard() {
  const {
    isLoading,
    isConnected,
    error,
    user,
    connectWithPopup,
    logout,
  } = useEarthoOne();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isConnected) {

  return (
  <div style={{justifyContent:"center", display:"flex", alignItems:"center", alignContent:"center", height:"100vh", flexDirection:"column"}}>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl m-5">
            Hi {user.displayName}<br/>
    </h1>
    
    <Button variant="outline" style={{backgroundColor:"white", color:"black"}} onClick={() => logout({ returnTo: "/dashboard" })}>
    Sign Out
    </Button>

    
  </div>
  )
} else {
  return (
    <div style={{justifyContent:"center", display:"flex", alignItems:"center", alignContent:"center", height:"100vh", flexDirection:"column"}}>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl m-5">
            Sign In<br/>
    </h1>
    
    <Button variant="outline" style={{backgroundColor:"white", color:"black"}} onClick={() => connectWithPopup({ accessId: "UO2B7JQKjebPAQB73x5k" })}>
    Sign In
    </Button>

    
  </div>
  )
}
}
