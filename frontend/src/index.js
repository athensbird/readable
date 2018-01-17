import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const composeEnhancers =
 typeof window === "object" &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

registerServiceWorker();
