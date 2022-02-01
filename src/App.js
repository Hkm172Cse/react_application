import React from 'react';
import TopBanner from "./components/TopBanner/TopBanner";
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Chart from './components/Chart/Chart';
import Summary from './components/Summary/Summary';


function App() {
  return (
    <div>
      <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Chart/>
      <Summary/>
      


    </div>
  );
}

export default App;
