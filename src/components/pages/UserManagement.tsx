import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { memo, VFC, useEffect, useCallback } from 'react';

import { UserCard } from '../organisms/user/UserCard';
import { useAllUser } from '../../hooks/userAllUser';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUser();
  useEffect(() => getUsers(), []);
  const onClickUser = useCallback(() => onOpen(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem mx="auto" key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
