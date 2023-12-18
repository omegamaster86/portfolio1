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
        rememberMe: false
        }}
        onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        }}
    >
    {({ handleSubmit, errors, touched }) => (
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
