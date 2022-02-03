import React, {Component, Fragment} from 'react';

import {Col,Row,Card,Button, Container} from 'react-bootstrap';
import projectImg from '../../asset/image/project3.webp';
import proImg2 from '../../asset/image/banner.jpg'


class Project extends Component{

    render(){
        return(
            <Fragment>
                
                <Container className="mt-5">
                <h1 className='ProjectHead'>Recent Projects</h1>
                <Row className="text-center">
                    <Col sm={12} md={6} lg={4}>
                        
                        <Card className="text-center p-0 mt-5">
                            <Card.Img variant="top" src={proImg2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text className="CartText">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className="text-center mt-5">
                            
                            <img className="projecCardImage" src={proImg2} alt=""/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text className="CartText">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className="text-center mt-5">
                            <Card.Img variant="top" src={proImg2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text className="CartText">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                </Container>
                
               
            </Fragment>

        );
    }

}
export default Project;