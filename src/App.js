import Logo from './components/logo';
import './App.css';
import perfil from './assets/perfil.svg';
import sacola from './assets/sacola.svg';

const textoOpcao = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS']
const icons = [perfil,sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='Opcoes'>
          {textoOpcao.map(
            (texto) => (<li className='Opcao'><p>{texto}</p></li>)
          )}
        </ul>

        <ul className='Icones'>
          {icons.map( 
            (icons) => (<li className='Icone'><img src={icons} alt=''></img></li>) 
            )}
        </ul>
      </header>
    </div>
  );
}

export default App;
