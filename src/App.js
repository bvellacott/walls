import { element, Div } from 'bdom';
import logo from './logo.svg';
import './App.css';

class App extends Div {
  constructor(props) {
    super(props);
    this.className = 'App'
    this.appendChild(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    )
    this.appendChild(
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    )
  }
  render() { console.log('rendering...') }
}

export default App;
