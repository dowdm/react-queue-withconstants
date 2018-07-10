import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewTicketForm(props){
  let names = null;
  let location = null;
  let issue = null;

  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: names.value,
      location: location.value,
      issue: issue.value,
      timeOpen: new Moment()
    };
    dispatch(action);
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

export default connect()(NewTicketForm);
