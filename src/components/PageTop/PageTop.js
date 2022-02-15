import React, {Component,Fragment} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

class PageTop extends Component{
    render(){
        return(
            <Fragment>
            <Container fluid={true} className="topFixedBanner p-0">
                <div className='overlay'>
                    <Container className="topContain">
                         <Row>
                             <Col className="text-center">
                                 <h4 class="topSubTitle">{this.props.pageTopTitle}</h4>
                             </Col>
                         </Row>
                    </Container>
                </div>
            </Container>
         </Fragment>
        );
    }
}

export default PageTop;