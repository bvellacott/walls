import { El, text } from 'bdom'
import { keepOnParentStart } from 'bdom-keep-order/es6'
import { dispatch, bind } from '../store'
import { navigate } from '../history/actions'
import './Wall.scss'


function Wall(props) {
  return <line class="Wall" {...props} />
}

export default Wall
