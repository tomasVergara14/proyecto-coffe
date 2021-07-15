import './App.css';
import NavBarTotal from './components/NavBarTotal/NavBarTotal';
import ItemList from './components/Main/ItemList/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBarTotal/>
      <ItemList
      greeting="Categorias"/>
      <ItemCount initial= "1" stockItem="5" />
    </div>
  );
}

export default App;
