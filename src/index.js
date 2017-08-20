import { element } from 'bdom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.getElementById('root').appendChild(<App />)
registerServiceWorker();
