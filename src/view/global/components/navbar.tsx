'use client'

import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Center, Flex, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, MenuButton, Spacer, Avatar, Divider } from '@chakra-ui/react'
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import { useAppSelector, useAppDispatch } from '../../../lib/hooks';
import { signOut } from "../../../lib/features/auth/authSlice";


import React from 'react';

export default function Navbar() {

  const router = useRouter();
  const { isLogin } = useAppSelector((state) => state.auth.status);
  const dispatch = useAppDispatch();


  return (

    <Flex
      alignItems='center'
      bg='black'
      p='20px'>

      <Box ml='100px'>
        <Link href="/">
          <Image
            w='135px'
            h='50px'
            src='https://res.cloudinary.com/dhioc6nup/image/upload/v1713109589/mini%20project/yahmax8x0aq3sf9zj7ya.png' alt='Gambar Logo' />
        </Link>
      </Box>

      <Box ml='50px'>
        <InputGroup>
          <InputLeftElement pointerEvents="none"
            children={<SearchIcon color="grey" w='15px' />} />
          <Input
            bg='white'
            w='600px'
            h='40px'
            type='search'
            color='grey'
            fontSize='medium'
            placeholder='Search by artist, event or venue' padding="0 40px" />
        </InputGroup>
      </Box>

      <Box
        ml='110'>

        
        <ButtonGroup gap='2'>

        {isLogin == false ? (

          <>
          </>
        ) : (
          <Link href='/tickets'>
          <Button color='white' bgColor='black' variant='outline'>
            Tickets
          </Button>
          </Link>
        )}


        {isLogin == false ? (
          <>
          </>
        ) : (
          <Link href="/create-event">
            <Button color='white' bgColor='black' variant='outline' >
              Create Event
            </Button>
          </Link>
        )}

        {isLogin == false ? (
          <Link href='/login'>
            <Button
              color='white'
              bgColor='black'
              variant='outline' >
              Log in
            </Button>
          </Link>
        ) : (

          <Link href='/login'>
            <Button
              color='white'
              bgColor='black'
              variant='outline'
              onClick={ () => {
                dispatch(signOut());
                router.push("/");
              }}
              >
              Log Out
            </Button>
          </Link>
        )}

        </ButtonGroup>
      </Box>


      {isLogin == false ? (
        <>
        </>
      ) : (
      <Center height='50px'>
        <Divider ml='5' orientation='vertical' />
      </Center>
      )}

      {isLogin == false ? (
        <>
        </>
      ) : (
        
      <Link href='/profile' >
        <Avatar
          ml='5'
          size='sm'
          src='https://bit.ly/broken-link' />
      </Link>
      )}

    </Flex >


  )
}
