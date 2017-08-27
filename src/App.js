import { element, Div, text } from 'bdom'
import { dispatch, subscribe, getState, bind } from './store'
import { navigate } from './history/actions'
import { keepOnParentStart, keepOnParentEnd } from 'bdom-keep-order'
import logo from './logo.svg'
import './App.css'

class App extends Div {
  constructor(props) {
    super(props);
    this.className = 'App'
    this.currentLocation = text('/King-Dom')

    const list = <ul/>
    this.keeper = keepOnParentStart(list, [
      [path => path !== '/King-Dom', <li><a onclick={ () => dispatch(navigate('/King-Dom')) }>Go to King-Dom</a></li> ],
      [ path => path !== '/React', <li><a onclick={ () => dispatch(navigate('/React')) }>Go to React</a></li> ],
      [ path => path !== '/Ember', <li><a onclick={ () => dispatch(navigate('/Ember')) }>Go to Ember</a></li> ],
      [ path => path !== '/Angular', <li><a onclick={ () => dispatch(navigate('/Angular')) }>Go to Angular</a></li> ],
      [ path => path !== '/Backbone', <li><a onclick={ () => dispatch(navigate('/Backbone')) }>Go to Backbone</a></li> ],
      [ path => path !== '/Knockout', <li><a onclick={ () => dispatch(navigate('/Knockout')) }>Go to Knockout</a></li> ],
      [ path => path !== '/Text-Node', text("I'm a text node") ],
    ])

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
    this.keeper('/King-Dom')
  }

  render = bind((state) => {
    this.currentLocation.nodeValue = state.path
    this.keeper(state.path)
  })
}

export default App
