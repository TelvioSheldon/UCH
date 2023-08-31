import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { themeProvider } from './UI/ThemeProvider/LightTheme';

export const rootContainer = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootContainer);
root.render(
    <ThemeProvider theme={themeProvider}>
        <App />
    </ThemeProvider>
);
