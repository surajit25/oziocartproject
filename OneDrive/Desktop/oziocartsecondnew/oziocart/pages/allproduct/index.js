import { useEffect, useState } from "react"
import Router from "next/router"

import { Container,Divider,Grid, Paper } from "@mui/material"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import server from "../api/apilink";

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Snackbar ,Stack} from "@mui/material";

import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

import { Box } from "@mui/system";


import ButtonGroup from '@mui/material/ButtonGroup';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { blueGrey, grey } from "@mui/material/colors";




function Allproduct(){

 const [Allproduct,setAllproduct] = useState([])
 const [loading,setLoading]= useState(true)

 const dispatch = useDispatch()

 useEffect(()=>{

    axios.post(`${server}/getallproduct`).then(res=>{

        setAllproduct(res.data)
        setLoading(false)

    })

 },[])

 const VisitPage=(item)=>{

    Router.push({pathname:`/product/${item.slug}/`,query:{color:item.color,size:item.size}})

 }


 
 const [carterror,setCartError] = useState(false)

 const  vertical='top'
 const horizontal='center'
 const [message,setMessage]  = useState('')


 
 
 const Addtocart =(item)=>{
          
  if(Cookies.get('user')){

      axios.post(`${server}/adedtocart`,{
          email:Cookies.get('user'),
          sku:item.sku
      }).then(res=>{

      
      dispatch({
          type:'Cart',
          payload:true
      })

      setCartError(!carterror)
      setMessage(<span >Successfully added to cart</span>)

      }).catch(er=>{

      })

  }else{

      setCartError(!carterror)
      setMessage(<span>You are not login</span>)
  }
 

}

const AddtoWishlist =(item)=>{
          
  if(Cookies.get('user')){

      axios.post(`${server}/addtowishlist`,{
          email:Cookies.get('user'),
          sku:item.sku
      }).then(res=>{

      
      dispatch({
          type:'Wishlist',
          payload:true
      })

      setCartError(!carterror)
      setMessage(<span className="text-success">Successfully added to Wishlist</span>)

      }).catch(er=>{

          
      setCartError(!carterror)
      setMessage(<span className="text-success">Already in wishlist</span>)


      })

  }else{

      setCartError(!carterror)
      setMessage(<span className="text-danger">You are not login</span>)
  }
 

}

const handleClose=()=>{

  setCartError(!carterror)
}

const VisitShop=(item)=>{

  Router.push({pathname:'/shop-now',query:{sku:item.sku}})
}

const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
};




    return(
        <>
           <Box sx={{marginTop:{lg:'60px',mb:'120px',sm:'120px',xs:'120px',xl:'60px'},overflow:"hidden",mb:1,p:2}}>

            <Box  sx={{display:{lg:"block",md:"none",xl:"block",sm:"none",xs:"none",mt:1,mb:1}}} >

              <CardMedia

              component={'img'}
              image = "/ban.jpg"

              height={'200'}

              />

            </Box>


  {loading?
  <Box sx={{display:'flex',justifyContent: 'center',alignItems: 'center',minHeight:"70vh",fontWeight:'600'}}>
                        
  loading...
  
  </Box>:
   

     <Grid container sx={{p:2}} spacing={1}>
       
       <Grid item xl={3} lg={3} md={12} sm={12} xs={12} >

         <Box sx={{display:{lg:"block",md:"none",xl:"block",sm:"none",xs:"none"}}}>

           <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Brand
                    </Typography>
                    
                    </AccordionSummary>
                    <AccordionDetails>

                        <Stack direction={'column'} spacing={1} >

                        <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}} >
                         GXN
                        </Typography>

                        <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         Iso Pure
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         One Science
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         Mussle tech
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         GNC
                        </Typography>

                        </Stack>

                 


                    </AccordionDetails>
           </Accordion>


                  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Category
                    </Typography>
                    
                    </AccordionSummary>
                    <AccordionDetails>

                        <Stack direction={'column'} spacing={1} >

                        <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}} >
                         Protein
                        </Typography>

                        <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         Gainer
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         Pre workout
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         Post Workout
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         Workout essentials
                        </Typography>

                        </Stack>

                 


                    </AccordionDetails>
                  </Accordion>


                  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Size
                    </Typography>
                    
                    </AccordionSummary>
                    <AccordionDetails>

                        <Stack direction={'column'} spacing={1} >

                        <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}} >
                         2 lbs
                        </Typography>

                        <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         2.2 lbs
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         4.4 lbs
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         6 lbs
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         8.4 lbs
                        </Typography>

                        </Stack>

                 


                    </AccordionDetails>
                  </Accordion>


                  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Flavour
                    </Typography>
                    
                    </AccordionSummary>
                    <AccordionDetails>

                        <Stack direction={'column'} spacing={1} >

                        <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}} >
                         Chocolate
                        </Typography>

                        <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         Milkshake
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         Bananna
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         Mango
                        </Typography>
                         <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         Fruit Punch
                        </Typography>

                        </Stack>

                 


                    </AccordionDetails>
                  </Accordion>


                  <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Price
                    </Typography>
                    
                    </AccordionSummary>
                    <AccordionDetails>

                        <Stack direction={'column'} spacing={1} >

                        <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}} >
                         Low to High
                        </Typography>

                        <Typography sx={{borderRadius:'50rem',border:'1px solid black',p:1}}>
                         High to Low
                        </Typography>
                       
                       

                        </Stack>

                 


                    </AccordionDetails>
                  </Accordion>

                  </Box>

       </Grid>

       <Grid item lg={9} xl={9} md={12} sm={12} xs={12}  >

         {/* <Box sx={{display:"flex",justifyContent:"center"}}>

         <Stack direction={'row'} spacing={2} sx={{mb:1,mt:1}}>
         <Typography sx={{borderColor:grey[500],borderRadius:"50rem",cursor:"pointer",border:'1px solid',p:1,fontWeight:"600"}} >Low to High</Typography>
         <Typography sx={{borderColor:grey[500],borderRadius:"50rem",cursor:"pointer",border:'1px solid',p:1,fontWeight:"600"}} >High to Low</Typography>
       
       </Stack>

         </Box> */}

    

       <Grid container spacing={1} >

  

{Allproduct.map(item=>{
    return(<Grid item lg={4} xl={4} sm={12} md={12} xs={12} key={item} sx={{mb:1}} >

        <Card >

          <Box sx={{position:'relative'}}  >

            <Box sx={{position:'absolute'}} className="cartshow">
             <Typography sx={{mb:1,display:"flex",justifyContent:"center",alignItems:"center",height:'30px',width:'30px',bgcolor:grey[500],borderRadius:"50%"}}> <LocalMallIcon onClick={()=>Addtocart(item)}  /></Typography>
              <Typography sx={{mb:1,display:"flex",justifyContent:"center",alignItems:"center",height:'30px',width:'30px',bgcolor:grey[500],borderRadius:"50%"}}><FavoriteBorderIcon onClick={()=>AddtoWishlist(item)} /></Typography>

            </Box>

          <CardMedia

          component="img"
          alt="green iguana"
          
          image={"https://oziocartimage.s3.amazonaws.com/media/"+item.proim1}
          style={{minHeight:'368px'}}
          className="col-12"
          onClick={()=>VisitPage(item)}
        />

          </Box>
     
        <CardContent>
          <Typography sx={{mb:1,fontWeight:'600'}}>
           {item.name} {item.size} {item.color}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           

            <Stack direction={'row'} spacing={1} >
              <Box>

                <Stack direction={'row'} spacing={1}>
                <Typography sx={{fontWeight:'600'}}>
                Price:
              </Typography>
              <Typography>
              <CurrencyRupeeIcon style={{fontSize:'13px'}} /><s>{item.sellingprice} </s>
              </Typography>
                </Stack>

              </Box>

              <Box>

          
              <Stack direction={'row'} spacing={1} >
              <Typography sx={{fontWeight:'600'}}>
                MRP:
              </Typography>
              <Typography>
              <CurrencyRupeeIcon style={{fontSize:'13px'}} /> {item.MRP}

              </Typography>
            </Stack>
           
                
              </Box>
              

            </Stack>


            <Stack direction={'row'} sx={{mb:1}} spacing={1}>
              <Box>

              <Stack sx={{mb:1}} direction={'row'} spacing={1}>
              <Typography sx={{fontWeight:"600"}}>Size:</Typography>
              <Typography>{item.size}</Typography>


              </Stack>

              </Box>

              <Box sx={{mb:1}}>

                <Stack direction={'row'} spacing={1}> 
                  <Typography sx={{fontWeight:'600'}}>

                      Quantity:
                  </Typography>

                  <Box>
                  <ButtonGroup variant="text" color="info" aria-label="outlined button group">
                  <Button>-</Button>
                  <Button>1</Button>
                  <Button>+</Button>
                </ButtonGroup>
                  </Box>

                </Stack>

             
                

              </Box>


            </Stack>


          

          
      
          

            <Stack direction={'row'} spacing={2} >
              <Button onClick={()=>MakeCart(item)} sx={{width:'50%',borderRadius:"50rem"}} variant="contained" color="warning" >
                Add to cart
              </Button>

              <Button onClick={()=>VisitShop(item)} sx={{width:'50%',borderRadius:'50rem'}} variant="contained" color="error" >
               Buy Now
              </Button>
            </Stack>

          </Typography>
        </CardContent>
       
       </Card>

       </Grid>

    )
})}

       </Grid>

       </Grid>

       </Grid>
 
    




}

    
    <Box sx={{display:{lg:"none",md:"block",xl:"none",sm:"block",xs:"block"},}} >

      <Paper sx={{position:'fixed',left:'0px',bottom:"0px",p:2,display:"flex",justifyContent:"space-evenly",p:2,width:"100%"}}>

        <Typography sx={{fontWeight:"600"}}>
          Filter
        </Typography>

         
        

        <Typography sx={{fontWeight:"600"}}>
          Sort
        </Typography>

      </Paper>

    </Box>



        
       <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={carterror}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
        autoHideDuration={3000}
        
        />


</Box>

        </>
    )
}


export default Allproduct