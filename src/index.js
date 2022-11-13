import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Land from './Land';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <StyledEngineProvider injectFirst>
   
     <Router>
      
         
              <Routes>
                <Route  path="/" element={<App/>} />
             
              </Routes>
          
          
             
  
      </Router>
      </StyledEngineProvider>

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//make a landing page to start this journey