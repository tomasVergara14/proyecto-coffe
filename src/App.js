import './App.css';
import NavBarTotal from './components/NavBarTotal/NavBarTotal';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBarTotal/>
      <ItemListContainer
      greeting="Categorias"/>
      <ItemCount initial= "1" stockItem="5" />
    </div>
  );
}

export default App;
