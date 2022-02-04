import { Button, Card, CardMedia, Container, Divider, Grid, ListItem, Typography } from "@mui/material"

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import ShareIcon from '@mui/icons-material/Share';

import server from "../api/apilink";

import Api from "../api/axioapi";

import { useEffect, useState } from "react";

import Head from 'next/head'

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Image from "next/image";
import Router, { useRouter }  from "next/router";
import axios from "axios";

import Cookies from 'js-cookie'

import { Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

import ProductReview from "../review-section";

import Question from "../Question-answer";

import RelatedProducts from "../related-products";

import { Stack } from "@mui/material";

import { grey } from "@mui/material/colors";

function ProductPage(props){

    const [Product,setProduct] =useState([])
    const [defaultsize,setDefaultsize]= useState()
    const [defaultcolor,setDefaultColor] = useState()
    const [defaultimage,setDefaultimage] = useState()

    const [ProductCommon,setProductCommon] = useState(props.common[0])

    const [size,setSize] =useState([])

    const [color,setColor] =useState([])

    const dispatch = useDispatch()

    const router = useRouter()

   
    useEffect(()=>{
 



        Api.post(`${server}/getproductbyslug`,{slug:props.slug}).then(res=>{

            setProduct(res.data)

            let product = res.data
            let tempsize = ''

            if(router.query){
                setDefaultColor(router.query.color)
                setDefaultsize(router.query.size)
                tempsize = router.query.size

            }else{
                setDefaultColor(res.data[0].color)
                setDefaultsize(res.data[0].size)
                tempsize = res.data[0].size
            }

            let color = []
            let size = []

            for(var i=0;i<res.data.length;i++){

                    if(size.indexOf(res.data[i].size)==-1){
                       size.push(res.data[i].size)
                    }

                    if(tempsize==res.data[i].size && color.indexOf(res.data[i].color)==-1){
                        color.push(res.data[i].color)
                    }
            }

            setColor(color)
            setSize(size)
            setDefaultimage(res.data[0].proim1)


        })


    },[])


    const ImageChange=(id)=>{

        setDefaultimage(id)
    }

    const Changesize=(size)=>{

        var product = Product
        var color = []

      
        for(var i=0;i<product.length;i++){
               if(product[i].size==size){
                     color.push(product[i].color)
               }  
        }

        setDefaultsize(size)
        setDefaultColor(color[0])
        setColor(color)
    }

    const ChangeColor=(color)=>{

    
        setDefaultColor(color)
      
      
    }

    const MakePurchase=(item)=>{

        Router.push({pathname:"/shop-now",query:{sku:item.sku}})
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
            setMessage(<span className="text-success">Successfully added to cart</span>)
    
            }).catch(er=>{
    
            })

        }else{

            setCartError(!carterror)
            setMessage(<span className="text-danger">You are not login</span>)
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


    return(
        <>

        <Box sx={{marginTop:{lg:'30px',mb:'120px',sm:'120px',xs:'120px',xl:'30px'},bgcolor:"#cfd8dc",p:{lg:1}}}>

        <Head>

            <meta name="description" content={ProductCommon.seometa} />
            <title>{ProductCommon.seotitle}</title>
            <meta name="keywords" content={ProductCommon.seokeywords} />

        </Head>
       
            <Container sx={{mt:5}}>

                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:1}} >
                    
                    <Grid container spacing={2} >

                        <Grid item sm={12} md={12} lg={6} xl={6} xs={12} >

                            <Box sx={{position:"sticky",top:'30px',marginTop:'10px'}}>

                           <Paper sx={{p:1,}}>

                            <Stack direction={"row"}  >
                            
                            <Box sx={{width:'20%'}} >
                                    
                                    {Product.map(item=>{
        
                                            if(item.size==defaultsize&&item.color==defaultcolor){
                                            return(
                                            <Stack key={item.id} direction={"column"} spacing={1} >
        
        
                                            
                                        <CardMedia
                                            component={'img'}
        
                                            onMouseEnter={()=>ImageChange(item.proim1)}
        
                                            image ={"https://oziocartimage.s3.amazonaws.com/media/"+item.proim1}
        
                                            sx={{width:'90%',border:defaultimage==item.proim1?"2px solid green":'1px solid black',p:1}}
        
                                            />
        
        
        
                                            
                                            <CardMedia
                                            component={'img'}
        
                                            onMouseEnter={()=>ImageChange(item.proim2)}
        
                                            image ={"https://oziocartimage.s3.amazonaws.com/media/"+item.proim2}
        
                                            sx={{width:'90%',border:defaultimage==item.proim2?"2px solid green":'1px solid black',p:1}}
        
                                            />
        
        
                                            
                                        <CardMedia
                                            component={'img'}
        
                                            onMouseEnter={()=>ImageChange(item.proim3)}
        
                                            image ={"https://oziocartimage.s3.amazonaws.com/media/"+item.proim3} 
                                            sx={{width:'90%',border:defaultimage==item.proim3?"2px solid green":'1px solid black',p:1}}
        
        
                                            />
        
        
                                            
                                          <CardMedia
                                            component={'img'}
        
                                            onMouseEnter={()=>ImageChange(item.proim4)}
        
                                            image ={"https://oziocartimage.s3.amazonaws.com/media/"+item.proim4} 
                                            sx={{width:'90%',border:defaultimage==item.proim4?"2px solid green":'1px solid black',p:1}}
        
        
                                            />
        
        
                                            </Stack>
        
                                            )
        
                                            }
        
                                            })}
    
                                 </Box>

                                <Box sx={{width:"80%"}} > 

                                <Paper  >

                                <Typography sx={{position:'absolute',right:'20px',top:'10px'}} ><ShareIcon /></Typography>


                                <CardMedia

                                component={'img'}

                                image={"https://oziocartimage.s3.amazonaws.com/media/"+defaultimage} 

                                sx={{width:'100%'}}

                                />


                                </Paper>

                               
                                </Box>

                            </Stack>

                            </Paper>

                            <Box sx={{mt:1,display:{lg:"block",md:"none",sm:"none",xl:"block",xs:"none"}}}>
                                    {Product.map(item=>{

                                        if(item.stock && item.color==defaultcolor && item.size==defaultsize){

                                        return(

                                            
                                            <Stack spacing={2} direction={'row'} >

                                        <Button color='warning' onClick={()=>Addtocart(item)} sx={{width:'50%'}}  variant="contained">
                                        Add to cart
                                            </Button>

                                            <Button color="error" sx={{width:'50%'}} onClick={()=>MakePurchase(item)} variant="contained">
                                                Shop Now
                                            </Button>

                                        

                                            </Stack>

                                        )

                                        }

                                    })}
                              
                                  </Box>

                            </Box>

                   


                        </Grid>


                         <Grid  item sm={12} md={12} lg={6} xl={6} xs={12}  >

                        <Box>
                             {Product.map(item=>{

                                if(item.size==defaultsize&&item.color==defaultcolor){
                            
                                return(<Box sx={{position:'relative'}} >

                                    <Typography sx={{position:'absolute',right:'20px',top:'10px'}}   onClick={()=>AddtoWishlist(item)} ><FavoriteBorderIcon /> </Typography>

                                    <Typography sx={{fontWeight:'600',fontSize:"28px"}}> {item.name} {defaultcolor} {defaultsize}</Typography>

                                    {/* <Stack direction={'row'} spacing={1} >
                                        <Typography sx={{fontWeight:'600'}}>Stock:</Typography>
                                        <Typography sx={{color:item.stock?'green':"red"}} >{item.stock?'In Stock':'Out of Stock'}</Typography>
                                    </Stack>

                                    <Stack direction={'row'} spacing={1} >
                                        <Typography sx={{fontWeight:'600'}}>Sku:</Typography>
                                        <Typography >
                                        {item.sku}
                                        </Typography>
                                    </Stack> */}

                                    
                                    <Stack direction={'row'} spacing={1} >
                                        
                                        <Typography sx={{fontSize:"25px",fontWeight:"600"}} >
                                        {/* <CurrencyRupeeIcon style={{fontSize:'15px'}} /> */}
                                        Rs.
                                        {item.sellingprice}
                                        </Typography>

                                        <Typography sx={{fontSize:'20px'}}>                    
                                        <s>Rs.{item.MRP}</s>
                                        </Typography>
                                    </Stack>


                                    <Stack direction={'row'} spacing={1} >
                                        <Typography sx={{fontWeight:'600'}}>You Save:</Typography>
                                        <Typography>
                                            {Math.round(item.MRP-item.sellingprice)}
                                        </Typography>
                                        <Typography >

                                        <CurrencyRupeeIcon style={{fontSize:'15px'}} />
                                        {Math.round(((item.MRP-item.sellingprice)*100)/100)} %
                                        </Typography>
                                    </Stack>



                                    </Box>

                                )

                        }
                            })}
                        </Box>

  

                    <Typography sx={{mt:1,textTransform:'uppercase',fontWeight:'600'}}>Size:</Typography>
                    <Grid container spacing={1} >
                    
                        {size.map(item=>{
                            return(
                            
                                <Grid key={item} item sm={4} md={4} lg={3} xl={3} xs={4}   >

                                    <Typography onClick={()=>Changesize(item)}  sx={{display:'flex',cursor:'pointer',borderRadius:'50rem',justifyContent:'center',alignItems:'center',p:1,border:defaultsize==item?'1px solid green':'1px solid black'}} > 
                                                        {item}
                                                    
                                    </Typography>

                                
                                </Grid>
                            )
                        })}
                        
                    </Grid>

                    <Typography sx={{mt:1,textTransform:'uppercase',fontWeight:"600"}}>Color:</Typography>
                    <Grid container spacing={1} >
                
                        {color.map(item=>{
                            return(
                                <Grid key={item} item sm={6} md={6} lg={3} xl={3} xs={6}  >

                                <Typography onClick={()=>ChangeColor(item)} sx={{display:'flex',cursor:'pointer',borderRadius:'50rem',justifyContent:'center',alignItems:'center',p:1,border:defaultcolor==item?'1px solid green':'1px solid black'}} > 
                                    {item}
                                
                                </Typography>

                                </Grid>

                            )
                        })}
                    </Grid>

                    <Box >
                    <Typography sx={{fontWeight:'600',mb:1}}>
                        Higlights:
                    </Typography>

                    <Typography  sx={{mb:0}} >

                <Box sx={{lineHeight:'20px'}}  dangerouslySetInnerHTML={{__html:ProductCommon.highlights}} />
                                
                </Typography>

                    </Box>


        




                         </Grid>


                    </Grid>


                </Box>

              



            <Divider sx={{m:3}} />

        

           
            <Typography sx={{textAlign:'center',fontWeight:'600',mb:1}} >Product Description</Typography>
           
             <Typography  sx={{mb:1}} >
                <div  dangerouslySetInnerHTML={{__html:ProductCommon.description}} />
               
             </Typography>

             <Box sx={{width:'100%',mb:1}} >
                
                 <Card  sx={{p:1}}  >
                   
                   <CardMedia
                       component="img"
                      
                       image={"https://oziocartimage.s3.amazonaws.com/media/"+ProductCommon.image1}
                       alt="green iguana"
                   />
               
            </Card>
             </Box>

             

             <Box>
                 
                 <Typography sx={{textAlign:'center',fontWeight:'600',mb:1}} >Material and Fabrics</Typography>
           

                 <Typography>
                     <div dangerouslySetInnerHTML={{__html:ProductCommon.materials}} />
                    
                 </Typography>

             </Box>

             <Box sx={{width:"100%"}}>

             <Grid sx={{width:'100%'}} container spacing={1} >

                 <Grid item sm={12} md={12} lg={6} xl={6} xs={12} >

                     <Card  sx={{p:1}}  >
                   
                            <CardMedia
                                component="img"
                               
                                image={"https://oziocartimage.s3.amazonaws.com/media/"+ProductCommon.image2}
                                alt="green iguana"
                            />
                        
                     </Card>




                 </Grid>

                 <Grid item sm={12} md={12} lg={6} xl={6} xs={12} >

                  <Card sx={{p:1}} >
                      

                            <CardMedia
                                component="img"
                              
                                image={"https://oziocartimage.s3.amazonaws.com/media/"+ProductCommon.image3}
                                alt="green iguana"
                            />
                        
                     </Card>

                </Grid>

             </Grid>

             </Box>


           
           

            </Container>

            <Box sx={{width:'100%'}}>
              

              <RelatedProducts />

          </Box>

          <Box sx={{width:'100%'}}>
              <Question />

          </Box>

          <Box sx={{width:'100%'}}>

         <ProductReview />

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

     <Box sx={{display:{lg:'none',md:"block",xs:"block",sm:"block",xl:"none"},zIndex:"300"}} >

<Paper sx={{position:'fixed',left:'0px',bottom:"0px",p:2,width:"100%",p:2}} >
{Product.map(item=>{

    if(item.stock && item.color==defaultcolor && item.size==defaultsize){

    return(

        
        <Stack spacing={2} direction={'row'} >

    <Button color='warning' onClick={()=>Addtocart(item)} sx={{width:'50%'}}  variant="contained">
    Add to cart
        </Button>

        <Button color="error" sx={{width:'50%'}} onClick={()=>MakePurchase(item)} variant="contained">
            Shop Now
        </Button>



        </Stack>

    )

    }

    })}

</Paper>

</Box>

       
      
        </>
    )
}


// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//      const res = await Api.post(`${server}/allproductcommonsection`).then(res=>{return res.data})

//     // Get the paths we want to pre-render based on posts
   

//     const paths =res.map((item) => ({
//       params: {slug:item.slug },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//   }
  
  // This also gets called at build time


//   export async function getStaticProps({ params }) {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     // const res = await fetch(`https://.../posts/${params.id}`)
//     // const post = await res.json()

//     const {slug} = params

//     // const res = await Api.post(`${server}/getproductbyslug`,{slug:slug}).then(res=>{return res.data})
   
//     const res2 = await Api.post(`${server}/productcommonsectionbyslug`,{slug:slug}).then(res=>{return res.data})
    
  
//     // Pass post data to the page via props
//     return { props: {common:res2,slug:slug } }
//   }


  export async function  getServerSideProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    // const res = await fetch(`https://.../posts/${params.id}`)
    // const post = await res.json()

    const {slug} = params

    // const res = await Api.post(`${server}/getproductbyslug`,{slug:slug}).then(res=>{return res.data})
   
    const res2 = await Api.post(`${server}/productcommonsectionbyslug`,{slug:slug}).then(res=>{return res.data})
    
  
    // Pass post data to the page via props
    return { props: {common:res2,slug:slug } }
  }
  
  

//   export async function getServerSideProps({params}) {

   

//     const {slug} = params


//     const res = await Api.post(`${server}/allproductcommonsection`).then(res=>{return res.data})

//     // const res = Api.post(`${server}/getproductbyslug`,{slug:slug})
   
//     // console.log(res)

//     // Pass post data to the page via props

//     return {props:{slug:slug,data:res} }


//   }

export default ProductPage