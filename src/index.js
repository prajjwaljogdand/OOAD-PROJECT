import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';


const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>
);
