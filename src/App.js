import logo from './logo.svg';
// import './App.css';
import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
// import store from './redux/store'
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/Home';

function App(props) {
  const dispatch = useDispatch();

  const newCount = useSelector(
    (state) => {
      return state.counter.count
    });

  // event handler
  const handleIncrease = () => {
    // dispatch actions
    // props.increaseCounter()

    dispatch(increaseCounter())

    // fire actions: dispatch = fire
    // store.dispatch({
    //   type: "abc",
    //   payload: { "nam": "Nguyen" }
    // })
  }


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>React Redux: {props.abc}</h1>
    //     <div>Count: {newCount}</div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>

    //   </header>
    // </div>
    <Home />
  );
}

// map state (redux store) + props react
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//     abc: state.counter.name
//   }
// }

// // map dispatch (redux) to props react
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// higher order component
// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
