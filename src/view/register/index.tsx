'use client'

import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";

import { Container, Box, Stack, Text } from '@chakra-ui/layout'
import Navbar from '../global/components/navbar';
import Footer from '../global/components/footer';

import { withFormik } from "formik";
import * as Yup from "yup";

import { UserInt } from '../../interfaces/userInterface';
import { FormValues, FormProps } from "./types";

import InnerForm from './components/innerForm';
import instance from "../../utils/axiosInstance";


const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });


const RegisterView =  () => {
    const router = useRouter();

    const register = async ({ fullname, email, password, phone, address}: UserInt) => {
        try {
          const { data } = await instance.post("/auth/register", {
            fullname,
            email,
            password,
            phone,
            address
          });
          alert(data?.message);
        } catch (err) {
          console.log(err);
        }
      };   

      const RegisterForm = withFormik<FormProps, FormValues>({
        mapPropsToValues: (props) => ({
          fullname: props.initialFullname || "",
          email: props.initialEmail || "",
          password: props.initialPassword || "",
          phone: props.initialPhone || "",
          address: props.initialAddress || "",
        }),
        validationSchema: RegisterSchema,
        enableReinitialize: true,
        handleSubmit({ fullname, email, password, phone, address }: FormValues, { resetForm }) {
          register({ fullname, email, password, phone, address });
          resetForm();
          router.push("/login");
        },
      })(InnerForm);


return (
    <>
    <Navbar/>
    <Container>
        <Box
          display="flex"
          sx={{
            justifyContent: "center",
            marginTop: "2rem",
            padding: "2rem",
          }}
        >
            <RegisterForm />
        </Box>
      </Container>

    <Footer />
    </>
  )};

export default RegisterView;
