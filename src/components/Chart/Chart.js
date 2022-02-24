import React, {Component, Fragment} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {BarChart,Bar,ResponsiveContainer,XAxis,Tooltip} from 'recharts';

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
        var blue = "#8884d8";
        return (
            <Fragment>
                <Container className="text-center">
                  <h1 className="chartTitle mb-5">My Work Flue Chart</h1>
                    <Row>
                        <Col className="text-justify" style={{width:'100%', height:'400px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                            <BarChart width={100} height={400} data={this.state.data}>
                                <XAxis dataKey="technology"></XAxis>
                                <Tooltip/>
                                <Bar dataKey="projects" fill={blue}></Bar>
                            </BarChart>
                            </ResponsiveContainer>
                            
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