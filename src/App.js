import logo from './logo.svg';
import './App.css';
import UseState from './hooks/UseState';
import UseReducer from './hooks/UseReducer';
import UseEffect from './hooks/UseEffect';

function App() {
  return (
    <div className="App">
      <UseState/>
      <hr/>
      <UseReducer/>
      <hr/>
      <UseEffect/>
      <hr/>
    </div>
  );
}

export default App;
