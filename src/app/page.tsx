'use client'

import { Box, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Navbar from "../view/global/components/navbar";

import Events from "./events/events";
import Footer from "../view/global/components/footer";
import Swipe from "../view/global/components/swiper"

export default function Home() {
  return (
    <div>

      <Navbar />
      <Swipe />
      <Events />
      <Footer />

    </div>
  );
}
