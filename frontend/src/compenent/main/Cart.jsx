import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import { forwardRef } from "react";
import {  useTheme } from "@mui/material";
import { useOpenSlide } from "../../Context/SlideContext";
import { useSetOpenSlide } from "../../Context/SlideContext";
import { useSetCounter } from "../../Context/CounterCartContext";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

// eslint-disable-next-line react/prop-types
export default function Cart({ producListInCart, setProductInsideCart }) {
  const theme = useTheme();
  const open = useOpenSlide();
  const setOpen = useSetOpenSlide();
  const setCounter = useSetCounter();


  const handleClose = () => {
    setOpen(false);
  };

  const handleIncrement = (id) => {
    // eslint-disable-next-line react/prop-types
    const newProducListInCart = producListInCart.map((product) => {
      return product.id === id
        ? { ...product, counter: +product.counter + 1 }
        : product;
    });
    // eslint-disable-next-line react/prop-types
    sessionStorage.setItem("myCart", JSON.stringify(newProducListInCart))
    setProductInsideCart(newProducListInCart);
  };

  const handleDencrement = (id) => {
    // eslint-disable-next-line react/prop-types
    const newProducListInCart = producListInCart.map((product) => {
      return product.id === id
        ? { ...product, counter: Math.max(+product.counter - 1, 1) }
        : product;
    });
    // eslint-disable-next-line react/prop-types
    sessionStorage.setItem("myCart", JSON.stringify(newProducListInCart))
    setProductInsideCart(newProducListInCart);
  };

  const handleDelete = (id) => {
    // eslint-disable-next-line react/prop-types
    const newProducListInCart = producListInCart.filter((product) => {
      return product.id !== id;
    });
    setCounter(newProducListInCart.length);
    sessionStorage.setItem("myCart", JSON.stringify(newProducListInCart))
    setProductInsideCart(newProducListInCart);
  };

  // eslint-disable-next-line react/prop-types
  const CartList = producListInCart.map((product) => {
    return (
      <Box key={product.id}>
        <List sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <ListItem sx={{}}>
            <img
              className=" w-20 h-20 mr-10"
              src={`${import.meta.env.VITE_SOME_API}/${product.productImg[0].url}`}
              alt=""
            />
            <ListItemText primary={product.productTitile} />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "center" }}
              primary={product.productPrice}
            />
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              ".css-cfq8qh-MuiListItemText-root": {
                flex: "none !important",
                mx: "4px",
                backgroundColor: "white",
                color: "black",
                padding: "2px 4px",
              },
            }}
          >
            <IconButton
              onClick={() => {
                handleDencrement(product.id);
              }}
              aria-label="minus"
            >
              <RemoveIcon sx={{ fontSize: "18px" }} />
            </IconButton>
            <ListItemText primary={product.counter} />
            <IconButton
              onClick={() => {
                handleIncrement(product.id);
              }}
              aria-label="plus"
            >
              <AddIcon sx={{ fontSize: "18px" }} />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "center" }}
              primary={(product.productPrice * product.counter).toFixed(2)}
            />
            <IconButton
              sx={{
                position: "relative",
                ":hover .MuiSvgIcon-root": {
                  transform: "rotate(180deg)",
                  transition: "transform 0.3s ease",
                },
              }}
              edge="start"
              color="inherit"
              onClick={() => handleDelete(product.id)}
              aria-label="close"
            >
              <CloseIcon sx={{ color: "rgb(239 68 68)", fontWeight: "bold !important" }} />
            </IconButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    );
  });

  // eslint-disable-next-line react/prop-types
  const totalPrice = producListInCart.reduce((acc,current) => {
   
    return acc + Number(current.productPrice*current.counter)
   },0)

   console.log(totalPrice)

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          ".css-1ukp82j-MuiPaper-root-MuiDialog-paper": {
            backgroundColor: theme.palette.myBg.main,
            display:"flex",
            flexDirection:"column"
          },
        }}
      >
        <Box sx={{flexGrow:1}}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List key="title" sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <ListItem>
            <ListItemText
              sx={{
                textAlign: "center",
                ".MuiTypography-root": { fontWeight: "bold !important" },
              }}
              primary="Product"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{
                textAlign: "center",
                ".MuiTypography-root": { fontWeight: "bold !important" },
              }}
              primary="Price"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{
                textAlign: "center",
                ".MuiTypography-root": { fontWeight: "bold !important" },
              }}
              primary="Quantity"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{
                textAlign: "center",
                ".MuiTypography-root": { fontWeight: "bold !important" },
              }}
              primary="Total"
            />
          </ListItem>
        </List>
        <Divider />
        {CartList}
        </Box>
        <Box
        sx={{p:"8px 12px",
          display:"flex",
          justifyContent:"flex-end",
          alignItems:"center"

        }}
        >
          <Box
          sx={{backgroundColor: "white",
            height: "180px",
            color:"black",
            width: "160px",
            borderRadius: "10px",
            padding:"4px"
          
          }}
          >
            <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb="8px"
            >
              <Typography sx={{fontWeight:"bold"}}>Product</Typography>
{              // eslint-disable-next-line react/prop-types
}              <Typography>{producListInCart.length}</Typography>
            </Stack>
            <hr />

            <Stack
            mt="4px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            >
              <Typography sx={{fontWeight:"bold"}}>Total</Typography>
              <Typography>{totalPrice.toFixed(2)}$</Typography>
            </Stack>
          
          </Box>
          
        </Box>
      </Dialog>
    </>
  );
}
