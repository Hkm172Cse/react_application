import React, {Component, Fragment} from 'react';
import {Navbar,Nav,NavDropdown } from 'react-bootstrap';
import whiteLogo from '../../asset/image/navLogo.svg';
import starLogo from '../../asset/image/logoicon.png';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
class TopNavigation extends Component{
    constructor(){
       super();
        this.state={
            navVarTitle:"navTitle",
            navLogo:[whiteLogo],
            navBack:"navBrackground",
            navTitle:"navTitle"
        }
        
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVarTitle:'navTitle',navLogo:[whiteLogo],navBack:'navBrackground',navTitle:'navTitle'})
        }else if(window.scrollY<100){
            this.setState({navVarTitle:'navScrol',navLogo:[starLogo],navBack:'navBackScroll',navTitle:'navTitleScroll'})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
    }
    render(){
        return (
            <Fragment>
                <Navbar fixed="top" className={this.state.navBack} collapseOnSelect expand="lg" variant="dark">
                   
                    <Navbar.Brand className={this.state.navVarTitle,this.state.navTitle}><img src={this.state.navLogo} /> Azizul Hakim</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                       
                        </Nav>
                        <Nav>
                        <Nav.Link className={this.state.navTitle} href="#deets">Home</Nav.Link>
                        <Nav.Link className={this.state.navTitle} href="#deets">About</Nav.Link>
                        <Nav.Link className={this.state.navTitle} href="#deets">Courses</Nav.Link>
                        <Nav.Link className={this.state.navTitle} href="#deets">Portfolio</Nav.Link>
                        <Nav.Link className={this.state.navTitle} href="#deets">Contact</Nav.Link>
                        <Nav.Link className={this.state.navTitle}k  href="#deets">Services</Nav.Link>

                        
                        </Nav>
                    </Navbar.Collapse>
                    
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;