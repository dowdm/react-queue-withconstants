import React from 'react';

function NewTicketForm(){
  let names = null;
  let location = null;
  let issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(names.value);
    console.log(location.value);
    console.log(issue.value);
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

export default NewTicketForm;
