import { El, Div, text } from 'bdom'
import RouteList from './components/RouteList'
import { dispatch, subscribe, getState, bind } from './store'
import { navigate } from './history/actions'
import { keepOnParentStart } from 'bdom-keep-order/es6'
import logo from './logo.svg'
import './App.css'

class App extends Div {
  constructor(props) {
    super(props);
    this.className = 'App'
    this.currentLocation = text('/King-Dom')

    const list = new RouteList()

    this.appendChild(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to King-Dom</h2>
        {list}
        <h3>{this.currentLocation}</h3>
      </div>
    )
    this.appendChild(
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    )
  }

  render = bind((state) => {
    this.currentLocation.nodeValue = state.path
  })
}

export default App
