import './App.css';
import NavBar from './components/NavBarTop/NavBar';
import NavBarBottom from './components/NavBarBottom/NavBarBottom';
import ItemList from './components/Main/ItemList/ItemList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <NavBarBottom/>
      <ItemList
      greeting="Categorias"/>
    </div>
  );
}

export default App;
