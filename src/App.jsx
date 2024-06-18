

import './App.css'
import Perfil from './components/Perfil';
import Formulario from './components/Formulario';

function App() {

  const endereco = 'https://avatars.githubusercontent.com/u/87386434?v=4'; 

  return (
    <>
    <Perfil nome="Atila Fonseca" endereco={endereco} />
    <Formulario />
    </>
  )
}

export default App
