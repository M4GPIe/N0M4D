import { Stack } from "@mui/material"
import ExpandedSideBar from "./ExpandedSideBar"


const SideBar = () => {
  return (
    <Stack sx={{
      height: '100%',
      width:'400px',
      position: 'absolute',   
      justifyContent:'center',
      zIndex: 2,    
    }}>
      <ExpandedSideBar/>
    </Stack>
  )
}

export default SideBar
