import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/product/:productId' exact component={ProductDetails} />
          <Route>not found</Route>
        </Switch>
      </Router>
      
    </div>
  );
}


export default App;
