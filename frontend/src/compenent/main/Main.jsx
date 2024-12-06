import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// card import
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";

//modal import
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

//api import
import { useGetProductByNameQuery } from "../../product";

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
  const theme = useTheme();
  const [alignment, setAlignment] = useState("All Product");
  const [open, setOpen] = useState(false);
  const [productWantToaddToCart, setProductWantToaddToCart] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [img, setImg] = useState("public/Product/final.png");
  const handleAlignment = (event, newSrc) => {
    setImg(newSrc);
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [category, setCategories] = useState("products?populate=*");
  // products?filters[productCategory][$eq]=men&populate=*

  const { data, error, isLoading } = useGetProductByNameQuery(category);
  console.log(error);
  console.log(isLoading);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;
  if (!data || !data.data) return <p>No products available</p>;

  let allProduct = [];
  if (data) {
    allProduct = data.data;
  }

  const ProductList = allProduct.map((product) => {
    return (
      <Card
        key={product.id}
        sx={{
          maxWidth: 345,
          ":hover .MuiCardMedia-root": { transform: "scale(1.1)" },
          overflow: "hidden !important",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={`http://localhost:1337/${product.productImg[0].url}`}
          alt="Paella dish"
          sx={{
            cursor: "pointer",
            transition: "0.3s",
            overflow: "hidden !important",
          }}
        />
        <CardContent>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            sx={{ my: "10px" }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {product.productTitile}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary }}
            >
              {product.productPrice}
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.productDesription}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          disableSpacing
        >
          <Button
            onClick={() => {
              productModal(product.productImg[0].url, product);
            }}
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color: "rgb(29 78 216)",
              transition: "0.3s",
              ":hover": { color: "rgb(30 64 175)" },
            }}
          >
            <AddShoppingCartIcon sx={{ mr: "10px" }} />
            Add To Cart
          </Button>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={product.productRating}
              precision={0.5}
              readOnly
            />
          </Stack>
        </CardActions>
      </Card>
    );
  });

  function productModal(url, pr) {
    setOpen(true);
    setImg(url);
    setProductWantToaddToCart(pr);
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
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {ProductList}
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
                src={`http://localhost:1337/${img}`}
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
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary }}
                >
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
                    src={`http://localhost:1337/${productWantToaddToCart.productImg[0].url}`}
                    alt=""
                  />
                </ToggleButton>
                <ToggleButton
                  value={productWantToaddToCart.productImg[1].url}
                  aria-label="centered"
                >
                  <img
                    className="w-12 h-12"
                    src={`http://localhost:1337/${productWantToaddToCart.productImg[1].url}`}
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
                onClick={handleOpen}
              >
                <ShoppingCartIcon sx={{ mr: "10px" }} />
                Buy Now
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </Container>
  );
}
