import React, {Component, Fragment} from 'react';
import {Navbar,Nav,NavDropdown } from 'react-bootstrap';
import whiteLogo from '../../asset/image/navLogo.svg';
import starLogo from '../../asset/image/logoicon.png';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
class TopNavigation extends Component{
    constructor(props){
       super();
        this.state={
            navVarTitle:"navTitle",
            navLogo:[whiteLogo],
            navBack:"navBrackground",
            navTitle:"navTitle",
            pageTilte:props.Title
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
        axios.get('http://localhost:8000/selectbymodel')
            .then(function (response) {
                
               console.log(response.data);
            })
            .catch(function (error) {
                
             console.log(error);
            })
    }
    render(){
        return (
            <Fragment>
                <title>{this.state.pageTilte}</title>
                <Navbar fixed="top" className={this.state.navBack} collapseOnSelect expand="lg" variant="dark">
                   
                    <Navbar.Brand className={this.state.navVarTitle,this.state.navTitle}><img src={this.state.navLogo} /> Azizul Hakim</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        
                        <Nav>
                       <Nav.Link><NavLink exact  activeStyle={{color: 'red'}} className={this.state.navTitle} to="/">Home</NavLink></Nav.Link> 
                       <Nav.Link><NavLink className={this.state.navTitle} to="/About">About</NavLink></Nav.Link>
                       <Nav.Link><NavLink className={this.state.navTitle} to="#deets">Portfolio</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={this.state.navTitle} to="/">Contact</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={this.state.navTitle}k  to="#deets">Services</NavLink></Nav.Link>
                        

                        
                        </Nav>
                    </Navbar.Collapse>
                    
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;