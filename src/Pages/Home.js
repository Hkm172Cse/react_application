import React, { Component, Fragment } from 'react';
import Chart from '../components/Chart/Chart';
import ClientReview from '../components/ClientReview/ClientReview';
import Cources from '../components/Cources/Cources';
import Footer from '../components/Footer/Footer';
import Project from '../components/Project/Project';
import Services from '../components/Services/Services';
import Summary from '../components/Summary/Summary';
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Video from '../components/Video/Video';

class Home extends Component{
    render(){
        return(
            <Fragment>
                    <TopNavigation Title="Home"/>
                    <TopBanner/>
                    <Services/>
                    <Chart/>
                    <Summary/>
                    <Project/>
                    <Video/>
                    <Cources/>
                    <ClientReview/>
                    <Footer/>
            </Fragment>
        );
    }
}
export default Home;