require('normalize.css/normalize.css');
require('!style!css!sass!styles/App.scss');
require('!style!css!sass!styles/common.scss');
require('!style!css!sass!styles/EmployeeInfoCard.scss');


import React from 'react';
import EmployeeInfoCard from './EmployeeInfoCard';
import ImgReader from './ImgReader';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
	    	<EmployeeInfoCard/>
            <ImgReader/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
