import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { ChangeEvent, memo, useState, VFC } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="gray.100" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          User APP
        </Heading>
        <Divider borderColor="blue.200" my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="User Id"
            value={userId}
            onChange={onChangeUserId}
            bg="white.100"
            color="black"
            shadow="md"
          />
          <PrimaryButton
            disabled={userId === ''}
            loading={loading}
            onClick={onClickLogin}
          >
            Login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
