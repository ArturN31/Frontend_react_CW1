import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import HeaderComp from './components/HeaderComponent';



function App() {
  return (
    <>
      <Container fluid>
        <HeaderComp/>
      </Container>
    </>
  );
}

export default App;
