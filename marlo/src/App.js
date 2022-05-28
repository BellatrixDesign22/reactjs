import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola Coders" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenidos a Marló</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más
        </a>
      </header>
    </div>
  );
}

export default App;
