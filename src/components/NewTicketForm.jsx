import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewTicketForm(props){
  let names = null;
  let location = null;
  let issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: names.value, location: location.value, issue: issue.value, id: v4()});
    names.value = '';
    location.value = '';
    issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {names = input;}} />
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {location = input;}} />
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(input) => {issue = input;}} />
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
