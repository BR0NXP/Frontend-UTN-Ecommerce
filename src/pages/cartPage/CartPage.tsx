

import { Block } from '@mui/icons-material';
import { Grid } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import PrimarySearchAppBar from '../../components/app/homePage/NavBar';

export const CartPage = () => {
  return (
    <>
    
    <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}

    >
    
    <Grid item
    className='box-shadow'
    
    sx={{
      
      width:  1000 ,
      height: 500,
      backgroundColor: 'white',
      padding: 5,
      borderRadius: 2
    }}
    >
      <h1>Tu carrito</h1>
      <Grid item 
    className='box-product' 
    sx={{
      width: 70,
      height: 60,
      padding: 5,
      backgroundColor: 'black'
      


    }}>
    </Grid>
    </Grid>

    
    
    </Grid>
    

    </>
  )
}

export default CartPage;