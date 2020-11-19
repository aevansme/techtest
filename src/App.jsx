import logo from './logo.svg';
import Weather from "./components/Weather/Weather"
import Quiz from "./components/Quiz/Quiz"
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather/>
      <Quiz/>
    </div>
  );
}

export default App;
