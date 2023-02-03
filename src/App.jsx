import { Col, Container,Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";


const App = () => {


  return (
    <>
    <Container>
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        <Outlet/>
       
      </Col>
    </Row> 
       </Container>
        
    </>

)
}

export default App;


