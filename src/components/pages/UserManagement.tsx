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
import { useSelectUser } from '../../hooks/useSelectUser';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUser();
  const { onSelectUser, selectUser } = useSelectUser();
  console.log(selectUser);

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      console.log(id);
      onSelectUser({ id, users, onOpen });
      onOpen();
    },
    [users, onOpen, onSelectUser]
  );

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
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
