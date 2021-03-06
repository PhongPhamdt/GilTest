import React from 'react';
import Header from 'components/Header'
import ItemList from 'components/ItemList'

function App() {
  return (
    <div className="background">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <div className="container">
        <div className="title">Schedule ID: XXXXX</div>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
