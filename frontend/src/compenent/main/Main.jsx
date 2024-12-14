import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion, AnimatePresence } from "framer-motion";

//modal import
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

//api import
import { useGetProductByNameQuery } from "../../product";
// setCounter Import
import { useSetCounter } from "../../Context/CounterCartContext";

import Cart from "./Cart";
import MyCard from "./Card";
import Error from "./Error";
import Loading from "./Loading";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: { xs: "95%", sm: "750px" },
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  display: "flex",
  gap: "20px",
  alignItems: "center",
  flexDirection: { xs: "column", sm: "row" },
};

export default function Main() {
  const setCounter = useSetCounter();
  const theme = useTheme();
  const [alignment, setAlignment] = useState("All Product");
  const [open, setOpen] = useState(false);
  const [productWantToaddToCart, setProductWantToaddToCart] = useState(null);
  const [productInsideCart, setProductInsideCart] = useState([]);
  const handleClose = () => setOpen(false);

useEffect(()=>{
if(sessionStorage.getItem("myCart")) {
setProductInsideCart(JSON.parse(sessionStorage.getItem("myCart")))
}
},[])
  const [img, setImg] = useState("public/Product/final.png");
  const handleAlignment = (event, newSrc) => {
    if (newSrc !== null) {
      setImg(newSrc);
    }
  };

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const [category, setCategories] = useState("products?populate=*");
  // products?filters[productCategory][$eq]=men&populate=*

  const { data, error, isLoading } = useGetProductByNameQuery(category);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  if (!data || !data.data) return <p>No products available</p>;

  let allProduct = [];
  if (data) {
    allProduct = data.data;
  }

  const ProductList = allProduct.map((product) => {
    return (
      <MyCard key={product.id} product={product} productModal={productModal} />
    );
  });

  function productModal(url, pr) {
    setOpen(true);
    setImg(url);
    setProductWantToaddToCart(pr);
  }

  function counterIncramentAndAddProductToCart(confirmProduct) {
    if (productInsideCart) {
      const productExist = productInsideCart.find((product) => {
        return product.id === confirmProduct.id;
      });
      if (productExist) {
        // eslint-disable-next-line react/prop-types
        const newProducListInCart = productInsideCart.map((product) => {
          return product.id === confirmProduct.id
            ? { ...product, counter: +product.counter + 1 }
            : product;
        });
        // eslint-disable-next-line react/prop-types
        setProductInsideCart(newProducListInCart);
        sessionStorage.setItem("myCart", JSON.stringify(newProducListInCart));
      } else {
        setProductInsideCart((prev) => {
          const updateCart=[...prev, confirmProduct]
        sessionStorage.setItem("myCart", JSON.stringify(updateCart));
        setCounter(updateCart.length)
        return updateCart;
        });

      }
    } else {
      setProductInsideCart((prev) => {
        const updateCart=[...prev, confirmProduct]
        sessionStorage.setItem("myCart", JSON.stringify(updateCart));
        setCounter(updateCart.length)
        return updateCart;
      });

    }
    setOpen(false);
  }





  return (
    <Container>
      <Stack
        sx={{ my: 5 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography>Selected Product</Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.secondary }}
          >
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            flexWrap: "wrap",
            justifyContent: "end",
            gap: "10px",
            ".MuiToggleButtonGroup-middleButton": {
              border: "1px solid #777",
              borderRadius: 0,
              fontWeight: "bold",
            },
            ".MuiToggleButtonGroup-lastButton": {
              border: "1px solid #777",
              borderRadius: 0,
              fontWeight: "bold",
            },
            ".MuiToggleButtonGroup-firstButton": {
              border: "1px solid #777",
              borderRadius: 0,
              fontWeight: "bold",
            },
            ".css-gjscvd-MuiButtonBase-root-MuiToggleButton-root.Mui-selected":
              {
                backgroundColor: "rgba(239 ,68 ,68, 0.16)",
                color: "rgb(239 68 68)",
              },
          }}
        >
          {/* .Mui-selected */}
          <ToggleButton
            onClick={() => {
              setCategories("products?populate=*");
            }}
            value="All Product"
          >
            All Product
          </ToggleButton>
          <ToggleButton
            onClick={() => {
              setCategories(
                "products?filters[productCategory][$eq]=men&populate=*"
              );
            }}
            value="Men Categories"
          >
            Men Categories
          </ToggleButton>
          <ToggleButton
            onClick={() => {
              setCategories(
                "products?filters[productCategory][$eq]=women&populate=*"
              );
            }}
            value="Women Categorie"
          >
            Women Categorie
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Box
        component={motion.div}
        layout
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <AnimatePresence>{ProductList}</AnimatePresence>
      </Box>
      {productWantToaddToCart !== null && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box key={productWantToaddToCart.id} sx={style}>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: "5px", right: "5px" }}
              aria-label="delete"
            >
              <CloseIcon
                sx={{ transition: "0.3s", ":hover": { scale: 1.1 } }}
              />
            </IconButton>
            <Box sx={{ display: "flex" }}>
              <img
                style={{
                  minWidth: "300px",
                  height: "330px",
                  maxWidth: "300px",
                }}
                src={`${import.meta.env.VITE_SOME_API}/${img}`}
                alt=""
              />
            </Box>
            <Box
              sx={{
                py: "20px",
                flexGrow: 1,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Stack gap={1} direction="column" mb={2}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {productWantToaddToCart.productTitile}
                </Typography>
                <Typography variant="body1" sx={{ color: "rgb(239 68 68)" }}>
                  {productWantToaddToCart.productPrice}
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {productWantToaddToCart.productDesription}
              </Typography>
              <ToggleButtonGroup
                value={img}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                sx={{ mt: "20px" }}
              >
                <ToggleButton
                  value={productWantToaddToCart.productImg[0].url}
                  aria-label="left aligned"
                >
                  <img
                    className="w-12 h-12"
                    src={`${import.meta.env.VITE_SOME_API}/${productWantToaddToCart.productImg[0].url}`}
                    alt=""
                  />
                </ToggleButton>
                <ToggleButton
                  value={productWantToaddToCart.productImg[1].url}
                  aria-label="centered"
                >
                  <img
                    className="w-12 h-12"
                    src={`${import.meta.env.VITE_SOME_API}/${productWantToaddToCart.productImg[1].url}`}
                    alt=""
                  />
                </ToggleButton>
              </ToggleButtonGroup>

              <Button
                sx={{
                  display: "block",
                  m: { xs: "20px auto 0", sm: "20px 0 0" },
                }}
                variant="contained"
                onClick={() => {
                  counterIncramentAndAddProductToCart(productWantToaddToCart);
                }}
              >
                <ShoppingCartIcon sx={{ mr: "10px" }} />
                Buy Now
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
      <Cart
        key={productInsideCart.id}
        producListInCart={productInsideCart}
        setProductInsideCart={setProductInsideCart}
      />
    </Container>
  );
}
