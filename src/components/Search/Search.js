import React from 'react';
import SearchButton from './SearchButton.js';
import SearchHeading from './SearchHeading.js';
import SearchInput from './SearchInput.js';

const Search = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row">
      <div className="col"></div>
      <table className="table search-table">
        <thead>
          <tr>
            <SearchHeading title='Customer id' /><th />
            <SearchHeading title='Customer Name' /><th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <SearchInput id='customerId' placeholder='Customer id' name='customerid' />
            <SearchButton value='Search IDs' click={props.click} />
            <SearchInput id='customerName' placeholder='Customer name' name='customername' />
            <SearchButton value='Search Names' click={props.click} />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default Search;
