import React, {Component, Fragment} from 'react';
import {Card,Container,Row,Col,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

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
                                    <h1 className="text-white">
                                    <CountUp start={0} end={100}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayeCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                     
                                    </h1>
                                    <h4 className="text-white">Total Project</h4>
                                    <hr className="bg-white w-25" />
                                </Col>
                                <Col md={6} sm={12} className="text-center">
                                <h1 className="text-white">
                                    <CountUp start={0} end={100}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayeCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                     
                                    </h1>
                                    <h4 className="text-white">Total Project</h4>
                                    <hr className="bg-white w-25" />
                                </Col>
                                 </Row>
                                
                             </Col>
                             
                             <Col lg={4} md={12} sm={12} className="sumarryCard text-center">
                                <Card style={{ width: '18rem' }}>
                                <Card.Title>How I Work</Card.Title>
                                    
                                    <Card.Body className="summaryLastCard">
                                    
                                        <p><FontAwesomeIcon icon={faCheckCircle} /> SoftWare Requirment</p>
                                        <p><FontAwesomeIcon icon={faCheckCircle} /> Software Analysis</p>
                                        <p><FontAwesomeIcon icon={faCheckCircle} /> Web Development</p>
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