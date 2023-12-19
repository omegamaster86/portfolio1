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

  export const EmailPassword = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
    <Formik
        initialValues={{
        email: "",
        password: "",
        username:"",
        ConfirmPassword:"",
        }}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
    {({ handleSubmit, errors, touched, getFieldProps }) => (
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="text"></FormLabel>
            <Field
              as={Input}
              id="username"
              name="username"
              type="text"
              placeholder='UserName' 
              {...getFieldProps('username')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email"></FormLabel>
            <Field
              as={Input}
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
          <FormControl isInvalid={!!errors.password && touched.password}>
          <FormLabel htmlFor="password"></FormLabel>
            <Field name="ConfirmPassword">
                {({ field }) => (
                    <InputGroup size="md">
                    <Input
                        {...field}
                        id="ConfirmPassword"
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="ConfirmPassword"
                        {...getFieldProps('ConfirmPassword')}
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
          <Button mt={4} type="submit">
              Submit
          </Button>
        </VStack>
      </form>
    )}
  </Formik>
    )
}