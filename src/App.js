import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBarTotal from './components/NavBarTotal/NavBarTotal';
import Us from './components/Main/Us/Us';
import Contact from './components/Main/Contact/Contact';
import SendEmailForm from './components/Main/Contact/SendEmail/SendEmailForm';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/Main/ItemList/ItemList';
import CoffeItems from './components/Main/CoffeItems/CoffeItems';
import Cart from './components/Cart/Cart';
import CartContextProvider from './handlers/Context/CartContext';
import QuantityContextProvider from './handlers/Context/QuantityContext';
import ProductContextProvider from './handlers/Context/ProductContext';

function App() {
  return (
    <BrowserRouter>

    <CartContextProvider>
    <QuantityContextProvider>
    <ProductContextProvider>

      <div className="App">
      <NavBarTotal/>
      <Switch>
        
          <Route exact path="/" >
            <ItemListContainer/>
            <CoffeItems/>            
          </Route>
          <Route exact path="/us">
            <Us/>
          </Route>
          <Route exact path="/contact" >
            <Contact/>
          </Route>
          <Route exact path="/contact/mail">
            <SendEmailForm/>
          </Route>
          <Route exact path="/category/:idCategory" >
            <ItemListContainer/>
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

    </ProductContextProvider>
    </QuantityContextProvider>
    </CartContextProvider>

    </BrowserRouter>
  );
}

export default App;
