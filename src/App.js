import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBarTotal from './components/NavBarTotal/NavBarTotal';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/Main/ItemList/ItemList';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
      <NavBarTotal/>
      <Switch>
        
          <Route exact path="/" >
            <ItemListContainer
            greeting="Categorias"/>
            <ItemList/>
          </Route>
          <Route exact path="/category/:id" >
            <ItemListContainer
            greeting="Categorias"/>
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer/>
          </Route> 
          <Route exact path="/cart" >
            <Cart/>
          </Route>
          
      </Switch>      
      </div>
    </BrowserRouter>
  );
}

export default App;
