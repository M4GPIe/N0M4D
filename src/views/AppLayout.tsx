import { Stack } from "@mui/material"
import SideBar from "../components/SideBar"


const AppLayout = () => {
  return (
    <Stack sx={{
      minHeight: '100vh',
      backgroundColor:'gray',
      justifyContent:'center'
    }} >
      <SideBar/>
    </Stack>
  )
}

export default AppLayout
