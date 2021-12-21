import {
  Box,
  Flex,
  Heading,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { memo, VFC } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.200"
        color="gray.500"
        align="center"
        justify="space=between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            UserApp
          </Heading>
        </Flex>

        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link>User List</Link>
          </Box>
          <Link>Setting</Link>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
          pos="absolute"
          top="1"
          right="2"
          _focus={{ boxShadow: 'none' }}
        />
      </Flex>
      <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody pr={0} bg="gray.100">
              <Button
                colorScheme="teal"
                variant="ghost"
                w="100%"
                _focus={{ boxShadow: 'none' }}
              >
                TOP
              </Button>
              <Button
                colorScheme="teal"
                variant="ghost"
                w="100%"
                _focus={{ boxShadow: 'none' }}
              >
                User
              </Button>
              <Button
                colorScheme="teal"
                variant="ghost"
                w="100%"
                _focus={{ boxShadow: 'none' }}
              >
                Setting
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});

//buttonのアウトライン消す
//menubar 右に寄せたい
