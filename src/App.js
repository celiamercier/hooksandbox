
import {Button, Col, Container, Row} from 'react-bootstrap';
import {useCallback, useEffect, useState} from 'react';

function App({ name }) {
    const [count, setCount] = useState(0);
    const [dice, setDice] = useState()
    const [max] = useState(6);

    const roll = () => {
        setDice(Math.floor(Math.random() * max) + 1);
    };

    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, []);

    useEffect(() => {
        setDice(1);
    }, [setDice]);
    useEffect(() => {
        setDice(2);
    }, [setDice]);

    return (
      <Container>
          <Row>
              <Col xs={2}>
                  Roll a dice :
              </Col>
              <Col xs={1}>
                  <Button variant="primary" onClick={roll}>Roll</Button>
              </Col>
              <Col xs={1}>
                  <span>{dice}</span>
              </Col>
          </Row>
          <Row>
              <Col xs={2}>
                  Increment counter :
              </Col>
              <Col xs={1}>
                  <Button variant="primary" onClick={incrementCounter}>Add</Button>
              </Col>
              <Col xs={1}>
                  <span>{count}</span>
              </Col>
          </Row>
      </Container>
    );
}

export default App;
