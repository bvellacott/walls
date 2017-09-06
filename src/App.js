import { El, Div, text, H1, Svg, Link, Text, Figcaption, style } from 'bdom'
import RouteList from './components/RouteList'
import Wall from './components/Wall'
import Room from './components/Room'
import { dispatch, getState, bind } from './store'
import { navigate } from './history/actions'
import logo from './logo.svg'
import './App.scss'

const currentLocation = text('/King-Dom')
const routes = new RouteList()

const Room1 = (
<Room x={0} y={0} name="Kids room" walls={[
	{ name: "wall1", x1: 350, y1: 350, x2: 450, y2: 350, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall2", x1: 455, y1: 345, x2: 455, y2: 50, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall3", x1: 450, y1: 45, x2: 50, y2: 45, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall4", x1: 45, y1: 50, x2: 45, y2: 345, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall5", x1: 50, y1: 350, x2: 250, y2: 350, 'stroke-width': 10, stroke: "blue" },
]} />)

const Room2 = (
<Room x={475} y={0} name="Parents room" walls={[
	{ name: "wall1", x1: 250, y1: 350, x2: 550, y2: 350, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall2", x1: 555, y1: 345, x2: 555, y2: 50, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall3", x1: 550, y1: 45, x2: 50, y2: 45, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall4", x1: 45, y1: 50, x2: 45, y2: 345, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall5", x1: 50, y1: 350, x2: 150, y2: 350, 'stroke-width': 10, stroke: "blue" },
]} />)

const Room3 = (
<Room x={1055} y={0} name="Living room" walls={[
	{ name: "wall1", x1: 555, y1: 600, x2: 555, y2: 50, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall2", x1: 550, y1: 45, x2: 50, y2: 45, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall3", x1: 45, y1: 50, x2: 45, y2: 390, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall4", x1: 45, y1: 500, x2: 45, y2: 600, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall5", x1: 50, y1: 605, x2: 550, y2: 605, 'stroke-width': 10, stroke: "blue" },
]} />)

const Room4 = (
<Room x={0} y={350} name="Corridoor" walls={[
	{ name: "wall1", x1: 50, y1: 45, x2: 250, y2: 45, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall2", x1: 255, y1: 5, x2: 255, y2: 40, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall3", x1: 350, y1: 45, x2: 625, y2: 45, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall4", x1: 345, y1: 5, x2: 345, y2: 40, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall4", x1: 630, y1: 5, x2: 630, y2: 40, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall4", x1: 720, y1: 5, x2: 720, y2: 40, 'stroke-width': 10, stroke: "blue" },

	{ name: "wall3", x1: 725, y1: 45, x2: 1095, y2: 45, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall4", x1: 1095, y1: 145, x2: 1040, y2: 145, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall4", x1: 1035, y1: 150, x2: 1035, y2: 250, 'stroke-width': 10, stroke: "blue" },
	{ name: "wall4", x1: 1030, y1: 255, x2: 50, y2: 255, 'stroke-width': 10, stroke: "blue" },
]} />)

// alert(getState().path)
const House = (
<svg>
  <Room1/>
  <Room2/>
  <Room3/>
  <Room4/>
</svg>)

window.House = House

const list = (
<ul class='list'>
	<li><a onclick={ () => dispatch(navigate((100) + ':' + (150))) } >Kids room</a></li>
	<li><a onclick={ () => dispatch(navigate((175) + ':' + (150))) } >Parents room</a></li>
	<li><a onclick={ () => dispatch(navigate((155) + ':' + (150))) } >Living room</a></li>
	<li><a onclick={ () => dispatch(navigate((100) + ':' + (-200))) } >Corridoor</a></li>
</ul>
)

const view = (
<div class="view" >
  <svg width="100%" height="100%">
    <House/>
  </svg>
</div>)


const App = (
<div class="App">
	<div className="view-container">
		{view}
	</div>
	{list}
</div>)

bind((state) => {
	console.log(state)
	const parts = state.path.split(':')
	view.style.left = parts[0] + 'px'
	view.style.top = parts[1] + 'px'
  // currentLocation.nodeValue = state.path
})

export default App
