import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
