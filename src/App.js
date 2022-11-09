import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HeaderComp from './components/HeaderComponent';
import SearchComp from './components/SearchComponent';

function App() {

  return (
    <Container fluid>
      <HeaderComp/>
      <SearchComp/>
    </Container>
  );
}

export default App;
