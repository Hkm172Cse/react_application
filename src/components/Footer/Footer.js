import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Footer extends Component{
    render(){
        return(
            <Fragment>
                <Container claasName="footerSection">
                    <Row>
                        <Col>
                        <h2 className="text-dark footerTitle">Follow Me</h2>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faFacebook} />Facebook</p>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faYoutube}/>youtube</p>

                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faFacebook} />Facebook</p>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faYoutube}/>youtube</p>
                        </Col>
                        <Col>
                        <h2 className="text-dark footerTitle">Follow Me</h2>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faFacebook} />Facebook</p>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faYoutube}/>youtube</p>

                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faFacebook} />Facebook</p>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faYoutube}/>youtube</p>
                        </Col>
                        <Col>
                        <h2 className="text-dark footerTitle">Follow Me</h2>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faFacebook} />Facebook</p>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faYoutube}/>youtube</p>

                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faFacebook} />Facebook</p>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faYoutube}/>youtube</p>
                        </Col>
                        <Col>
                        <h2 className="text-dark footerTitle">Follow Me</h2>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faFacebook} />Facebook</p>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faYoutube}/>youtube</p>

                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faFacebook} />Facebook</p>
                        <p className="text-dark m-0"> <FontAwesomeIcon className="mr-3" icon={faYoutube}/>youtube</p>
                        </Col>
                    </Row>
                   
                </Container>
                <Row className="container-fluid bg-info mt-5">
                        <h3 className="footerHead">Copy Right Azizul Hakim</h3>
                </Row>

            </Fragment>
        );
    }
}
export default Footer;