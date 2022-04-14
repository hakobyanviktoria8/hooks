import logo from './logo.svg';
import './App.css';
import UseState from './hooks/UseState';
import UseReducer from './hooks/UseReducer';
import UseEffect from './hooks/UseEffect';
import UseRef from './hooks/UseRef';
import UseContext from './hooks/contextHook/UseContext';

function App() {
  return (
    <div className="App">
      <UseState/>
      <hr/>
      <UseReducer/>
      <hr/>
      <UseEffect/>
      <hr/>
      <UseRef/>
      <hr/>
      <UseContext/>
    </div>
  );
}

export default App;
