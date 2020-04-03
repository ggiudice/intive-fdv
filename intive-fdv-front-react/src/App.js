import React from 'react';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import NavBar from './components';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <NavBar />
        <Container fluid className="container-custom">
          <Routes/>
        </Container>
      </BrowserRouter>
    )
  }
};

export default App;