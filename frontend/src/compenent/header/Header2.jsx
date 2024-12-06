import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";

// menu select import
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";

// badge import
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor:"rgb(239 68 68)",
    display:'',
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid rgb(209 213 219)",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "rgb(243 244 246)",
    border: "1px solid rgb(239 68 68)",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
  },
}));

const options = ["All Category", "Man ", "Woman"];

export default function header2() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme =useTheme()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [anchorEl, setAnchorEl] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      component="section"
      className="py-2"
      sx={{}}
    >
      <Container maxWidth='lg' className="flex justify-between items-center">
      <Box
        component="section"
        className="flex flex-col justify-center items-center "
      >
        <ShoppingCartOutlinedIcon className="!h-5 !w-5" />
        E-commerce
      </Box>

      <Box className="w-1/2" component="section">
        <Search className="!rounded-3xl !overflow-hidden">
          <SearchIconWrapper>
            <SearchIcon className="!text-black" />
          </SearchIconWrapper>
          <div className="absolute right-0  !z-50 !h-full  ">
            <List
              component="nav"
              aria-label="Device settings"
              className="!h-full border-l border-l-gray-300 "
              sx={{ backgroundColor:theme.palette.myBg.main,py:0.5,px:0.25}}
            >
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                className=" !h-full  !p-1 !m-0"
                
              >
                <ListItemText
                  className="flex justify-between items-center max-xmd:!w-20 w-28"
                  sx={{color:theme.palette.text.primary}}
                  primary={options[selectedIndex]}
                  secondary={
                    open ? <KeyboardArrowUpIcon className="" /> : <KeyboardArrowDownIcon className="" />
                  }
                />
              </ListItemButton>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              sx={{".MuiList-root":{width:"112px", backgroundColor:theme.palette.myBg.main,color:theme.palette.text.primary}}}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                  className=""
                  sx={{fontSize:"13px"}}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>

      <Box
        className="flex items-center justify-center max-xs:!gap-2 gap-3"
        component="section"
      >
         <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon className="!h-5 !w-5" />
      </StyledBadge>
    </IconButton>
    <IconButton aria-label="user">
    <PersonOutlineOutlinedIcon className="!h-5 !w-5"/>
    </IconButton>


      </Box>
      </Container>
    </Box>
  );
}
