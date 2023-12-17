import {
    Input,
    FormControl,
  } from '@chakra-ui/react'

  export const EmailAdress = () => {
    
    return (
      <FormControl> 
        <Input placeholder='Email' type='email'/>
      </FormControl>
    )
  }