import './App.css';
import Dictionary from "./Dictionary.js";



function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> Dictionary </header>
        <Dictionary />
        <footer className="App-footer">
          <a href="https://github.com/anatick/anatick">Open-source code </a> by Ana Carraça
        </footer>
      </div>
    </div>
  );
}

export default App;
