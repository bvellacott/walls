import { El, text } from 'bdom'
import { keepOnParentStart } from 'bdom-keep-order/es6'
import { dispatch, bind } from '../store'
import { navigate } from '../history/actions'

class RouteList extends El {
	constructor(props) {
		super('ul', props)
		
		const keeper = keepOnParentStart(this, [
      [ path => path !== '/King-Dom', <li><a onclick={ () => dispatch(navigate('/King-Dom')) }>Go to King-Dom</a></li> ],
      [ path => path !== '/React', <li><a onclick={ () => dispatch(navigate('/React')) }>Go to React</a></li> ],
      [ path => path !== '/Ember', <li><a onclick={ () => dispatch(navigate('/Ember')) }>Go to Ember</a></li> ],
      [ path => path !== '/Angular', <li><a onclick={ () => dispatch(navigate('/Angular')) }>Go to Angular</a></li> ],
      [ path => path !== '/Backbone', <li><a onclick={ () => dispatch(navigate('/Backbone')) }>Go to Backbone</a></li> ],
      [ path => path !== '/Knockout', <li><a onclick={ () => dispatch(navigate('/Knockout')) }>Go to Knockout</a></li> ],
      [ path => path !== '/Text-Node', text("I'm a text node") ],
		])

		this.keep = keeper.keep
		this.reset = keeper.reset

   	this.keep('/King-Dom')
 	}

  render = bind((state) => {
    this.keep(state.path)
  })
}

export default RouteList
