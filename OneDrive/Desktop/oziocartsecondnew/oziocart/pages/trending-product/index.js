import { CardMedia, Container, Paper, Typography } from "@mui/material";
import Router  from "next/router";
import React, { useState } from "react";

import Carousel from 'react-multi-carousel';

import { Box } from "@mui/system";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


export default function Trending(){
    var img1="/clutches.jpeg"
    var img2 = "/men.png"
    var img3 = "/Light.jpeg"
    var x =[{id:1,image:img1},{id:2,image:img2},{id:3,image:img3},{id:4,image:img2}]

    const [product,setProduct] = useState(x)

    const VisitPage=(item)=>{

      Router.push(`/product/mens-wear/t-shirt`)
    }

    return(
        <React.Fragment>

            <Container>

                <Typography  sx={{fontWeight:'600',textAlign:'center',mt:1}} >Trending Now</Typography>

            <Carousel 
            infinite
             responsive={responsive}

             removeArrowOnDeviceType={['mobile']}


             >

               {product.map(item=>{
                   return(
                       <Box key={item} onClick={()=>VisitPage(item)} sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:"center",mx:1,mb:1}} >
                         
                           <CardMedia

                           component={'img'}

                           image = {item.image}

                           sx={{width:'50%'}}

                           />

                           <Typography>
                                   <small> This is decor{item.id}</small>
                           </Typography>
                           
                       </Box>
                   )
               })}
            

            </Carousel>



            </Container>

         
        </React.Fragment>
    )
}

