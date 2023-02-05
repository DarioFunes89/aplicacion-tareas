import './App.css';
import ListaDeTarea from './Component/ListaDeTareas';
import LogoFCC from './Component/LogoFCC'

function App() {
  return (
    <div className="App">
      <LogoFCC />
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <div><ListaDeTarea /></div>
      </div>
    </div>
  );
}

export default App;
