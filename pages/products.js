import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import data from '../utils/data';
import { Button } from '@mui/material';
import useStyles from '../utils/styles';
import Link from 'next/link';

const Products = () => {
 const classes= useStyles();
  return (
    <div>
      <Box sx={{
        flexGrow: 1, margin: '50px',
      }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {data.products.map((product, index)=> (
            <Grid item xs={2} sm={4} md={4} key={index} >
              <Card sx={{
                maxWidth: 345,
                // backgroundColor:"#f6c492",
                //   // backgroundColor:"rgba(255, 255, 255, 0.1)",
                // boxShadow: '0px 4px 16px rgba(0,0,0,0.3)',
                // cursor:'pointer',
                // opacity: "0.8",
                //  background: 'rgba(255,255,255,0.8)',
                // boxShadow: '0px 4px 16px rgba(0,0,0,0.3)',
                // cursor:'pointer',
                // opacity: "0.5",
                 color: 'black', borderColor: 'yellow', borderWidth: '10px'
              }}>
                <Link href={`product/${product.slug}`}>
                <CardMedia
                  component="img"
                  height="194"
                  // image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TWMQbUZgINZH9aZsj4zOSEVxPZGr_YqRCgpMIBwa&s"
                 image={product.image}
                  alt="Paella dish"
                />
                </Link>
                <Box sx={{display:'flex', justifyContent:'space-between',
                 backgroundColor:"#f6c492",
                 // backgroundColor:"rgba(255, 255, 255, 0.1)",
              //  boxShadow: '0px 4px 16px rgba(0,0,0,0.3)',
               cursor:'pointer',
               opacity: "0.7",
                  // background: 'rgba(255,255,255,0.2)',
                //   backgroundColor:"#f6c492",
                //   boxShadow: '0px 4px 16px rgba(0,0,0,0.3)',
                // cursor:'pointer',
                // opacity: "0.2",
                }}>
                 {/* <CardActions> */}
                 <Box>
                <CardContent >
                <Typography variant="body2"
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body2"
                  >
                    {product.description}
                  </Typography>
                  <Typography variant="body2"
                  >
                    {product.price}
                  </Typography>
                  <Typography variant="body2"
                  >
                    {product.rating}
                  </Typography>
                </CardContent>
                </Box>
                <Box sx={{}}>
                <Button className={classes.button}>Add to Cart</Button>
                </Box>
                </Box>
                {/* </CardActions> */}
                {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Products
