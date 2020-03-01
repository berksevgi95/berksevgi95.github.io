import React from 'react';

import {IntlProvider, FormattedMessage} from "react-intl";

import {AbsoluteSelector} from 'react-absolute-selector'
import 'react-absolute-selector/build/index.css';

import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow"; 

import Introduction from './views/Introduction';
import WhoAmI from './views/WhoAmI';
import Experiences from './views/Experiences';
import TechnicalSkills from './views/TechnicalSkills';
import PersonalInformation from './views/PersonalInformation';
import Activities from './views/Activities';
import Projects from './views/Projects';
import ContactMe from './views/ContactMe';

import en from './configs/i18n/en.json'
import tr from './configs/i18n/tr.json'

const App = () => {

  const [lang, setLang] = React.useState('en');

  const onLeave = (origin, destination, direction) => {
    // console.log("Leaving section " + origin.index);
  }
  const afterLoad = (origin, destination, direction) => {
    // console.log("After load: " + destination.index);
  }
  const handleMoveToStart = (fullpageApi) => {
    fullpageApi.moveTo(1, 0)
  }
  const handleOnChange = (value, e) => {
    setLang(value);
  }

  return (
    <IntlProvider locale={lang} messages={lang === 'en' ? en : tr}>
      <AbsoluteSelector
        title={<FormattedMessage id="language.settings.title"/>} 
        form={{
          onChange: handleOnChange,
          name: 'lang',
          value: lang,
          elements: [{
            title: 'Türkçe',
            value: 'tr',
          }, {
            title: 'English',
            value: 'en',
          }],
        }} 
      />
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
              <Projects/>
              <Activities/>
              <ContactMe onMoveToStart={handleMoveToStart.bind(this, fullpageApi)}/>
            </div>
          );
        }}
      />
    </IntlProvider>
  );
}

export default App;
