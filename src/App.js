import { useState } from 'react';
import './App.css';
import { Button, Row, Col, Nav } from 'react-bootstrap';
import Calculator from './components/Calculator/Calculator';
import History from './components/History/History';
import { createContext } from 'react';

export const CalculatorContext = createContext({ history: null, setHistory: () => { } });

function App() {
  const [menu, selectMenu] = useState("calculator")

  const [history, setHistory] = useState([]);

  return (
    <div className={"App"} >
      <div class="container">
        <h1>Welcome to the calculator</h1>

        <Nav variant="pills" defaultActiveKey="/home">
          <Row className="mx-0">
            <Nav.Item as={Col} className="mx-2">
              <Nav.Link ><Button className='navitem'  as={Col} variant="info" onClick={() => selectMenu('calculator')} >Open Calculator</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item as={Col} className="mx-2">
              <Nav.Link > <Button className='navitem' as={Col} variant="info" onClick={() => selectMenu('history')}>History</Button></Nav.Link>
            </Nav.Item>
          </Row>
        </Nav>
        <CalculatorContext.Provider value={{ history, setHistory }}>
          {menu && menu === "calculator" ? <Calculator /> : <History />}
        </CalculatorContext.Provider>
      </div>
    </div>
  );
}

export default App;
