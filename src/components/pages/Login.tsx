import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { memo, VFC } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="gray.100" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          User APP
        </Heading>
        <Divider borderColor="blue.200" my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="User Id" />
          <PrimaryButton>Login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
