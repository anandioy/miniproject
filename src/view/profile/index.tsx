'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '../../view/global/components/navbar';
import Footer from '../../view/global/components/footer';
import { Box, Center, Divider, Text, Flex, Avatar, Button } from '@chakra-ui/react';
import { UserInt } from '@/interfaces/userInterface';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { getUserProfile } from '@/lib/features/user/userapi';

const ProfileView = () => {
    const [userData, setUserData] = useState<UserInt | null>(null);
    const authToken = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getUserProfile();
                setUserData(user);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    
    return (

        <div>

            <Navbar />

            <Flex ml='10' mt='10' mb='10' >
                <Box
                    ml='100'
                    borderWidth='1px'
                    borderRadius='lg'
                    pt='10px'
                    pl='100px'
                    pr='100px'
                    pb='80px'
                >
                    <Center>
                        <Avatar

                            size='xl'
                            src='https://bit.ly/broken-link' />

                    </Center>

                    <Center>
                        <Text
                            fontSize='lg'
                            mt='3'
                            as='b'
                        >
                            {userData?.fullname ?? 'No user data available'}
                        </Text>
                    </Center>

                    <Center>
                        <Text
                            fontSize='sm'
                            mt='3'
                        >
                            Jakarta, Indonesia
                        </Text>
                    </Center>

                    <Center>
                        <Text
                            as='i'
                            fontSize='xs'
                            mt='3'
                        >
                            {userData?.register_date}
                        </Text>
                    </Center>


                    <Box
                        borderWidth='1px'
                        borderRadius='lg'
                        mt='40px'
                        pl='10px'
                        pr='10px'
                        pb='10px'
                    >

                        <Center>
                            <Text
                                as='b'
                                fontSize='sm'
                                mt='4'
                                textColor='green'
                            >
                                Redeemed Points
                            </Text>
                        </Center>

                        <Center>
                            <Text
                                fontSize='sm'
                                mt='1'
                                textColor='green'
                            >
                                10,000
                            </Text>
                        </Center>

                    </Box>

                </Box>

                <Box
                    ml='50px'
                    mr='100px'
                    borderWidth='1px'
                    borderRadius='lg'
                    pt='10px'
                    pl='20px'
                    pr='20px'
                    pb='80px'
                    width="40%"
                >

                    <Flex
                        flexDirection="column"
                        alignItems="flex-start"
                    >
                        <Flex
                            justifyContent="space-between"
                            width="100%"
                        >
                            <Text
                                fontSize='md'
                                mt='1'
                            >
                                Full Name
                            </Text>
                            <Text
                                fontSize='sm'
                                mt='1.5'
                                ml='auto'
                                textAlign='right'
                                textColor='grey'
                            >
                                {userData?.fullname ?? 'No user data available'}
                            </Text>
                        </Flex>

                        <Divider />

                        <Flex justifyContent="space-between" width="100%">
                            <Text fontSize='md' mt='3'>Email</Text>
                            <Text
                                fontSize='sm'
                                mt='3.5'
                                ml='auto'
                                textAlign='right'
                                textColor='grey'
                            >
                                {userData?.email ?? 'No user data available'}
                            </Text>
                        </Flex>

                        <Divider />

                        <Flex justifyContent="space-between" width="100%">
                            <Text fontSize='md' mt='3'>Phone</Text>
                            <Text
                                fontSize='sm'
                                mt='3.5'
                                ml='auto'
                                textAlign='right'
                                textColor='grey'
                            >
                                {userData?.phone ?? 'No user data available'}
                            </Text>
                        </Flex>

                        <Divider />

                        <Flex justifyContent="space-between" width="100%">
                            <Text fontSize='md' mt='3'>Address</Text>
                            <Text
                                fontSize='sm'
                                mt='3.5'
                                ml='auto'
                                textAlign='right'
                                textColor='grey'
                            >
                                {userData?.address ?? 'No user data available'}
                            </Text>
                        </Flex>

                    </Flex>

                    <Divider />

                    <Center mt='30px'>
                        <Button fontSize='sm'>Edit Profile</Button>
                    </Center>

                    <Center mt='30px'>
                        <Button fontSize='sm'>Change Password</Button>
                    </Center>
                </Box>
            </Flex>

            <Footer />


        </div>
    )
}

export default ProfileView;