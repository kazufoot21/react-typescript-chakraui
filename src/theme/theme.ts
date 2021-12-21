import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  style: {
    global: {
      body: {
        backgroundColor: 'gray.100',
        color: 'gray.800',
        // components: {
        //   Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
        // },
      },
    },
  },
});

export default theme;
