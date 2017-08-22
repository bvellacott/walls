import { element, Div, text } from 'bdom'
import { dispatch, subscribe, getState } from './store'
import { navigate } from './history/actions'
import logo from './logo.svg'
import './App.css'

class App extends Div {
  constructor(props) {
    super(props);
    this.className = 'App'
    this.currentLocation = text('?')
    this.appendChild(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Dynamo</h2>
        <ul>
          <li><a onclick={ () => dispatch(navigate('/BDom')) }>Go to BDom</a></li>
          <li><a onclick={ () => dispatch(navigate('/React')) }>Go to React</a></li>
          <li><a onclick={ () => dispatch(navigate('/Ember')) }>Go to Ember</a></li>
          <li><a onclick={ () => dispatch(navigate('/Angular')) }>Go to Angular</a></li>
          <li><a onclick={ () => dispatch(navigate('/Backbone')) }>Go to Backbone</a></li>
          <li><a onclick={ () => dispatch(navigate('/Knockout')) }>Go to Knockout</a></li>
        </ul>
        <h3>{this.currentLocation}</h3>
      </div>
    )
    this.appendChild(
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    )

    this.render = () => {
      this.currentLocation.nodeValue = getState().path
    }

    subscribe(this.render)
  }

  
}

export default App
