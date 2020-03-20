import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../stores/reducers';

export default ConfigureStore = () => {
    let store = createStore(reducers, applyMiddleware(thunk));
    return store;
}