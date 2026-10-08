import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App.jsx';
import './styles.css';

const theme = createTheme({ palette: { mode: 'light', primary: { main: '#5b5bd6' }, secondary: { main: '#15a88a' }, background: { default: '#f6f7fb', paper: '#fff' }, text: { primary: '#202438', secondary: '#777d91' }, success: { main: '#138a69' }, warning: { main: '#dc9225' }, error: { main: '#cf5262' } }, shape: { borderRadius: 12 }, typography: { fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', h4: { fontWeight: 750, letterSpacing: '-.04em' }, h5: { fontWeight: 720, letterSpacing: '-.03em' }, button: { textTransform: 'none', fontWeight: 650 } }, components: { MuiCard: { styleOverrides: { root: { border: '1px solid #e9eaf1', boxShadow: '0 4px 18px rgba(33,38,68,.035)' } } }, MuiButton: { defaultProps: { disableElevation: true } } } });
createRoot(document.getElementById('root')).render(<React.StrictMode><ThemeProvider theme={theme}><CssBaseline/><BrowserRouter><App/></BrowserRouter></ThemeProvider></React.StrictMode>);
