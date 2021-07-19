import Apps from "./Apps";
import Login from "./Login/Login"
// import the reducer
import reducer from "./reducer/reducer"
// import createStore
// createstore used to create the store object
// import applyMiddleware
// applyMiddleware() function used to apply the "saga" middleware to store object
import {createStore,applyMiddleware} from "react-redux"
// import provider
// Provider makes the store avaliability to component
import {Provider} from "react-redux"
//import saga
import {createSagaMiddleware} from "redux-saga"
import {login_fun} from "./sagas/saga"
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
// activate the generate function
sagaMiddleware.run(login_fun)

function App() {
  return (
    <div>
      <Apps/>
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
}

export default App;
