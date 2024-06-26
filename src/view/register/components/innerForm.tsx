
import { FormikProps, Form, Field, FieldProps } from "formik";
import { FormValues } from '../types'
import { Box, Center, Container, Divider, HStack, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import { Button, Checkbox, FormControl, FormLabel, Input, Flex, Avatar, InputProps } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../../assets/mp logo.png'

interface StyledInputProps extends Omit<InputProps, 'size'> {
    field: FieldProps['field'];
}

const StyledInput: React.FC<StyledInputProps> = ({ field, ...rest }) => (
    <FormControl>
        <Input
            {...field}
            {...rest}
            border="1px solid #ccc"
            borderRadius="md"
            px="3"
            py="2"
        />
    </FormControl>
);


export default function InnerForm(props: FormikProps<FormValues>) {
    const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
      props;
  
    return (
        <div>
   
        <Container maxW="3xl" w='1000px' mt='0' py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
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
                                <FormLabel htmlFor="fullname">Full Name</FormLabel>
                                <Field 
                                    name="fullname" 
                                    type="fullname" 
                                    onChange={handleChange}
                                    value={values.fullname}
                                    >
                                     {({ field }: { field: FieldProps['field'] }) => (
                                        
                                        <StyledInput
                                            field={field}
                                            id="fullname"
                                            placeholder="Enter your full name"
                                        />
                                    )}   
                                </Field>
                            {touched.fullname && errors.fullname && (
                                    <Text color='red'>{errors.fullname}</Text>
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
                                >
                                {({ field }: { field: FieldProps['field'] }) => (
                                        
                                        <StyledInput
                                            field={field}
                                            id="email"
                                            placeholder="Enter your email"
                                        />
                                    )}
                                </Field>
                                {touched.email && errors.email && (
                                    <Text color = 'red'>
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
                                >
                                {({ field }: { field: FieldProps['field'] }) => (
                                        <StyledInput
                                            field={field}
                                            id="password"
                                            placeholder="Enter your password"
                                            type="password"
                                        />
                                    )}
                                </Field>
                                {touched.password && errors.password && (
                                    <Text color ='red'>
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
                                >
                                 {({ field }: { field: FieldProps['field'] }) => (
                                        
                                        <StyledInput
                                            field={field}
                                            id="phone"
                                            placeholder="Enter your phone number"
                                        />
                                    )}

                                </Field>
                                {touched.phone && errors.phone && (
                                    <Text color ='red'>
                                    {errors.phone}
                                    </Text>
                                )}
                            </FormControl>
                        </Stack>

                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="address">Address</FormLabel>
                                <Field name="address" 
                                type="address" 
                                onChange={handleChange}
                                value={values.address}
                                >
                                {({ field }: { field: FieldProps['field'] }) => (
                                        
                                        <StyledInput
                                            field={field}
                                            id="address"
                                            placeholder="Enter your home address"
                                        />
                                    )}
                                </Field>
                                {touched.address && errors.address && (
                                    <Text color='red'>
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
  