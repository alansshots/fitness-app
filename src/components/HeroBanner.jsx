import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography fontWeight='700' mt='30px' mb='23px' sx={{
            fontSize: { lg: '44px', xs: '40px'}
        }}>
            Sweat, Smile <br/> And Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb='20px'>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{
            background:'#FF2526',
            padding:'10px'
        }}>Explore Exercises</Button>
        <img src={HeroBannerImage} alt="Hero image" className='hero-banner-img' />
        <Typography fontWeight='600' color='#FF2625' fontSize='200px' 
        sx={{
            opacity: 0.1,
            display: {lg: 'block', xs: 'none'}
        }} >
            Exercise
        </Typography>
    </Box>
  )
}

export default HeroBanner