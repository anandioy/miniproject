import { Box, Center, Divider, Flex, List, ListItem, Text } from "@chakra-ui/layout"
import Navbar from "../global/components/navbar"
import { Avatar, Button } from "@chakra-ui/react"
import Footer from "../global/components/footer"
import Image from "next/image"
import slide1 from "../assets/hindia.jpeg"


export default function EventCardView() {
    return (
        <div>

            <Navbar />

            <Flex ml='10' mt='10' mb='10' >
                <Box
                    width='1000px'
                    height='900px'
                    ml='100'
                    borderWidth='1px'
                    borderRadius='lg'
                    justifyContent='center'
                >
                    <Center>
                        <Image
                            src={slide1}
                            alt='picture'
                            style={{
                                borderRadius: "20px",
                                height: '400px',
                                width: '700px',
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}
                        />
                    </Center>



                    <Text
                        as='b'
                        fontSize='sm'
                        mt='4'
                        textColor='black'
                        ml='15px'
                    >
                        DESCRIPTION
                    </Text>

                    <Center>
                        <Text
                            fontSize='sm'
                            mt='1'
                            textColor='black'
                        >
                        </Text>
                    </Center>


                    <Text
                        as='b'
                        fontSize='sm'
                        mt='10'
                        textColor='Black'
                        ml='15px'
                    >
                        RULES
                    </Text>

                    <List
                        ml='20px'
                        spacing='3'>
                        <ListItem>

                            1. Saat acara berlangsung dilarang membuat kericuhan
                        </ListItem>

                        <ListItem>
                            2. Tidak ada kamar mandi di area venue
                        </ListItem>

                        <ListItem>
                            3. Segala bentuk barang-barang termasuk kendaraan bukan tanggung jawab dari panitia
                        </ListItem>

                        <ListItem>
                            4. Barang yang sudah di sita tidak bisa dikembalikan
                        </ListItem>

                        <ListItem marginBottom='5'>
                            5. Tidak membuang sampah sembarangan
                        </ListItem>

                    </List>

                    <Text
                        ml='15px'
                        as='b'
                        color='black'>
                        DILARANG KERAS MEMBAWA BARANG-BARANG DI BAWAH :
                    </Text>

                    <List
                        ml='20px'
                        spacing='3'
                    >
                        <ListItem>
                            1. Kaca
                        </ListItem>

                        <ListItem>
                            2. Parfum
                        </ListItem>

                        <ListItem>
                            3. Senjata tajam
                        </ListItem>

                        <ListItem>
                            4. Hewan peliharaan cth: Beruang, harimau, etc
                        </ListItem>

                        <ListItem>
                            5. Minuman alkohol
                        </ListItem>
                    </List>

                    <Center>
                        <Text
                            fontSize='sm'
                            mt='1'
                            textColor='green'
                        >
                        </Text>
                    </Center>

                </Box>

                <Box
                    mt='150px'
                    ml='50px'
                    borderWidth='1px'
                    borderRadius='lg'
                    justifyContent='center'
                    width="300px"
                    height='115px'
                >

                    <Flex
                        flexDirection="column"
                        alignItems="flex-start"
                    >
                        <Flex
                            justifyContent="space-between"
                            width="100%"
                            pt='2'
                            pb='2'
                        >
                            <Text
                                fontSize='md'
                                mt='1'
                                pl='2'
                            >
                                Presale 1
                                <Button
                                    color='white'
                                    bg='blueviolet'
                                    ml='150px'
                                    fontSize='sm'
                                    width='70px'
                                    height='35px'
                                >BUY</Button>

                            </Text>
                            <Text
                                fontSize='sm'
                                mt='1.5'
                                ml='auto'
                                textAlign='right'
                                textColor='grey'
                            >
                            </Text>
                        </Flex>

                        <Divider />

                        <Flex justifyContent='space-between' width="100%"
                            pt='2'
                            pb='2'
                        >
                            <Text fontSize='md' mt='1' pl='2'>
                                Presale 2
                                <Button
                                    color='white'
                                    bg='blueviolet'
                                    ml='150px'
                                    fontSize='sm'
                                    width='70px'
                                    height='35px'
                                >BUY</Button>
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>

            <Footer />


        </div>
    )
}






