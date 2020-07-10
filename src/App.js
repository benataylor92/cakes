import React, { useContext } from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Routes/Navigation';
import { Auth0Context } from './contexts/auth0-context';

function App() {
  const auth0 = useContext(Auth0Context);

  return (
    <div className="App">
          <Header />
          <Navigation />
          {auth0.message}
          <Footer />
    </div>
  );
}

export default App;
