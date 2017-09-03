import { El } from 'bdom'
import Wall from './Wall'

class Room extends El {
  constructor(props) {
    super('svg', {...props, ...{ walls: null }})
    this.title = <text>{props.name}</text>
    this.wallRegistry = {}
    this.wallEls = []

    this.appendChild(this.title)

    this.addWall = function(wall) {
      const wallEl = <Wall {...wall} />
      this.wallEls.push(wallEl)
      this.appendChild(wallEl)
      this.wallRegistry[wall.name] = this.wallEls.length-1
    }

    this.removeWall = function(wallName) {
      const index = this.wallRegistry[wallName]
      const wallEl = this.wallEls[index]
      this.removeChild(wallEl)
      delete this.wallRegistry[wallName]
      this.wallEls.splice(index, 1)
    }

    props.walls.forEach(wall => this.addWall(wall))
  }

}

export default Room
