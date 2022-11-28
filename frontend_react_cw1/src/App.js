import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import HeaderRouter from './components/navigation/HeaderRouter';



function App() {
  return (
    <>
      <Container fluid>
        <HeaderRouter/>
      </Container>
    </>
  );
}

export default App;