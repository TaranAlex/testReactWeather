import React, { Component } from 'react';
import './App.css';

import "bootswatch/dist/journal/bootstrap.min.css";
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
        <div>
          <Navbar>
            <Container>
              <Navbar.Brand>
                React Simple Weather App
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Container>
            <Row>
              <Col md={4} sm={4}>
                <h3>Select a city</h3>
                <Nav
                    className="flex-column nav-pills"
                    stacked
                    activeKey={activePlace}
                    onSelect={index => {
                      this.setState({ activePlace: index });
                    }}
                >
                  {PLACES.map((place, index) => (
                      <Nav.Link key={index} eventKey={index}>{place.name}</Nav.Link>
                  ))}
                </Nav>
              </Col>
              <Col md={8} sm={8}>
                <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default App;
