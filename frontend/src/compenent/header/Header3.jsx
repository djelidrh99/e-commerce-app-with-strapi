import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import GamesOutlinedIcon from "@mui/icons-material/GamesOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton, useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Drawer from "@mui/material/Drawer";
import Divider from '@mui/material/Divider';
import Links from "./Links";



export default function header3() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // DRAWER FNC
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  // Accordion state
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navLink =["Menu","Mega Menu" ,"Full secreen Menu","Pages","User Account","Vendor Account"]

  return (
    <Box component="section" className="pt-8 pb-4" sx={{}}>
      <Container maxWidth="lg" className="flex justify-between items-center">
        <Box component="section">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              width: "200px",
              backgroundColor: theme.palette.myBg.main,
              justifyContent: "space-between",
              gap: 1,
              alignItems: "center",
              color: theme.palette.text.primary,
            }}
          >
            <GridViewOutlinedIcon />
            Categories
            <Box flexGrow={1} />
            <KeyboardArrowRightIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
              ".MuiList-root": {
                width: "200px",
                backgroundColor: theme.palette.myBg.main,
                color: theme.palette.text.primary,
              },
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <MenuBookOutlinedIcon /> Books
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <DirectionsBikeOutlinedIcon /> Bikes
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <GamesOutlinedIcon /> Games
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <DvrOutlinedIcon /> Electronics
            </MenuItem>
          </Menu>
        </Box>

        <Box component="section" className="hidden lg:!flex items-center gap-5">
         
         {navLink.map((nav) =>{ 
          return (
          <Links key={nav} Title={nav}/>
        )
        }
          
          )}
          

          
        </Box>

        <Box component="section" className="block lg:!hidden">
          <IconButton onClick={toggleDrawer(true)}>
            <MenuOutlinedIcon className="!w-6 !h-6" />
          </IconButton>
        </Box>
      </Container>
      <Drawer
        className="!w-full"
        sx={{
          "& .MuiPaper-root": {
            width: "70%",
            backgroundColor: theme.palette.myBg.main,
            ".MuiAccordion-root": {
              width: "100%",
              
            },
          },
        }}
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        {navLink.map((item,index)=>{
          return(
            <div key={index}>
            <Accordion
            
        elevation={0}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
          

          }}
          style={{background:"transparent"}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            
          >
            {item}
          </AccordionSummary>
          <AccordionDetails>
            <List sx={{ m: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText
                    sx={{ color: theme.palette.text.primary }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ p: 0 }}>
                <ListItemButton sx={{ p: 1, fontSize: "13px" }}>
                  <ListItemText sx={{ color: theme.palette.text.primary }}>
                    <Accordion
                    elevation={0}
                      sx={{
                        
                      
                      }}
                      style={{background:"transparent"}}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ p: 0, m: 0 }}
                      >
                        Product
                      </AccordionSummary>
                      <AccordionDetails sx={{}}>
                        <List sx={{ m: 0 }}>
                          <ListItem sx={{ p: 0 }}>
                            <ListItemButton sx={{ p: 1, fontSize: "13px" }}>
                              <ListItemText
                                sx={{ color: theme.palette.text.primary }}
                                primary="Add"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem sx={{ p: 0 }}>
                            <ListItemButton sx={{ p: 1, fontSize: "13px" }}>
                              <ListItemText
                                sx={{ color: theme.palette.text.primary }}
                                primary="Edite"
                              />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ p: 0 }}>
                <ListItemButton sx={{ p: 1, fontSize: "13px" }}>
                  <ListItemText
                    sx={{ color: theme.palette.text.primary }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ p: 0 }}>
                <ListItemButton sx={{ p: 1, fontSize: "13px" }}>
                  <ListItemText
                    sx={{ color: theme.palette.text.primary }}
                    primary="Profils"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion> 
        <Divider/>
        </div>
          )
        })}
      </Drawer>
    </Box>
  );
}
