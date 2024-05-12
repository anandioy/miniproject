import { Box, Center, Container, Link, Stack, Text } from '@chakra-ui/layout';
import { Button, Checkbox, FormControl, FormLabel, Flex, Heading, Input, InputProps } from '@chakra-ui/react';
import { FormikProps, Form, Field, FieldProps } from "formik";
import { FormValues } from "../types";
import Image from 'next/image';
import logo from '../../assets/mp logo.png';

interface StyledInputProps extends Omit<InputProps, 'size'> {
    field: FieldProps['field'];
}

const StyledInput: React.FC<StyledInputProps> = ({ field, ...rest }) => (
    <FormControl>
        <Input
            {...field}
            {...rest}
            border="1px solid #ccc"
            borderRadius="md"
            px="3"
            py="2"
        />
    </FormControl>
);

export default function InnerForm(props: FormikProps<FormValues>) {
    const { values, errors, touched, handleChange, handleSubmit, isSubmitting } = props;

    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Form onSubmit={handleSubmit}>
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Center>
                            <Image src={logo} width='70' alt='logo' />
                        </Center>
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                            <Text color="fg.muted">
                                Don't have an account? <Link href="/register">Sign up</Link>
                            </Text>
                        </Stack>
                    </Stack>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg.surface' }}
                        boxShadow={{ base: 'none', sm: 'md' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <Stack spacing="6">
                            <Stack spacing="5">
                                <FormLabel mb='-3'>Email</FormLabel>
                                <Field name="email">
                                    {({ field }: { field: FieldProps['field'] }) => (
                                        
                                        <StyledInput
                                            field={field}
                                            id="email"
                                            placeholder="Enter your email"
                                        />
                                    )}
                                </Field>
                                {touched.email && errors.email && (
                                    <Text color='red'>{errors.email}</Text>
                                )}
                            </Stack>
                            <Stack spacing="5">
                                <FormLabel mb='-3'>Password</FormLabel>
                                <Field name="password">
                                    {({ field }: { field: FieldProps['field'] }) => (
                                        <StyledInput
                                            field={field}
                                            id="password"
                                            placeholder="Enter your password"
                                            type="password"
                                        />
                                    )}
                                </Field>
                                {touched.password && errors.password && (
                                    <Text color='red'>{errors.password}</Text>
                                )}
                            </Stack>
                            <Flex justify="space-between">
                                <Checkbox defaultChecked>Remember me</Checkbox>
                                <Button variant="link" size="sm">Forgot password?</Button>
                            </Flex>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Login
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Form>
        </Container>
    );
}
