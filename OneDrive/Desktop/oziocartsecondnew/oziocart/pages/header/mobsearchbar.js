import { Box } from "@mui/system";

import { Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';



export default function Mobilesearchbar(){


    return(<>

        <Paper sx={{display:{lg:'none',md:'block',sm:"block",xs:'block',xl:'none'}}} >
            <Box sx={{display:'flex',justifyContent:'center',alignItems:"center"}}>

            <InputBase  
         
            sx={{width:'95%',borderRadius:'50rem',p:1}}
            placeholder="I'm Looking for..."
            inputProps={{ 'aria-label': "I'm looking for" }}
            />
            <IconButton  type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
            </IconButton>

            </Box>
    

        </Paper>
    </>)
}