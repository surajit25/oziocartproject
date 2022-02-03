import { Container, Paper, TextField, Typography,Stack ,Grid, Button} from "@mui/material";
import { Box } from "@mui/system";

import EmailIcon from '@mui/icons-material/Email';
import Api from "../api/axioapi";

import {useState} from 'react'

import { Snackbar } from "@mui/material";
import server from '../api/apilink'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



import CustomInput from "../inputfield";



export default function MainFooter(){


    const [email,setEmail] = useState("")

    const [emailerror,setEmailerror]=useState("")
    

    const ChangeInput=(e)=>{
        setEmail(e)
    }


    const [subsnack,setsubsnack] = useState(false)

    const  vertical='top'
    const horizontal='center'
    const [message,setMessage]  = useState('')
   
   
    



    const Subscribeus=()=>{


         if(email==""){

            setEmailerror("Email not be null")

         }else if(email.includes("@")==false || email.includes(".")==false){
             setEmailerror("Email is not valid")
         }else{

            Api.post(`${server}/subscribeus`,{email:email}).then(res=>{

                setsubsnack(true)
                setMessage("Thanks for subscribing with us.")

            }).catch(er=>{
                setsubsnack(true)
                setMessage("Thanks for attempt, You are already subscribed.")

            })
         }


        
    }

    
const handleClose=()=>{

    setsubsnack(!subsnack)

    setEmailerror("")
    setEmail("")
  }
  



    return(
        <>
        <Box  sx={{p:{lg:3,md:2,xl:3,sm:2,xs:2},width:'100%',backgroundColor:'#F8F9FA'}} >

            <Box sx={{width:'100%',display:'flex',justifyContent:"center",alignItems:'center',mt:1,mb:2}} >
              <Stack direction={'row'} spacing={3}>

                    <Box  ><FacebookIcon /></Box>
                    <Box  ><InstagramIcon /></Box>
                    <Box  ><LinkedInIcon /></Box>
                    <Box ><TwitterIcon /></Box>
                   
              </Stack>

            </Box>

            <Container>

                <Grid container  >

                    <Grid item lg={6} sm={12} xl={6} xs={12} md={12} >

                      
                        <Grid container sx={{width:'100%'}} spacing={3}>

                            <Grid item lg={6} md={6} sm={6} xs={6} xl={6}>

                                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}> 

                                <Stack direction={'column'} spacing={1}>

                            <Typography sx={{mb:2,textTransform:'uppercase',fontWeight:'600'}} > Shop</Typography>

                                <Typography sx={{mb:1}}  className=' mainfooter'>Kitchenware</Typography>
                                <Typography sx={{mb:1}}  className=' mainfooter' >Home decore</Typography>
                                <Typography  sx={{mb:1}} className=' mainfooter' >Men wear</Typography>
                                <Typography  sx={{mb:1}} className=' mainfooter' >Women Wear</Typography>
                                <Typography  sx={{mb:4}} className='mainfooter' >Furniture & lighting</Typography>


                            </Stack>

                                </Box>

                               

                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={6} xl={6}>

                                
                            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                            
                            <Stack direction={'column'} spacing={1} >

                        <Typography sx={{mb:2,textTransform:'uppercase',fontWeight:'600'}} > Support</Typography>

                        <Typography sx={{mb:1}} className='mainfooter '>Kitchenware</Typography>
                        <Typography sx={{mb:1}} className=' mainfooter ' >Home decore</Typography>
                        <Typography sx={{mb:1}} className=' mainfooter ' >Men wear</Typography>
                        <Typography sx={{mb:1}} className=' mainfooter ' >Women Wear</Typography>
                        <Typography sx={{mb:4}} className=' mainfooter ' >Furniture & lighting</Typography>


                        </Stack>
                            </Box>


                            </Grid>

                        </Grid>

                        
                    </Grid> 

                    <Grid item lg={6} sm={12} xl={6} xs={12} md={12} >

                       <Grid container sx={{width:'100%'}} spacing={3}>

                           <Grid item  lg={6} md={6} xs={6} sm={6} xl={6}>

                                         
                            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>

                        <Stack direction={'column'} spacing={1} >
                        <Typography sx={{mb:2,textTransform:'uppercase',fontWeight:'600'}} >Contact</Typography>
                        
                        <Typography sx={{mb:1}} className=' mainfooter'>Kitchenware</Typography>
                        <Typography sx={{mb:1}} className=' mainfooter' >Home decore</Typography>
                        <Typography sx={{mb:1}} className=' mainfooter' >Men wear</Typography>
                        <Typography sx={{mb:1}} className=' mainfooter' >Women Wear</Typography>
                        <Typography sx={{mb:4}} className=' mainfooter' >Furniture & lighting</Typography>


                            </Stack> 
                       
                
                           </Box>

                           </Grid>

                           <Grid item lg={6} md={6} xs={6} sm={6} xl={6} >

                                         
                            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                         
                           <Stack direction={'column'} sx={{display:{lg:'block',md:'none',sm:'none',xs:'none',xl:'block'}}} spacing={1}>

                           <Typography sx={{mb:2,textTransform:'uppercase',fontWeight:'600'}} >Be the first to know</Typography>

                        
                                {/* <Box sx={{display:'flex',justifyContent:"center",alignItems:'center'}} >
                                    <EmailIcon sx={{mt:2}} />
                                    <TextField

                                    variant='standard'

                                    label="Email"

                                    />
                                </Box> */}

                                <CustomInput placeholder="Enter Your Email" />

                            <Box>
                                <Button  sx={{bgcolor:'black',color:'white'}} >Submit</Button>
                            </Box>


                            

                           </Stack>

                         

                            </Box>

                           </Grid>

                       </Grid>

                    </Grid>

                </Grid>

            </Container>

        </Box>
        </>
    )
}

