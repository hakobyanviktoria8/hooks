import logo from './logo.svg';
import './App.css';
import UseState from './hooks/UseState';
import UseReducer from './hooks/UseReducer';

function App() {
  return (
    <div className="App">
      <UseState/>
      <hr/>
      <UseReducer/>
    </div>
  );
}

export default App;
