import React from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart}) => {

  // const [currentPage, setCurrentPage] = useState(1); 
  // const exercisesPerPage = 9;

  // const paginate = (e, value) => {
  //   setCurrentPage(value)

  //   window.scrollTo({top:1800, behavior:'smooth'})
  // }

  return (
    <Box id='exercises'
      sx={{mt: {lg:'110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='43px'>
        Showing Results
      </Typography>

      <Stack direction='row' sx={{gap: {lg:'110px', xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>    

      {/* <Stack mt='100px' alignItems='center'>
        {exercises.lenght > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            count={Math.ceil(exercises.lenght / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack> */}

    </Box>
  )
}

export default Exercises