import { Button, Container, Skeleton, Typography,CardMedia,Card } from "@mui/material"
import axios from "axios"

import Router from "next/router"
import { useEffect, useState } from "react"
import { Carousel } from 'react-responsive-carousel';

import server from "../api/apilink"
import Api from "../api/axioapi"

import { Box } from "@mui/system";

function FirstBanner(){

    const [Banner,setBanner] = useState([])
    const [loading,setLoading] =useState(true)

    useEffect(()=>{

        Api.post(`${server}/getbanner`).then(res=>{

            setBanner(res.data)
            setLoading(false)

        }).catch(er=>{

        })

    },[])

    const VisitProduct=(id)=>{
        Router.push(`/${id}`)
    }

    return(
        <Box sx={{marginTop:{lg:'60px',mb:'120px',sm:'120px',xs:'120px',xl:'60px'},overflow:"hidden",mb:1,}}>

        {loading?<Skeleton sx={{width:'100%'}} animation='wave' height={477}  />:

             <Carousel 

             showArrows
             showIndicators
             showThumbs={false}
              >
            

                 {Banner.map(item=>{

                     return( 
                        <Card key={item.id} >

                            <CardMedia
                            component={'img'}

                            image ={'https://oziocartimage.s3.amazonaws.com/media/'+item.image}

                            />
            
            
        
                    </Card>
                     )

                 })}

                
           
                
            
            </Carousel>

        }



        </Box>
    )
}

export default FirstBanner