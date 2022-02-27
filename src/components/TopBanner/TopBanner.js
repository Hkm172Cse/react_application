import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';



class TopBanner extends Component {
    constructor(){
        super();
        this.state ={
            title:"",
            text:""
        }
    }
    componentDidMount(){
        RestClient.getRequest(AppUrl.topTitle).then(response=>{
            let a = response.length;
                console.log(a);
                this.setState({title:response[1]['header'], text:response[1]['paragraph']});
        })

        // axios.get("http://localhost:8000/topbannerData")
        // .then(response=>{
        //     console.log(response.data);
        //     this.setState({title:response.data[0]['header'], text:response.data[0]['paragraph']});
           
        // }).catch(error=>{
        //     console.log(error);
        // })
    }
    render() {
        return (
            <Fragment>
               <Container fluid={true} className="topFixedBanner p-0">
                   <div className='overlay'>
                       <Container className="topContain">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">{this.state.title}</h1>
                                    <h4 class="topSubTitle">{this.state.text}</h4>
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