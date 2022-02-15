import React, {Component, Fragment} from 'react';
import {Container,Row} from 'react-bootstrap';

class AboutDescription extends Component{
    render(){
        return(
            <Fragment>
                    <Container>
                        <Row lg={12} md={12} sm={12}>
                            <h3 className="desTitle">Description Title</h3>
                            <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <hr className='hr'/>
                        </Row>
                        <Row lg={12} md={12} sm={12}>
                            <h3 className="desTitle">Description Title</h3>
                            <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <hr className='hr'/>
                        </Row>
                        <Row lg={12} md={12} sm={12}>
                            <h3 className="desTitle">Description Title</h3>
                            <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <hr className='hr'/>
                        </Row>
                    </Container>
            </Fragment>
        );
    }

}
export default AboutDescription;