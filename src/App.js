import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBarTotal from './components/NavBarTotal/NavBarTotal';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
      <NavBarTotal/>
      <Switch>
          <Route exact path="/" >
            <ItemListContainer
            greeting="Categorias"/>
          </Route>
          <Route exact path="/detail/:id">
            <ItemDetailContainer/>
          </Route> 
      </Switch>      
      </div>
    </BrowserRouter>
  );
}

export default App;
