import Logo from './components/logo';
import './App.css';
import {OpcaoHeader, IconeHeader} from './components/header/header';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcaoHeader></OpcaoHeader>
        <IconeHeader></IconeHeader>        
      </header>
    </div>
  );
}

export default App;
