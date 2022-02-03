
import { Box } from "@mui/system"

import { Paper,Stack,Typography } from "@mui/material"

import { InputBase } from "@mui/material"

import { IconButton } from "@mui/material"

import CloseIcon from '@mui/icons-material/Close';

import DealOfDay from "../deal-of-the-day";


import {useState} from 'react'

export default function DesktopSearch(props){


  const [open5,setOpen5] = useState(false)


  const handleclose5=()=>{
    props.click()
  }


    return(<>
   
<Paper sx={{p:2,display:'flex',justifyContent:"center",alignItems:'center',width:'100%',borderRadius:'0px'}}  >
 
  <Box sx={{width:'50%'}} >



  <InputBase

sx={{width:'80%',borderRadius:'50rem',p:1}}

 placeholder="I'm Looking for..."
 inputProps={{ 'aria-label': "I'm looking for" }}
/>
<IconButton onClick={handleclose5} type="submit" sx={{ p: '10px' }} aria-label="search">
 <CloseIcon />
</IconButton>


  </Box>

</Paper>


<Box sx={{p:2,display:'flex',justifyContent:"center",alignItems:'center',width:'100%',borderRadius:'0px',mt:4}} >
 

  <Paper sx={{p:2,width:'95%'}} >
   <Typography sx={{fontWeight:"600",mb:1,textTransform:"uppercase"}} >Top searches</Typography>

   <Box sx={{width:'100%'}}>
    

    <Stack direction={'row'} spacing={2}>

    <Typography className='cursor' sx={{borderRadius:'50rem',textAlign:'center',border:'1px solid grey',p:1}} >Product under 500</Typography>
     <Typography className='cursor' sx={{borderRadius:'50rem',textAlign:'center',border:'1px solid grey',p:1}} >Havels product</Typography>
     <Typography className='cursor' sx={{borderRadius:'50rem',textAlign:'center',border:'1px solid grey',p:1}}>Best product of as of now</Typography>


    </Stack>

   </Box>


  <DealOfDay />

  </Paper>

</Box>


    </>)
}