import React, { useState, setState } from "react";

function Header() {

  // Format today's date
  const today = new Date();
  const d = today.getDate();
  const dd = d < 10 ? '0' + d : d;
  const m = today.getMonth() + 1;
  const mm = m < 10 ? '0' + m : m;
  const y = today.getFullYear();
  const todayDate = mm + '/' + dd + '/' + y;

  // state setters
  const [tags, setTags] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
    // const [nytResults, setNytResults] = useState();
  // const [guardResults, setGuardResults] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    // Start date of query from form
    setStartDate(document.forms["query-form"]["begin-date"].value);
    // End date of query from form
    if (document.forms["query-form"]["end-date"].value == '') {
      setEndDate(todayDate);
    } else {
    setEndDate(document.forms["query-form"]["end-date"].value);
    }
    console.log("from state: " + startDate);
    console.log("from state: " + endDate);
    // Get search terms from the form. This is a clean array- no need to strip or split
    setTags(document.forms["query-form"]["search-terms"].value);
    console.log("from terms: " + tags);

    // Set up query string for API fetches...
    // NYT:

    // Guardian:

    
  }

    return (
      <header className="mb-auto header border-bottom border-dark">
        <div className="inner">
          <h1 className="mt-4 mb-4" id="masthead">News from Both Sides of the Pond</h1>
          <form className="mb-2" id="query-form" onSubmit={ handleSubmit }>
            <div className="form-group row w-100">
              <div className="col-6 inline-flex">
                <label htmlFor="search-terms">Search Terms (comma-separated)</label>
                <input type="text" className="form-control-plaintext border border-dark rounded" id="search-terms"></input>
              </div>
              <div className="col-3 flex date">
                <label htmlFor="begin-date">Begin Date</label>
                <input type="text" className="form-control-plaintext border border-dark rounded px-2" placeholder="mm/dd/yyyy" id="begin-date"></input>
              </div>
              <div className="col-3 flex">
                <label htmlFor="end-date">End Date</label>
                <input type="text" className="form-control-plaintext border border-dark rounded px-2" placeholder={ todayDate } default={ todayDate }id="end-date"></input>
              </div>
            </div>
            <div className="mt-2 w-30">
                <button type="submit" className="w-50">Submit</button>
            </div>
          </form>
        </div>
      </header>
      );
  }
  
export default Header;