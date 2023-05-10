import './App.css';
import axios from 'axios';

const DoA = () => {
  return (
    <div>
      <h1>DoA</h1>
    </div>
  )
}



function App() {
  const back123 = () => {
    axios.get('http://localhost:8000/')
      .then(response => {
        console.log(response)
      }
      )
  }
  return (
    <div className="App">
      <DoA />
      <div>
        <button onClick={back123}>Click me</button>
      </div>
    </div>
  );
}

export default App;
