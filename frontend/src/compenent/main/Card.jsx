// card import
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@emotion/react";
import { motion } from "motion/react"




// eslint-disable-next-line react/prop-types
export default function MyCard({product,productModal}) {
    const theme = useTheme();
   
  return (
    <Card
    component={motion.section}
    layout
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{duration: 1.6, type: "spring", stiffness: 50 }}
        sx={{
          maxWidth: 345,
          ":hover .MuiCardMedia-root": { transform: "scale(1.1)" },
          overflow: "hidden !important",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          // eslint-disable-next-line react/prop-types
          image={`${product.productImg[0].url}`}
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
{              // eslint-disable-next-line react/prop-types
}              {product.productTitile}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary }}
            >
                
{              // eslint-disable-next-line react/prop-types
}              {product.productPrice}
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
{            // eslint-disable-next-line react/prop-types
}            {product.productDesription}
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
              // eslint-disable-next-line react/prop-types
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
              // eslint-disable-next-line react/prop-types
              defaultValue={product.productRating}
              precision={0.5}
              readOnly
            />
          </Stack>
        </CardActions>
      </Card>
  )
}
