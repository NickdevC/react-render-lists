import logo from './logo.svg';
import './App.css';
import RenderingLists from "./components/RenderingLists";

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Nick" age="34" /> */}
      <RenderingLists />
    </div>
  );
}

export default App;
