import React from "react";
import  ReactDOM  from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../src/contexts/AuthContext';

ReactDOM.render(
   
    
      <AuthProvider>
      <Router>
        <App />
        </Router>
        </AuthProvider>,
    
    document.getElementById('root')
    
  );