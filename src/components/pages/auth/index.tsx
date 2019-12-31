import React from 'react';
import { Flex, Box } from '@chakra-ui/core';

import SignInForm from './form';

function AuthComponent() {
    return (
        <Flex align="center" justify="center">
            <Box maxW="md" w="full">
                <SignInForm />  
            </Box>
        </Flex>
    );
}

export default AuthComponent;