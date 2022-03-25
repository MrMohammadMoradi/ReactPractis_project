import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import './App.css';
import NavBar from './components/NavBar';
import SearchMenu from './components/SearchMenu';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchMenu/>
      
    </div>
  );
}

export default App;
