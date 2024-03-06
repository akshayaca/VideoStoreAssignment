import React from 'react';
import Header from './Header';
import BaseComponent from './BaseComponent'; 
import Footer from './Footer';
import '../css/App.css';

const App = () => (
  <div className="App min-h-screen flex flex-col">
  <Header />
  <main className="bg-black flex-grow">
  <BaseComponent />
  </main>
  <Footer />
</div>
);


export default App;
