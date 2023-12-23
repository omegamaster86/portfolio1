import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { useState } from "react";

export const LoginInfo = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Formik
        initialValues={{
        email: "",
        password: "",
        }}
        onSubmit={(values) => {
        console.log(values);
        }}
    >
    {({ handleSubmit, errors, touched, getFieldProps }) => (
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="email"></FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder='Email' 
              {...getFieldProps('email')}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.password && touched.password}>
            <FormLabel htmlFor="password"></FormLabel>
              <Field name="password">
                  {({ field }) => (
                      <InputGroup size="md">
                      <Input
                          {...field}
                          id="password"
                          pr="4.5rem"
                          type={show ? 'text' : 'password'}
                          placeholder="Enter password"
                          {...getFieldProps('password')}
                      />
                      <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                          </Button>
                      </InputRightElement>
                      </InputGroup>
                  )}
              </Field>
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
        </VStack>
      </form>
      )}
    </Formik>
  )
}
