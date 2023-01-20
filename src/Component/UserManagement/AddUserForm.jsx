import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import React from 'react'


const AddUserForm = () => {

  return (
    <>
    <FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
    </>
  )
}

export default AddUserForm