import './App.css';
import axios from "axios";

function DoA() {
  return(<h1>Hello world</h1>);
}

function App() {
  const doRoot = () => {
    axios.get('http://localhost:3001')
    .then(result=>{
      console.log(result);
    })
  }
  return (
    <div className="App">
      <DoA/>
      <button onClick={doRoot}>back호출</button>
    </div>
  );
}

export default App;
