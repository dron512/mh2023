import logo from './logo.svg';
import './App.css';
import axios from "axios";

function Dok() {
  return (
    <h1>D</h1>
  );
}

function App() {
  const asd = () => {
    axios.get("http://localhost:3001")
      .then((result) => {
        console.log(result);
      });
  }
  return (
    <body>
      <h1>hi</h1>
      <button onClick={asd}>
        버튼
      </button>
      <script lang='javascript'>
        console.log()
      </script>
    </body>
  );
}

export default App;
