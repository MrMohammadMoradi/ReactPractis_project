import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';
import NavBar from './components/NavBar';
import SearchMenu from './components/SearchMenu';
import Card from './components/Card';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <SearchMenu/>
      
      <div className='container bg-white px-0 mb-5'>
          <h3 className='titleSecion text-white bg-dark py-2 ps-4'>New Recipes</h3>
          <div className='subContainer d-flex flex-wrap'>
            <Card/>
            
          </div>
        </div>
      
      
    </div>
  );
}

export default App;
