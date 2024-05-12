
import { FormikProps, Form, Field, FieldProps } from "formik";
import { FormValues } from '../types'
import { Box, Center, Container, Divider, HStack, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import { Button, Checkbox, FormControl, FormLabel, Input, Flex, Avatar, InputProps } from '@chakra-ui/react'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image'
import logo from '../../assets/mp logo.png'


interface StyledInputProps extends Omit<InputProps, 'size'> {
    field: FieldProps['field']; 
}

  const StyledInput: React.FC<StyledInputProps> = ({ field, ...rest }) => (
    <Input
        {...field}
        {...rest}
        border="1px solid #ccc"
        borderRadius="md"
        px="3"
        py="2"
    />
);

export default function InnerForm(props: FormikProps<FormValues>) {
    const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
      props;

  
    return (
        <div>
   
        <Container maxW="3xl" w='1000px' bg='white' py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Form onSubmit={handleSubmit}>
            <FormControl>
            
                <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={{ base: 'transparent', sm: 'bg.surface' }}
                    boxShadow={{ base: 'none', sm: 'md' }}
                    borderRadius={{ base: 'none', sm: 'xl' }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <Field name="name">
                            {({ field }: { field: FieldProps['field'] }) => (
                                <FormControl>
                                    <FormLabel htmlFor="name">Event Name</FormLabel>
                                    <StyledInput
                                        field={field} 
                                        id="name"
                                        placeholder="Enter event name"
                                    />
                                    {touched.name && errors.name && (
                                        <Text color="red">{errors.name}</Text>
                                    )}
                                </FormControl>
                            )}
                            </Field>
                            
                        </Stack>

                        <Stack spacing="5">
                            <Field name="description">
                            {({ field }: { field: FieldProps['field'] }) => (
                                <FormControl>
                                    <FormLabel htmlFor="name">Event Description</FormLabel>
                                    <StyledInput
                                        field={field} 
                                        id="description"
                                        placeholder="Enter event description"
                                    />
                                    {touched.description && errors.description && (
                                        <Text color="red">{errors.description}</Text>
                                    )}
                                </FormControl>
                            )}
                            </Field>
                            
                        </Stack>

                        <Stack spacing="5">
                        <Field name="city">
                            {({ field }: { field: FieldProps['field'] }) => (
                                <FormControl>
                                    <FormLabel htmlFor="city">City</FormLabel>
                                    <StyledInput
                                        field={field} 
                                        id="city"
                                        placeholder="Enter the city where the event is being held"
                                    />
                                    {touched.city && errors.city && (
                                        <Text color="red">{errors.city}</Text>
                                    )}
                                </FormControl>
                            )}
                            </Field>
                        </Stack>

                        <Stack spacing="5">
                            <Field name="address">
                            {({ field }: { field: FieldProps['field'] }) => (
                                <FormControl>
                                    <FormLabel htmlFor="address">Address</FormLabel>
                                    <StyledInput
                                        field={field} 
                                        id="address"
                                        placeholder="Enter the address where the event is being held"
                                    />
                                    {touched.address && errors.address && (
                                        <Text color="red">{errors.address}</Text>
                                    )}
                                </FormControl>
                            )}
                            </Field>
                        </Stack>

                        <Stack spacing="5">
                       
                    
                            <FormControl>
                                <FormLabel htmlFor="start_date">Start Date</FormLabel>
                                <DatePicker 
                                    selected={values.start_date ? new Date(values.start_date) : null} 
                                    onChange={(date) => date && handleChange('start_date')(date.toISOString())} 
                                    minDate={new Date()}
                                    maxDate={values.end_date ? new Date(values.end_date) : null} 
                                />
                                {touched.start_date && errors.start_date && (
                                            <Text>{errors.start_date}</Text>
                                )}
                            </FormControl>
                          
                        </Stack>

                        <Stack spacing="5">
                            
                            <FormControl>
                                <FormLabel htmlFor="end_date">End Date</FormLabel>
                                <DatePicker 
                                selected={values.end_date ? new Date(values.end_date) : null} 
                                onChange={(date) => date && handleChange('end_date')(date.toISOString())} 
                                minDate={new Date()}
                                />
                                {touched.end_date && errors.end_date && (
                                            <Text>{errors.end_date}</Text>
                                )}
                            </FormControl>
                        
                        </Stack>

                        <Stack spacing="6">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                            >Create Event</Button>
                        </Stack>
                    </Stack>
                </Box>
            </FormControl>
            </Form>
        </Container>


    </div>
    );
  }
  