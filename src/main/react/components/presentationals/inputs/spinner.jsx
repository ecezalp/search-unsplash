import * as React from 'react';

const Spinner = ({isVisible}) => {

  return <div className="spinner-wave"
              style={{visibility: isVisible ? "visible" : "hidden"}}
  >
    <div className="wave"/>
    <div className="wave"/>
    <div className="wave"/>
    <div className="wave"/>
    <div className="wave"/>
  </div>
};

export default Spinner;