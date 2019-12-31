import React from 'react';
import { Formik } from 'formik';
import { FormControl, FormLabel, Input, Box } from '@chakra-ui/core';

function SignInForm() {

    const signInForm = {
        initialValues: { email: '', password: '' }
    };

    return (
        <Formik 
            {...signInForm}
            validate={values => {}}
            onSubmit={() => {}}>
                {({ values, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel htmlFor="email">Email address</FormLabel>
                            <Input type="text" id="email" />
                        </FormControl>
                    </form>
                )}
        </Formik>
    );
}

export default SignInForm;