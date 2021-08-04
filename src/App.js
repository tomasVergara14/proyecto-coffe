import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBarTotal from './components/NavBarTotal/NavBarTotal';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/Main/ItemList/ItemList';
import CoffeItems from './components/Main/CoffeItems/CoffeItems';
import Cart from './components/Cart/Cart';
import CartContextProvider from './handlers/Context/CartContext';

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <div className="App">
      <NavBarTotal/>
      <Switch>
        
          <Route exact path="/" >
            <ItemListContainer
            greeting="Categorias"/>
            <CoffeItems/>
            
          </Route>
          <Route exact path="/category/:categoryId" >
            <ItemListContainer
            greeting="Categorias"/>
            <ItemList/>
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer/>
          </Route> 
          <Route exact path="/cart" >
            <Cart/>
          </Route>
          
      </Switch>      
      </div>
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
