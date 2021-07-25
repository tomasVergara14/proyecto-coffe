import './App.css';
import NavBarTotal from './components/NavBarTotal/NavBarTotal';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBarTotal/>
      <ItemListContainer
      greeting="Categorias"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
