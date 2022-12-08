import '../../App.css';
import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';

const textoOpcao = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS']
const icons = [perfil,sacola]

function OpcaoHeader() {
    return(
        <ul className='Opcoes'>
        {textoOpcao.map(
          (texto) => (<li className='Opcao'><p>{texto}</p></li>)
        )}
      </ul>
    )
}

function IconeHeader() {
    return(
        <ul className='Icones'>
        {icons.map( 
          (icons) => (<li className='Icone'><img src={icons} alt=''></img></li>) 
          )}
      </ul>
    )
}

export {OpcaoHeader, IconeHeader}