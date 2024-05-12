'use client'

import React, { ChangeEvent } from 'react';
import { useRouter } from "next/navigation";

import Navbar from "../../view/global/components/navbar";
import { Box } from '@chakra-ui/layout';
import {Container } from '@chakra-ui/react';

import Footer from '../../view/global/components/footer';

import { withFormik } from "formik";
import * as Yup from "yup";

import { FormValues, FormProps } from "./types";

import InnerForm from './components/innerForm'
import { createEvent } from '@/lib/features/event/createEvent';

const CreateEventSchema = Yup.object().shape({
    name: Yup.string().required("Event Name is required"),
    description: Yup.string().required("Event Description is required"),
    city: Yup.string().required("City where the event is taking place is required"),
    address: Yup.string().required("Address where the event is taking place is required"),
    start_date: Yup.string().required("Start date of event is required"),
    end_date: Yup.string().required("End date of event is required"),

  });

const CreateEventView = () => {
    const router = useRouter();

      const CreateEventForm = withFormik<FormProps, FormValues>({
        mapPropsToValues: (props) => ({
          name: props.initialName || "",
          description: props.initialDescription || "",
          city: props.initialCity || "",
          address: props.initialAddress || "",
          start_date: props.initialStartDate || "",
          end_date: props.initialStartDate || "",

        }),
        validationSchema: CreateEventSchema,
        enableReinitialize: true,
        handleSubmit({ name, description, city, address, start_date, end_date }: FormValues, { resetForm }) {
          createEvent({ name, description, city, address, start_date, end_date });
          resetForm();
          router.push("/");
        },
      })(InnerForm);

    return (
        <>
            <Navbar />
             <Container>
                 <Box
                    display="flex"
                    sx={{
                    justifyContent: "center",
                    marginTop: "2rem",
                    padding: "2rem",
                    }}
                    >
                        <CreateEventForm/>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default CreateEventView