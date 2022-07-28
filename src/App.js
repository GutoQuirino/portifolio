import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Sobre from './Pages/Sobre';
import Projetos from './Pages/Projetos';
import Contatos from './Pages/Contatos';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/" className='menu'>Sobre</Link>
        </li>
        <li>
          <Link to="/Projetos" className='menu'>Projetos</Link>
        </li>
        <li>
          <Link to="/Contatos" className='menu'>Contatos</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' exact='true' element={<Sobre />} ></Route>
        <Route path='/Projetos' element={<Projetos />}></Route>
        <Route path='/Contatos' element={<Contatos />}></Route>
      </Routes>
    </Router>
  );
}

export default App;