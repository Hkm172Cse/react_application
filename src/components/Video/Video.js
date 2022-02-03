import  React, {Component,Fragment} from 'react';
import {Container,Card,Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';

class Video extends Component{
    render(){
        return(
            <Fragment>
                <Container className="videoSection">
                <Card className="videoCard">
                   
                    <Card.Body className="text-center">
                        
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        the card's content.
                        the card's content.

                        </Card.Text>
                        <Button style={{borderRadius:'50%'}}calssName="playBtn"><FontAwesomeIcon className="playBtn" icon={faPlayCircle} /></Button>
                    </Card.Body>
                </Card>
                </Container>
            </Fragment>

        );
    }
}
export default Video;