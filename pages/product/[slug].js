import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import data from '../../utils/data';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Home from '..';



const Product = () => {
 const router = useRouter();
 const {slug} = router.query;

 const product = data.products.find((a)=> a.slug === slug)
 console.log("PRoduct", product)
  const theme = useTheme();

  return (
    // <Home title={product.name}>  </Home>
    <div>
      <Box sx={{
        flexGrow: 1,
      }}>
        
        <Card sx={{
          display: 'flex', width: 1060,height:350, margin: 'auto', background: 'rgba(255,255,255,0.1)',
          boxShadow: '0px 4px 16px rgba(0,0,0,0.7)',
          opacity: "0.95",
          color: "white"
        }}>
          <CardMedia
            component="img"
            sx={{ width: 551 }}
            // image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TWMQbUZgINZH9aZsj4zOSEVxPZGr_YqRCgpMIBwa&s"
           image={product.image}
            alt="Live from space album cover"
          />
          <Box sx={{
            display: 'flex', flexDirection: 'column', width: 520, backgroundColor: '#9E7777', background: 'rgba(157, 131, 104, 0.1)',
            boxShadow: '0px 4px 16px rgba(0,0,0,0.7)',
          }}>
            <CardContent
            >
              <Typography component="div" variant="h5">
               {product.name}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {product.description} 
                </Typography>
            </CardContent>

          </Box>

        </Card>
      </Box>
    </div>
  
  )
}

export default Product
