import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import theme from './theme.js';
import './global.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ModalsProvider } from "@mantine/modals";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <AuthProvider>
          <ModalsProvider>
            <App/>
          </ModalsProvider>
        </AuthProvider>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
