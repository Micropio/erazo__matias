import './App.css';
import React from 'react';
import 'boxicons';
import Header from './Header/index';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <Header />
    <ItemListContainer />
    </div>
  );
}

export default App;
