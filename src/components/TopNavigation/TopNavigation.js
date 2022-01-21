import React, {Component, Fragment} from 'react';
import {Navbar,Nav,NavDropdown } from 'react-bootstrap';
import whiteLogo from '../../asset/image/navLogo.svg';
import starLogo from '../../asset/image/logoicon.png';
class TopNavigation extends Component{
    constructor(){
       super();
        this.state={
            navVarTitle:"navTitle",
            navLogo:[whiteLogo]
        }
        
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVarTitle:'navTitle',navLogo:[whiteLogo]})
        }else if(window.scrollY<100){
            this.setState({navVarTitle:'navScrol',navLogo:[starLogo]})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
    }
    render(){
        return (
            <Fragment>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                   
                    <Navbar.Brand className={this.state.navVarTitle}><img src={this.state.navLogo} /> Azizul Hakim</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                       
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link href="#deets">Courses</Nav.Link>
                        <Nav.Link href="#deets">Portfolio</Nav.Link>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                        <Nav.Link href="#deets">Services</Nav.Link>

                        
                        </Nav>
                    </Navbar.Collapse>
                    
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;