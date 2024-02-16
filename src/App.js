import './App.css';
import { Perfil } from './components/Perfil.js';

function App() {
  const users = [
    {
      nombre: "Brais Moure",
      empresa: "Moures Dev",
      pais: "España",
      cargo: "Ing. Software",
      descripcion: "Desarrollador y divulgador.",
    },
    {
      nombre: "Ada Lovelace",
      empresa: "-",
      pais: "Inglaterra",
      cargo: "Matemática, traductora y escritora",
      descripcion: "Se le considera como la primer programadora informática",
    },
    {
      nombre: "Linus Torvald",
      empresa: "Linux",
      pais: "Finlandia",
      cargo: "Ing. Software",
      descripcion: "Creador de Linux",
    }
  ];
  return (
      <div className="App">
      <h1>Los Favs:</h1>
      {users.map((user) => (
        <Perfil 
        nombre={user.nombre}
        empresa={user.empresa}
        pais={user.pais}
        cargo={user.cargo}
        descripcion={user.descripcion}
        />
      ))}
    </div>
  );
}

export default App;
