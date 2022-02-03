import React from 'react';
import TopBanner from "./components/TopBanner/TopBanner";
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Chart from './components/Chart/Chart';
import Summary from './components/Summary/Summary';
import Project from './components/Project/Project';
import Video from './components/Video/Video';
import Cources from './components/Cources/Cources';


function App() {
  return (
    <div>
      <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Chart/>
      <Summary/>
      <Project/>
      <Video/>
      <Cources/>
      


    </div>
  );
}

export default App;
