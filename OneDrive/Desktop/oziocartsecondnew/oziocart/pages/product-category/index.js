import { Card, Container, Grid, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";



import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function ProductCategory(props){

    const v = [1,2,3,4,6,5,8,7]

    const [Product,setProduct] = useState([])

    useEffect(()=>{
        setProduct(v)
    },[])


    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  

    return(
        <>

        <Container sx={{marginTop:{lg:'60px',md:'120px',sm:'120px',xs:'120px',xl:'60px'}}} >
           
           <Grid container spacing={2} sx={{mt:4}} >

               <Grid item sm={12} md={12} lg={3} xl={3} xs={12} >

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



               </Grid>

               <Grid item sm={12} md={12} lg={9} xl={9} xs={12} >

                   <Grid container spacing={1} >

                   {Product.map(item=>{

                       return(
                           <Grid key={item} item sx={{mb:1}} sm={6} md={6} lg={4} xl={4} xs={6} >

                            <Card >
                            <CardMedia
                                component="img"
                                sx={{minHeight:"200px"}}
                                image="/men.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>

                                

                                    <Grid container spacing={1} >

                                        <Grid item  sm={12} md={12} lg={6} xl={6} xs={12}  >
                                        <Button variant="contained" sx={{bgcolor:'darkblue',color:'white',width:'100%'}}  size="small">Buy Now</Button>


                                        </Grid>

                                        <Grid item  sm={12} md={12} lg={6} xl={6} xs={12}  >

                                        <Button variant='contained'  sx={{bgcolor:'darkblue',color:'white',width:"100%"}} size="small">Add to cart</Button>


                                        </Grid>

                                    </Grid>

                            </CardActions>
                            </Card>

                            </Grid>
                       )
                   })}
                   </Grid>

               </Grid>

           </Grid>


           <Paper sx={{p:2,mb:2}} >

               <Typography>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!
               </Typography>

           </Paper>




        </Container>



        </>
    )
}