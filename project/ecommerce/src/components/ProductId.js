import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
const ProductId = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="300"
        // image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography component="h1" variant="caption" color="text.secondary">
          {/* {product.title} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductId;
