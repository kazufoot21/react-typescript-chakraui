import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';
import theme from './theme/theme';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
