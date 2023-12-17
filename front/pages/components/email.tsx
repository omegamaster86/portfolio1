import { useState } from 'react' 
import {
    Input,
    FormControl,
    InputGroup,
    InputRightElement,
    Button
  } from '@chakra-ui/react'

  export const EmailAdress = () => {
    
    return (
      <FormControl> 
        <Input placeholder='Email' type='email'/>
      </FormControl>
    )
  }

  export const UserName = () => {
    
    return (
      <FormControl> 
        <Input placeholder='UserName' type='text'/>
      </FormControl>
    )
  }

  export const PasswordInput = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }

  export const ConfirmPassword = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='ConfirmPassword'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }