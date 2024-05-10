"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Box, Container, Text, Stack } from "@chakra-ui/layout"
import { Button } from  "@chakra-ui/react";

import instance from "@/utils/axiosInstance";


const VerifyView = () => {
  const params = useSearchParams();
  const router = useRouter();

  const verify = async () => {
    try {
      const param = params.toString().replace("token=", "");
      await instance.get("/auth/verify", {
        headers: {
          Authorization: `Bearer ${param}`,
        },
      });
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (

      <Container>
        <Box
          display="flex"
          sx={{
            marginTop: "5rem",
            padding: "5rem",
            justifyContent: "center",
          }}
        >
          <Stack spacing={8} alignItems="center">
            <Text variant="h5" sx={{ textAlign: "end" }}>
              Welcome to Festix, click the button below to verify your
              account
            </Text>
            <Button
              variant="contained"
              sx={{
                width: "15rem",
              }}
              onClick={() => verify()}
            >
              Verify
            </Button>
          </Stack>
        </Box>
      </Container>

  );
};

export default VerifyView;
