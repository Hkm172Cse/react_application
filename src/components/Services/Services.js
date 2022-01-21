import React, {Component,Fragment} from 'react';
import { Col, Container, Row,Card,Button } from 'react-bootstrap';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';

import imageOne from '../../asset/image/phn.svg';
import imagetwo from '../../asset/image/phn2.svg';
import imageThree from '../../asset/image/phn3.svg';
class Services extends Component{
    render(){
        return(
            <Fragment>
                <Container className='text-center'>
                    <h2 className='text-info mt-5'>Our Services</h2>
                    <Row className="mt-5 mb-5">
                        <Col>
                           <Card className="pt-3 pb-3">
                               <img className='iconSize' src={imageThree}/>
                               <h2>Azizul hakim</h2>
                               <p>my name azizul hakim i am full stack developer</p>
                           </Card>
                        </Col>
                        <Col>
                            <Card className='pt-3 pb-3'>
                               <img className='iconSize' src={imagetwo}/>
                               <h2>Azizul hakim</h2>
                               <p>my name azizul hakim i am full stack developer</p>
                           </Card>
                        </Col>
                        <Col>
                             <Card className='pt-3 pb-3'>
                               <img className='iconSize' src={imageOne}/>
                               <h2>Azizul hakim</h2>
                               <p>my name azizul hakim i am full stack developer</p>
                           </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;