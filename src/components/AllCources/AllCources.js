import React, {Component, Fragment} from 'react';

import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import courseImg from '../../asset/image/teamCourse.webp';
import courseImg2 from '../../asset/image/courseImage2.jpg';

class AllCources extends Component{
    render(){
        return(
            <Fragment>
            <h1  className="text-info text-center mt-5 courseTitle">Our Courses</h1>
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <Row className="mt-5">
                            <Col lg={6} md={6} sm={12}>
                                <Card >
                                    <Card.Img ClassName="courseCardImg" src={courseImg} />
                                        
                                </Card>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                            <h3 className="couseHeading text-info">Web Development</h3>
                                <p className="coursePara">Web development team thing together how to solve project problem and how to dibaging programming garbeg
                                
                                 </p>
                                 <Button>Details</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    <Row className="mt-5">
                            <Col lg={6} md={6} sm={12}>
                                <Card >
                                    <Card.Img ClassName="courseCardImg" src={courseImg2} />
                                        
                                </Card>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                            <h3 className="couseHeading text-info">Web Development</h3>
                                <p className="coursePara">Web development team thing together how to solve project problem and how to dibaging programming garbeg
                                
                                 </p>
                                 <Button>Details</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12}>
                        <Row className="mt-5">
                            <Col lg={6} md={6} sm={12}>
                                <Card >
                                    <Card.Img ClassName="courseCardImg" src={courseImg} />
                                        
                                </Card>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                            <h3 className="couseHeading text-info">Web Development</h3>
                                <p className="coursePara">Web development team thing together how to solve project problem and how to dibaging programming garbeg
                                
                                 </p>
                                 <Button>Details</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    <Row className="mt-5">
                            <Col lg={6} md={6} sm={12}>
                                <Card >
                                    <Card.Img ClassName="courseCardImg" src={courseImg2} />
                                        
                                </Card>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                            <h3 className="couseHeading text-info">Web Development</h3>
                                <p className="coursePara">Web development team thing together how to solve project problem and how to dibaging programming garbeg
                                
                                 </p>
                                 <Button>Details</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
    }
}
export default AllCources;