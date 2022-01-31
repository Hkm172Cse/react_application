import React, {Component, Fragment} from 'react';

import {Container,Row,Col,Button} from 'react-bootstrap';

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
               <Container fluid={true} className="topFixedBanner p-0">
                   <div className='overlay'>
                       <Container className="topContain">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">SOFTWARE ENGINNER</h1>
                                    <h4 class="topSubTitle">Mobile and Web Application</h4>
                                    <Button variant="primary">Primary</Button>
                                </Col>
                            </Row>
                       </Container>
                   </div>
               </Container>
            </Fragment>
        );
    }
}
export default TopBanner;