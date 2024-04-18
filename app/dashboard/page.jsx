import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options"
import { Button } from "@/components/ui/button"
import Link from "next/link";

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

export default async function Dashboard() {
  const session =  await getServerSession(options)

  const projects = await getProjects(session.acesstoken)

  return (
  <div style={{justifyContent:"center", display:"flex", alignItems:"center", alignContent:"center", height:"100vh", flexDirection:"column"}}>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl m-5">
            Hi {session.user.name}<br/>
    </h1>

    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight m-10 mt-5">
      {projects}
    </h3>
    
    <Button variant="outline" asChild style={{backgroundColor:"white", color:"black"}}>
    <Link href="/api/auth/signout" >Sign Out</Link>
    </Button>

    
  </div>
  )
}
