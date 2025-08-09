import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>E-Commerce Store</h1>
        </header>
        <main>
          <ProductList />
        </main>
        <footer className="App-footer">
          <p>Microservices Project</p>
        </footer>
      </div>
  );
}

export default App;
