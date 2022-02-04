

  import {  CardMedia, Container, Typography,Stack ,Box, Button} from "@mui/material";
  import Router  from "next/router";
  import React, { useEffect, useState } from "react";
  
  import Carousel from 'react-multi-carousel';

  import Api from '../api/axioapi'
import server from "../api/apilink";
import { blueGrey } from "@mui/material/colors";

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

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
  
      const [product,setProduct] = useState([])

      useEffect(()=>{
        
        Api.post(`${server}/trendingproduct`).then(res=>{
          
          setProduct(res.data)
        })
      },[])
  
      const VisitPage=(item)=>{
  
        Router.push({pathname:`/product/${item.slug.toLowerCase()}`,query:{color:item.color,size:item.size}})
      }
  
      return(
          <React.Fragment>
  
              <Container>
  
                  <Typography  sx={{fontWeight:'600',textAlign:'center',mt:1}} >Trending Now</Typography>
  
              <Carousel infinite
               responsive={responsive}
               
             removeArrowOnDeviceType={['mobile']}

               >
  
                 {product.map(item=>{
                     return(
                         <Box key={item} onClick={()=>VisitPage(item)} sx={{mx:1,mb:1,bgcolor:"#f1f8e9"}} >
                           
                             <CardMedia
  
                             component={'img'}
  
                             image = {"https://oziocartimage.s3.amazonaws.com/media/"+item.proim1}
  
                             sx={{width:'100%'}}
  
                             />

                           

                             <Stack sx={{p:2}} direction={'column'}>

                            

                               <Box component="div" sx={{ textOverflow: 'ellipsis',whiteSpace:"nowrap",overflow:"hidden",fontWeight:"600",textTransform:"capitalize" }}>
                               {item.name}
                                </Box>

                               <Typography>{item.color} {item.size}</Typography>
                               <Typography sx={{fontSize:"25px",fontWeight:"600"}}><CurrencyRupeeIcon sx={{fontSize:"18px"}} /> {item.sellingprice}</Typography>

                             </Stack>

                         
                           
                             
                         </Box>
                     )
                 })}
              
  
              </Carousel>
  
  
  
              </Container>
  
           
          </React.Fragment>
      )
  }
  
  


