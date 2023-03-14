import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Body from './Components/Body';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
