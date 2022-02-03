import { Container, Paper, Typography,Box,Stack,CardMedia,Grid} from "@mui/material";
import React, { useState } from "react";

import Carousel from 'react-multi-carousel';

import Image from "next/image";

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
      items: 1
    }
  };


export default function PartnarBrand(){
    var img1="/nasa.svg"
    var img2 = "/netflix.svg"
    var img3 = "/spotify.svg"
    var img4 = '/unity.svg'
    var img5 = '/shutterstack.svg'

    var x =[{id:1,image:img1,name:'Nasa'},{id:2,image:img2,name:"netflix"},{id:3,image:img3,name:'spotify'},{id:4,image:img4,name:'unity'},{id:5,image:img5,name:"shutterstack"}]

    const [Logo,setLogo] = useState(x)

    return(
        <React.Fragment>

            <Container sx={{mb:2}}>

            <Typography  sx={{fontWeight:'600',textAlign:'center',mt:1}} >Stock clearance</Typography>

        

            <Carousel
             infinite 
             responsive={responsive}
             
             removeArrowOnDeviceType={['mobile']}

             >
  
          {Logo.map(item=>{
              return(
                  <Paper key={item} onClick={()=>VisitPage(item)} sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:"center",mx:1,bgcolor:'black'}} >
                    
                      <CardMedia

                      component={'img'}

                      image = {item.image}

                      sx={{width:'50%'}}

                      height={100}

                      />

                      <Typography>
                              <small> This is decor{item.id}</small>
                      </Typography>
                      
                  </Paper>
              )
          })}


      </Carousel>

  
            </Container>

         
        </React.Fragment>
    )
}

