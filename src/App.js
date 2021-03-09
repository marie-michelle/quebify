/* Par Marie-Michelle Beaupré, 2020*/

import React from 'react';
import './App.css';
import { Accueil } from '../src/components/Accueil';
import { BarNav } from './components/BarNav';
import { AlbumSeul } from './components/AlbumSeul';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container fluid className="cardContenu">
       <Row className="pt-5 mt-5">
          <BarNav />
        </Row>
        <Row>
          <Accueil/>
        </Row>
    </Container>
  );
}

export default App;