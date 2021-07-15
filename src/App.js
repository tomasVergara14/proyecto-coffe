import './App.css';
import NavBar from './components/NavBarTop/NavBar';
import NavBarBottom from './components/NavBarBottom/NavBarBottom';
import ItemList from './components/Main/ItemList/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <NavBarBottom/>
      <ItemList
      greeting="Categorias"/>
      <ItemCount initial= "1" stockItem="5" />
    </div>
  );
}

export default App;
