import React, {Component, Fragment} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {BarChart} from 'recharts';

class Chart extends  Component{
    constructor(){
        super();
        this.state={
            data:[
                {technology:'java', projects:70},
                {technology:'Kotlin', projects:54},
                {technology:'PHP', projects:98},
                {technology:'Bootstrap', projects:100},
                {technology:'SQL', projects:50},
                {technology:'React', projects:65},
                {technology:'Angular', projects:98},
                {technology:'Jequery', projects:87}
            ]

        }
    }

    render(){
        return (
            <Fragment>
                <Container className="text-center">
                  <h1 className="chartTitle">Azizul Hakim</h1>
                    <Row>
                        <Col className="text-justify" lg={6} md={12} sm={12}>
                            <BarChart>

                            </BarChart>
                        </Col>
                        <Col className="text-justify" lg={6} md={12} sm={12}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );  
    }
}

export default Chart;