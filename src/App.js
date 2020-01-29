import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow"; 

import Introduction from './views/Introduction';
import WhoAmI from './views/WhoAmI';
import Experiences from './views/Experiences';
import TechnicalSkills from './views/TechnicalSkills';
import PersonalInformation from './views/PersonalInformation';
import Activities from './views/Activities';


const App = () => {

  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);
  }
  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);
  }
  
  return (
    <ReactFullpage
        scrollOverflow
        sectionsColor={["orange", "purple", "green"]}
        onLeave={onLeave.bind(this)}
        afterLoad={afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <Introduction/>
              <WhoAmI/>
              <PersonalInformation/>
              <Experiences/>
              <TechnicalSkills/>
              <Activities/>
              <div className="section">
                <h3>Section 3</h3>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
      />
  );
}

export default App;
