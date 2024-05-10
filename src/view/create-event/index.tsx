'use client'

import React, { ChangeEvent } from 'react';
import Navbar from "../../view/global/components/navbar";
import { Box, Text } from '@chakra-ui/layout';
import {
    Input, AspectRatio, Container, Heading, Stack, Divider,
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Flex,
    Checkbox, CheckboxGroup, Button
} from '@chakra-ui/react';
import Footer from '../../view/global/components/footer';
import { useState } from 'react';
import Datepicker from '../../view/global/components/datepicker';


const CreateEventView = () => {

    const [eventName, setEventName] = useState('');
    const [eventNameTouched, setEventNameTouched] = useState(false);
    const handleEventNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEventName(e.target.value);
        setEventNameTouched(true);
    };
    const isEventNameError = eventNameTouched && eventName === '';
    const eventNameErrorMessage = 'Event Name is required';


    const [eventDescription, setEventDescription] = useState('');
    const [eventDescriptionTouched, setEventDescriptionTouched] = useState(false);
    const handleEventDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEventDescription(e.target.value);
        setEventDescriptionTouched(true);
    };
    const isEventDescriptionError = eventDescriptionTouched && eventDescription === '';
    const eventDescriptionErrorMessage = 'Event Description is required';


    const [city, setCity] = useState('');
    const [cityTouched, setCityTouched] = useState(false);
    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
        setCityTouched(true);
    };
    const isCityError = cityTouched && city === '';
    const cityErrorMessage = 'City name is required';


    const [address, setAddress] = useState('');
    const [addressTouched, setAddressTouched] = useState(false);
    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
        setAddressTouched(true);
    };
    const isAddressError = addressTouched && city === '';
    const addressErrorMessage = 'Address is required';

    return (
        <>
            <Navbar />

            <Box mt='3' ml='20'>
                <Text as='b' mt={3} fontSize="xl">Create Event</Text>

                <Divider />

                <FormControl isRequired>
                    <FormLabel mt={3}>Event Name</FormLabel>
                    <Input placeholder='Give your event a name'
                        size='sm'
                        width='50%'
                        value={eventName}
                        onChange={handleEventNameChange}
                    />

                    {!isEventNameError ? (
                        ''
                    ) : (
                        <Text color="red" fontSize="sm">{eventNameErrorMessage}</Text>
                    )}
                </FormControl>

                <FormControl isRequired>
                    <Text mt={3}>Event Description</Text>
                    <Input placeholder='Describe your event briefly'
                        size='sm'
                        width='50%'
                        value={eventDescription}
                        onChange={handleEventDescriptionChange}
                    />
                    {!isEventDescriptionError ? (
                        ''
                    ) : (
                        <Text color="red" fontSize="sm">{eventDescriptionErrorMessage}</Text>
                    )}
                </FormControl>

                <Divider mt={3} />

                <Text as='b' mt={3} fontSize="lg">Location</Text>

                <FormControl>
                    <Text mt={3} >City</Text>
                    <Input placeholder='Name a city in Indonesia'
                        size='sm'
                        width='50%'
                        value={city}
                        onChange={handleCityChange}
                    />
                    {!isCityError ? (
                        ''
                    ) : (
                        <Text color="red" fontSize="sm">{cityErrorMessage}</Text>
                    )
                    }
                </FormControl>

                <Text mt={3}>Address</Text>

                <FormControl>
                    <Input placeholder='Specify the address of the location'
                        size='sm'
                        width='50%'
                        value={address}
                        onChange={handleAddressChange}
                    />
                    {!isAddressError ? (
                        ''
                    ) : (
                        <Text color="red" fontSize="sm">{addressErrorMessage}</Text>
                    )
                    }
                </FormControl>

                <Divider mt='3' />

                <Box mt='5'>
                    <Text as='b' fontSize='lg' >Upload Image</Text>
                </Box>

                <AspectRatio
                    width="44"
                    ratio={1}
                >
                    <Box
                        margin='5'
                        borderColor="gray.300"
                        borderStyle="dashed"
                        borderWidth="2px"
                        rounded="md"
                        shadow="sm"
                        role="group"
                        transition="all 150ms ease-in-out"

                        _hover={{
                            shadow: "2xl"
                        }}
                    >
                        <Box position="relative" height="100%" width="100%">

                            <Box
                                top="0"
                                left="0"
                                height="100%"
                                width="100%"
                                display="flex"
                                flexDirection="column"

                            >

                                <Stack
                                    height="100%"
                                    width="100%"
                                    display="flex"
                                    justify="center"
                                    spacing="4"
                                >

                                    <Stack p="8" textAlign="center" spacing="1">
                                        <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                                            Drop images here
                                        </Heading>
                                        <Text fontWeight="light">or click to upload</Text>
                                    </Stack>

                                </Stack>
                            </Box>

                            <Input
                                type="file"
                                height="100%"
                                width="100%"
                                top="0"
                                left="0"
                                opacity="0"
                                aria-hidden="true"
                                accept="image/*"
                            />
                        </Box>
                    </Box>
                </AspectRatio>
            </Box>

            <Divider mt='10' />

            <Box mt='10' ml='20'>
                <Text as='b' fontSize='lg' >Event Date</Text>
            </Box>

            <Flex ml='20' mb='3'>
                <FormControl mt='2' mb='3'>
                    <Text mt={3}  >Event Start Date</Text>
                    <Datepicker />
                    <Text mt='3'  >Event End Date</Text>
                    <Datepicker />

                    <FormHelperText>Maximum for Start and End Date is 1 year from today</FormHelperText>
                </FormControl>

            </Flex>

            <Divider mb='3' />

            <Box ml='20' mb='3'>
                <Text as='b' fontSize='lg'>Promotion</Text>
                <FormControl>
                    <Checkbox mt='3'>Discount Voucher</Checkbox>
                </FormControl>
            </Box>

            <Button mt='3' mb='3' ml='20'>Submit Event</Button>

            <Footer />
        </>
    )
}

export default CreateEventView