import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChangeValueTypes, dispatch, IChangeValue, ILogged, LoggedTypes, useValueSelector, useIsLoggedSelector, store } from "./redux-component";

function App() {
  let value = useValueSelector();
  let isLogged = useIsLoggedSelector();

  const increment = () => dispatch({
    type: ChangeValueTypes.Increment,
    value: 1
  });
  
  const decrement = () => dispatch({
    type: ChangeValueTypes.Decrement,
    value: 1
  });
  
  const signin = () => dispatch({
    type: LoggedTypes.SIGN_IN,
  });
  
  const signout = () => dispatch({
    type: LoggedTypes.SIGN_OUT,
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          isLogged: {isLogged ? "true" : "false"}
        </p>
        <div onClick={signin}>click: login</div> <div onClick={signout}>click: logout</div>
        <p>
          value: {value}
        </p>
        <div onClick={increment}>click: add</div> <div onClick={decrement}>click: sub</div>
        <p/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link-redux"
          href="https://redux.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Redux
        </a>
        <p/>
      </header>
    </div>
  );
}

export default App;
