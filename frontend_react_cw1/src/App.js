import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import HeaderComp from './components/HeaderComponent';
import RecipeFetch from './components/RecipeFetch';
import ShoppingList from './components/ShoppingList';
import Menu from './components/Menu';

import background from './images/background.png';

function App() {
  return (
    <Container fluid style={{ backgroundImage: `url(${background})` }}>
      <HeaderComp/>
      <RecipeFetch/>
      <ShoppingList/>
      <Menu/>
    </Container>
  );
}

export default App;
