import logo from './logo.svg';
import './App.css';
import axios from "axios";

const DoA = () =>{
  return <h1>DoA5</h1>
};

function App() {
  const doRoot = () => {
    axios.get("http://localhost:3001")
    .then(result=>{
      console.log(result);
    });
  }
  return (
    <div className="App">
     {DoA()}     
     <DoA/>
     <button onClick={doRoot}>back호출</button>
    </div>
  );
}

export default App;
