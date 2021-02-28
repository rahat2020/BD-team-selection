import logo from './logo.svg';
import './App.css';
import button from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>this is paragraph</h1>
        <button className="btn btn-primary">click me</button>
      </header>
    </div>
  );
}

export default App;
