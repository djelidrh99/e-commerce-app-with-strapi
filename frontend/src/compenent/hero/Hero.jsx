import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import Button from '@mui/material/Button';
import ManImg from '../../../public/MainImg/Man.jpg'
import WomenImg from '../../../public/MainImg/Woman.jpg'
import desktopImg from '../../../public/MainImg/banner-16.jpg'
import summerImg from '../../../public/MainImg/banner-17.jpg'
import { useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import SubMain from "./SubMain";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './pagination.css'






export default function Hero() {
  const theme = useTheme();
  return (
    <Box>
      <Container maxWidth="lg" sx={{py:"20px",backgroundColor: theme.palette.myBg.main}}>
        <Box  sx={{display:"flex",gap:"10px"}} component="section">

          <Swiper
           modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="flex-1"
      loop 
    >
      <SwiperSlide className="hover:cursor-grab active:cursor-grabbing">
      <Box sx={{backgroundColor:"#fefaf1"}} className="flex-1 relative !h-full" component="section" >
            <img className="w-full h-full hidden md:block" src={ManImg} alt="img" />
            <Box className="text-center pt-20 top-0 pb-8 md:absolute  left-[10%] z-50 !text-black" component="section">
            <Typography variant="h5" gutterBottom sx={{fontWeight:500}}  >LIFESTYLE COLLECTION</Typography>
          <Typography variant="h3" gutterBottom  sx={{fontWeight:"bold"}}>MEN</Typography>
          <Typography variant="h5" gutterBottom  sx={{fontWeight:500}} >SALE UP TO <span className="text-red-500">30% OF</span></Typography>  
          <Typography variant="body1" gutterBottom  >Get Free Shipping on orders over $99.00</Typography>  
          <Button sx={{backgroundColor:"#121212b5","&:hover":{backgroundColor:"rgb(0 0 0)"},color:'white',borderRadius:"0px",width:"150px",marginTop:"30px"}} variant="contained">Shop Now</Button>

            </Box>
          
          </Box>
      </SwiperSlide>
      <SwiperSlide  className="hover:cursor-grab active:cursor-grabbing">
      <Box sx={{backgroundColor:"#fefaf1"}} className="flex-1 relative !h-full" component="section" >
            <img className="w-full h-full hidden md:block" src={WomenImg} alt="img" />
            <Box className="text-center pt-20 top-0 pb-8 md:absolute  left-[10%] z-50 !text-black" component="section">
            <Typography variant="h5" gutterBottom sx={{fontWeight:500}}  >LIFESTYLE COLLECTION</Typography>
          <Typography variant="h3" gutterBottom  sx={{fontWeight:"bold"}}>WOMEN</Typography>
          <Typography variant="h5" gutterBottom  sx={{fontWeight:500}} >SALE UP TO <span className="text-red-500">30% OF</span></Typography>  
          <Typography variant="body1" gutterBottom  >Get Free Shipping on orders over $99.00</Typography>  
          <Button sx={{backgroundColor:"#121212b5","&:hover":{backgroundColor:"rgb(0 0 0)"},color:'white',borderRadius:"0px",width:"150px",marginTop:"30px"}} variant="contained">Shop Now</Button>

            </Box>
          
          </Box>
      </SwiperSlide>
      
      ...
    </Swiper>
          
          
          
          

          <Box className="hidden lmd:!flex   basis-72 flex-col gap-[10px]" component="section">
          <Box className="relative basis-1/2  " component="section">
            <img className="h-full" src={summerImg} alt="img" />
            <Box className="absolute top-5 left-5 z-50 !text-black" component="section">
            <Typography variant="h6" gutterBottom>NEW ARRIVALS</Typography>
            <Typography variant="h6"  sx={{fontWeight:"bold"}} gutterBottom>SUMMER <br/> SALE 20% OFF</Typography>
            <Button variant="text" sx={{color:"grey" , "&:hover":{color:"rgb(239 68 68)"}}}>shop now <ArrowRightAltOutlinedIcon/></Button>
            
            
            </Box>
          </Box>
          <Box className="relative basis-1/2 " component="section">
            <img className="h-full" src={desktopImg} alt="img" />
            <Box className="absolute top-5 left-5 z-50 !text-black" component="section">
            <Typography variant="h6" gutterBottom>NEW ARRIVALS</Typography>
            <Typography variant="h6"  sx={{fontWeight:"bold"}} gutterBottom>SUMMER <br/> SALE 20% OFF</Typography>
            <Button variant="text" sx={{color:"grey" , "&:hover":{color:"rgb(239 68 68)"}}}>shop now <ArrowRightAltOutlinedIcon/></Button>
            
            
            </Box>
          </Box>

          </Box>
        </Box>

       
      </Container>
       <Container maxWidth="lg">
       <SubMain/>

       </Container>
      
    </Box>
  );
}


