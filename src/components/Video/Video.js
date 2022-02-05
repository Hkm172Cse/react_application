import  React, {Component,Fragment} from 'react';
import {Container,Card,Button,Modal} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';

class Video extends Component{

    constructor(){
        super();
        this.state ={
            show:false
        }
    }

    ModalClase = ()=>this.setState({show:false});
    ModelOpen  = ()=>this.setState({show:true});
    render(){
        return(
            <Fragment>
                 
                <Container className="videoSection">
                <Card className="videoCard">
                   
                    <Card.Body className="text-center">
                    <h3 className="couseHeading text-info">What i Do</h3>
                        <Card.Text className="VideoText">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        the card's content.
                        the card's content.

                        </Card.Text>
                        <Button style={{margin:'0px 0px 50px 0px', borderRadius:'15px'}}><FontAwesomeIcon className="playBtn" onClick={this.ModelOpen} icon={faPlayCircle} /></Button>
                    </Card.Body>
                </Card>

                <Modal show={this.state.show} onHide={this.ModalClase}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.ModalClase}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>
                </Container>
            </Fragment>

        );
    }
}
export default Video;