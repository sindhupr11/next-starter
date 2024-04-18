import { Container, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options"
import { Button } from "@/components/ui/button"
import Link from "next/link";
export default async function Dashboard() {
  const session =  await getServerSession(options)
  
  return (
  <Container sx={{justifyContent:"center", display:"flex", alignItems:"center", alignContent:"center", height:"100vh", flexDirection:"column"}}>
    <Typography component="h1" variant="h2" sx={{paddingBottom:"2em"}}>
            Hi {session.user.name}<br/>
    </Typography>
    
    <Button variant="outline" asChild style={{backgroundColor:"white", color:"black"}}>
    <Link href="/api/auth/signout" >Sign Out</Link>
    </Button>

    
  </Container>
  )
}
