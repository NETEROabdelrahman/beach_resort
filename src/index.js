//import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { createRoot } from 'react-dom/client';
import React from 'react';



const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
   

    <AppProvider>

        <App tab="home" />
   </AppProvider>

   
);