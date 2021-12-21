import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { memo, VFC } from 'react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
  } = props;
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody pr={0} bg="gray.100">
            <Button
              colorScheme="teal"
              variant="ghost"
              w="100%"
              _focus={{ boxShadow: 'none' }}
              onClick={onClickHome}
            >
              TOP
            </Button>
            <Button
              colorScheme="teal"
              variant="ghost"
              w="100%"
              _focus={{ boxShadow: 'none' }}
              onClick={onClickUserManagement}
            >
              User
            </Button>
            <Button
              colorScheme="teal"
              variant="ghost"
              w="100%"
              _focus={{ boxShadow: 'none' }}
              onClick={onClickSetting}
            >
              Setting
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
