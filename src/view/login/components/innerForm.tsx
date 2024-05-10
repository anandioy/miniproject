import { Box, Center, Container, Divider, HStack, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import { Button, Checkbox, FormControl, FormLabel, Input, Flex, Avatar } from '@chakra-ui/react'
import { FormikProps, Form, Field } from "formik";
import { FormValues } from "../types";

import logo from '../../assets/mp logo.png'
import Image from 'next/image'
  
  export default function InnerForm(props: FormikProps<FormValues>) {
    const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
      props;
  
    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        
        <Form onSubmit={handleSubmit}>
        <Stack spacing="8">
            <Stack spacing="6">
                <Center>
                    <Image src={logo} width='70' alt='logo' />
                </Center>
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                    <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                    <Text color="fg.muted">
                        Don't have an account? <Link href="/register">Sign up</Link>
                    </Text>
                </Stack>
            </Stack>
            <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={{ base: 'transparent', sm: 'bg.surface' }}
                boxShadow={{ base: 'none', sm: 'md' }}
                borderRadius={{ base: 'none', sm: 'xl' }}
            >
                <Stack spacing="6">
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Field  
                                name="email" 
                                type="email"
                                onChange={handleChange}
                                value={values.email}
                                />
                                {touched.email && errors.email && (
                                <Text color='red'>
                                    {errors.email}
                                </Text>
                                )}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                                <Field
                                name="password"
                                type="password"
                                onChange={handleChange}
                                  value={values.password}
                                />
                                {touched.password && errors.password && (
                               <Text color='red'>
                                {errors.password}
                                </Text>
                                )}
                        </FormControl>
                    </Stack>
                    <HStack justify="space-between">
                        <Checkbox defaultChecked>Remember me</Checkbox>
                        <Button variant="text" size="sm">
                            Forgot password?
                        </Button>
                    </HStack>
                    <Stack spacing="6">
                        <Button
                        type="submit"
                        disabled={isSubmitting}
                        >
                            Login
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
        </Form>
    </Container>
    );
  }
  