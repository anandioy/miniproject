
import { FormikProps, Form, Field } from "formik";
import { FormValues } from '../types'
import { Box, Center, Container, Divider, HStack, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import { Button, Checkbox, FormControl, FormLabel, Input, Flex, Avatar } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../../assets/mp logo.png'

export default function InnerForm(props: FormikProps<FormValues>) {
    const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
      props;
  
    return (
        <div>
   
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Form onSubmit={handleSubmit}>
            <FormControl>
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Center>
                            <Image src={logo} width='70' alt='logo' />
                        </Center>
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={{ base: 'xs', md: 'sm' }}>Registration Form</Heading>
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
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <Field 
                                    name="username" 
                                    type="username" 
                                    onChange={handleChange}
                                    value={values.username}
                                    />
                            {touched.username && errors.username && (
                                    <Text>
                                    {errors.username}
                                    </Text>
                                )}

                            </FormControl>
                            
                        </Stack>

                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Field name="email" 
                                type="email" 
                                onChange={handleChange}
                                value={values.email}
                                />
                                {touched.email && errors.email && (
                                    <Text>
                                    {errors.email}
                                    </Text>
                                )}
                            </FormControl>
                        </Stack>

                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Field name="password" 
                                type="password" 
                                onChange={handleChange}
                                value={values.password}
                                />
                                {touched.password && errors.password && (
                                    <Text>
                                    {errors.password}
                                    </Text>
                                )}
                            </FormControl>
                        </Stack>

                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                                <Field name="phone" 
                                type="phone" 
                                onChange={handleChange}
                                value={values.phone}
                                />
                                {touched.phone && errors.phone && (
                                    <Text>
                                    {errors.phone}
                                    </Text>
                                )}
                            </FormControl>
                        </Stack>

                        <Stack spacing="6">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                            >Sign up</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
            </FormControl>
            </Form>
        </Container>


    </div>
    );
  }
  