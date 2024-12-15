import Typography from "@mui/material/Typography";
import Darkmode from "./Darkmode"
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Container from "@mui/material/Container";

// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import { useState } from "react";

export default function header1() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [age, setAge] = useState('');

    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };

  return (
    
    
    <Box component="section" className="bg-slate-900 text-white py-2" sx={{ }}>
    <Container maxWidth='lg' className="flex justify-between items-center">
    <Box component="section" className="flex items-center !text-white gap-5">
    <Button className="!bg-red-500 !text-white !p-1 !rounded-full !font-open !font-bold " variant="contained">Hot</Button>

    <Typography className="!font-open max-xs:!text-xs" variant="overline"  sx={{ display: 'block' }}>
        Free Express Shipping      </Typography>
    </Box>
    <Box className="flex items-center max-xs:!gap-2 gap-5" component="section">
    {/* <FormControl className="!bg-white !border-none !outline-none !outline-offset-0 after:hidden before:hidden" sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="!bg-white !text-black !font-open !border-none !outline-offset-0 !outline-none "
        >
          <MenuItem className="!bg-white !text-black" value="">
            En
          </MenuItem>
          <MenuItem className="!bg-white !text-black" value="Ar">Ar</MenuItem>
          
        </Select>
      </FormControl> */}
      <ul className="social-media max-xs:!gap-1 flex gap-3">
        <li><FacebookIcon className="!w-5 !h-5 hover:!scale-110 cursor-pointer transition-all"/></li>
        <li><XIcon className="!w-5 !h-5 hover:!scale-110 cursor-pointer transition-all"/></li>
        <li><InstagramIcon className="!w-5 !h-5 hover:!scale-110 cursor-pointer transition-all"/></li>
      </ul>
    <Darkmode/>
    </Box>
    </Container>
  </Box>
  
        
  )
}
