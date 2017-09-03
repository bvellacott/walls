import { El, Div, text, H1, Svg, Link, Text, Figcaption, style } from 'bdom'
import RouteList from './components/RouteList'
import Wall from './components/Wall'
import Room from './components/Room'
import { bind } from './store'
import logo from './logo.svg'
import './App.scss'

const currentLocation = text('/King-Dom')
const list = new RouteList()

const Room1 = (
<Room x="100" y="100" width="200%" height="200%" walls={[{
  name: "wall1", x1: 0, y1: 0, x2: 600, y2: 250, 'stroke-width': 10, stroke: "blue"
}]} />)

window.Room1 = Room1

const House = (
<svg>
  <Room1/>
</svg>)

window.House = House

const App = (
<div class="App">
  <svg width="100%" height="100%">
    <House/>
  </svg>
</div>)

bind((state) => {
  currentLocation.nodeValue = state.path
})

export default App
