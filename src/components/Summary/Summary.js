import React, {Component, Fragment} from 'react';
import {Card,Container,Row,Col,Button} from 'react-bootstrap';
class Summary extends Component{
    

    render(){
        return (
            <Fragment>
            <Container fluid={true} className="summaryBanner mt-5 p-0">
                <div className='summaryOverlay'>
                    <Container className="text-center">
                         <Row>
                             <Col lg={8} className="countNum">
                                 <Row>
                                 <Col md={6} sm={12} className="text-center">
                                    <h1 className="text-white">100</h1>
                                    <h4 className="text-white">Total Project</h4>
                                    <hr className="bg-white w-25" />
                                </Col>
                                <Col md={6} sm={12} className="text-center">
                                <h1 className="text-white">100</h1>
                                    <h4 className="text-white">Total Project</h4>
                                    <hr className="bg-white w-25" />
                                </Col>
                                 </Row>
                                
                             </Col>
                             
                             <Col lg={4} className="sumarryCard text-center">
                                <Card style={{ width: '18rem' }}>
                                    
                                    <Card.Body>
                                    <Card.Title>How I Work</Card.Title>
                                        <p>SoftWare Requirment</p>
                                        <p>Software Analysis</p>
                                        <p>Web Development</p>
                                    </Card.Body>
                                </Card>
                             </Col>
                         </Row>
                    </Container>
                </div>
            </Container>
         </Fragment>

        );
    }
}
export default Summary;