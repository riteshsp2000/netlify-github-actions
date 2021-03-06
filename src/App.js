import logo from './logo.svg'
import './App.css'

// let google

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React and Deploy to Netlify with GitHub Actions!
        </a>
        <p>{process.env.REACT_APP_ENV_TRIAL}</p>
        <p>{process.env.REACT_APP_ENV_TRIAL2}</p>
      </header>
    </div>
  )
}

export default App
