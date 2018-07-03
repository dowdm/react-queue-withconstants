import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){
  const styledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  };
  return(
    <div>
      {/* Add <style jsx global> for non-component specific class, don't combine inline styling with pseudo classes */}
      <style jsx>{`
        .red-text {
          color: red;
        }
        `}</style>
      <h3 style={styledComponentStyles}>{props.location} - {props.names}</h3>
      <p className="red-text"><em>{props.issue}</em></p>
      <p>{props.formattedWaitTime}</p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Ticket;
