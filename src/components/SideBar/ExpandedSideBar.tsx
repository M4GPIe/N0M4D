import { List, ListItemButton, Stack, Typography } from '@mui/material'
import { sideBarItems } from './items'


const ExpandedSideBar = () => {
  return (
    <Stack sx={{backgroundColor: 'purple',display: 'flex', height: '95%', borderRadius: '15px', ml: '15px', px: 1, py: 2 }}>
        <List>
      {
        sideBarItems.map(item=>{

            //const Icon = item.icon as any
            
            return(
                <ListItemButton sx={{gap: 1}}>
                    
                    <Typography>{item.name}</Typography>
                </ListItemButton>
            )})
      }
      </List>
    </Stack>
  )
}

export default ExpandedSideBar
