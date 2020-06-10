import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Routes/Navigation';

function App() {
  return (
    <div className="App">
          <Header />
          <Navigation />
          <Footer />
    </div>
  );
}

export default App;
