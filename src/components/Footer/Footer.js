import React, {Component,Fragment} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons';
import {Container,Row,Col} from 'react-bootstrap';

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
                        </Col>
                        <Col>
                        <h2 className="footerTitle">Follow Me</h2>
                        </Col>
                        <Col>
                        <h2 className="footerTitle">Follow Me</h2>
                        </Col>
                        <Col>
                        <h2 className="footerTitle">Follow Me</h2>
                        </Col>
                    </Row>
                   
                </Container>
                <Row className="container-fluid bg-info">
                        <h4>Copy Right Azizul Hakim</h4>
                </Row>

            </Fragment>
        );
    }
}
export default Footer;