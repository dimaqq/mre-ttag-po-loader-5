import logo from './logo.svg';
import './App.css';
import {t} from 'ttag';
import {addLocale} from "ttag";
import en from "./en.po";

addLocale("en", en);

function App() {
  const n = 42;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t`Use ${n} tabs`}</p>
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
      </header>
    </div>
  );
}

export default App;
