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
  import axios from 'axios';

  export const EmailPassword = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleSubmit = async (values, { setSubmitting }) => {
      try {
        const response = await axios.post('http://localhost:3000/users', { user: values });
        console.log(response.data);
        // 登録に成功した場合の処理
      } catch (error) {
        console.error(error);
        // サーバーエラーが発生した場合や登録に失敗した場合の処理
      }
      setSubmitting(false);
    };

    return (
    <Formik
        initialValues={{
        email: "",
        password: "",
        username:"",
        ConfirmPassword:"",
        }}
        // onSubmit={(values) => {
        //     console.log(values);
        // }}
        onSubmit={handleSubmit}
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
          <FormControl>
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
          </FormControl>
          <FormControl >
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
          </FormControl>
          {/* <Button mt={4} type="submit">
              Submit
          </Button> */}
        </VStack>
      </form>
    )}
  </Formik>
    )
}