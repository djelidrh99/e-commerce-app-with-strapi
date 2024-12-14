import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import Divider from '@mui/material/Divider';

import FlashOnIcon from '@mui/icons-material/FlashOn';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';

export default function SubMain() {
    const theme = useTheme();
    const element= [
        {icon:<FlashOnIcon/>,title:"Fast Delivery",subtitle:"Start from $10"},
        {icon:<WorkspacePremiumOutlinedIcon/>,title:"Money Guarantee",subtitle:"7 Days Back"},
        {icon:<AlarmOnOutlinedIcon/>,title:"365 Days",subtitle:"For free return"},
        {icon:<BeenhereOutlinedIcon/>,title:"Payment",subtitle:"Secure system"}
    ]
  return (
    <Stack
        direction="row"
        divider={<Divider className="hidden md:block" orientation="vertical" flexItem />}
        className=" justify-start md:!justify-center"
        sx={{p:"10px 20px",width:"100%",gap:"20px",backgroundColor:theme.palette.mode === "dark" ?"black":"white"}}
        alignItems="center"
        flexWrap="wrap"
      >
        {element.map((item,index) => { 
            return(<SubMainBox key={index} icon={item.icon} title={item.title} subtitle={item.subtitle}/>)
         })}
        
        
      </Stack>
  )
}


// eslint-disable-next-line react/prop-types
function SubMainBox({icon,title,subtitle}) {
  return(
      <Stack  sx={{p:"10px 50px 10px 0",flexGrow:1,justifyContent: useMediaQuery('(min-width:600px)') ?"center": "left"}}  direction="row" spacing={1} alignItems="center">
        {icon}
        <Stack direction="column" spacing={1}> 
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body1"sx={{color:"grey"}}>{subtitle}</Typography>
        </Stack>

        </Stack>
  )
}

