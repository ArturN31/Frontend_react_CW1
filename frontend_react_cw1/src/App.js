import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HeaderComp from './components/HeaderComponent';
import RecipeFetch from './components/RecipeFetch';

function App() {

  return (
    <Container fluid>
      <HeaderComp/>
      <RecipeFetch/>
    </Container>
  );
}

export default App;
