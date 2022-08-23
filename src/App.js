import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";


function App() {

  const socket = io("https://01b2-2a0c-5a81-5307-a500-38e5-bf57-e983-4634.ngrok.io/");

  socket.on("connect", () => {
    console.log(socket.connected); // true
  });

  socket.on('hola', data => console.log(data))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
