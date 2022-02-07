import React, {Component,Fragment} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import myProfile from '../../asset/image/CV_IMG.JPG';

class ClientRecview extends Component{
    constructor(){
        super();
        
    }
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay:true,
            vertical:true,
            verticalSwiping:true,
          };
        return(
            <Fragment>
                <Container>
                   <h2 className="meTitle text-info"> Here Me</h2>
                    <Slider {...settings} className="text-center">
                        <div>
                            <Row className="">
                                <Col lg={12} mg={12}>
                                        <div className="caruoselImgDiv">
                                            <img className="myProfile class-center" src={myProfile} alt=""/>  
                                        </div>
                                        <h2 className="profileTitle text-primary">Web Developer</h2>
                                        <p className="profileCol text-dark">
                                        Web Development Team Thing Together How To Solve Project Problem And How To Dibaging Programming Garbeg
                                        Web Development Team Thing Together How To Solve Project Problem And How To Dibaging Programming Garbeg
                                        </p>
                                   
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="">
                                <Col className="profileCol">
                                    <div className="caruoselImgDiv">
                                        <img className="myProfile class-center" src={myProfile} alt=""/>  
                                    </div>
                                    <h2 className="profileTitle text-primary">Web Developer</h2>
                                    <p  className="profileCol text-dark">
                                    Web Development Team Thing Together How To Solve Project Problem And How To Dibaging Programming Garbeg
                                    Web Development Team Thing Together How To Solve Project Problem And How To Dibaging Programming Garbeg
                                    </p>
                                
                                </Col>
                            </Row>
                        </div>
                        
                
                    </Slider>
                </Container>
                
                   
      
            </Fragment>

        );
    }
}
export default ClientRecview;