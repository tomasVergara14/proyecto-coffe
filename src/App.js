import './App.css';
import NavBarTotal from './components/NavBarTotal/NavBarTotal';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import ItemDetail from './components/Main/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
      <NavBarTotal/>
      <ItemListContainer
      greeting="Categorias"/>
      <ItemDetail></ItemDetail>
    </div>
  );
}

export default App;
