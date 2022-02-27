import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import imageOne from '../../asset/image/phn.svg';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';


class Services extends Component{
    constructor(){
        super();
        this.state ={
                myData:[]
        }
    }
    componentDidMount(){
        RestClient.getRequest(AppUrl.service).then(result=>{
            this.setState({myData:result});
        });
    }
    render(){

        const myList = this.state.myData;
      const myView =   myList.map(getdata=>{
            return  <Col lg={4} md={6} className="mt-5">
                                <Card className='pt-3 pb-3'>
                                <img className='iconSize' src={imageOne}/>
                                <h2>{getdata['title']}</h2>
                                
                                </Card>
                        </Col>
        })
        return(
            <Fragment>
                <Container className='text-center'>
                    <h2 className='text-info mt-5'>Our Services</h2>
                    <Row className="mt-5 mb-5">
                        
                        {myView}
                       
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;