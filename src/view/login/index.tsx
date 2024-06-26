"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import Navbar from '../../view/global/components/navbar';
import Footer from '../../view/global/components/footer';

import { withFormik } from "formik";
import * as Yup from "yup";

import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { signIn } from "../../lib/features/auth/authSlice";

import { FormValues, FormProps } from "../login/types";

import InnerForm from "../../view/login/components/innerForm";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});




const LoginView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
 
  const LoginForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      email: props.initialEmail || "",
      password: props.initialPassword || "",
    }),
    validationSchema: LoginSchema,
    enableReinitialize: true,
    handleSubmit({ email, password }: FormValues, { resetForm }) {
      dispatch
      (signIn({ email, password }));
      resetForm();
      router.push("/");
    },
  })(InnerForm);


    return (

        <div>


            <Navbar />
                <LoginForm />
            <Footer />

        </div>
    )
};

export default LoginView;
