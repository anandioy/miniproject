'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { useRef } from 'react';
import { makeStore, AppStore } from '../lib/store';

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <ChakraProvider>
      <Provider store={storeRef.current}>{children}</Provider>
    </ChakraProvider>
  );
}









// import { ChakraProvider } from '@chakra-ui/react'


// export function Providers({ children }: { children: React.ReactNode }) {
//   return <ChakraProvider>{children}</ChakraProvider>
// }