import React from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";

function Search({ handleSearch }) {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Meet your Employees</h1>
          <SearchForm
            onChange={e => handleSearch(e)}          
          />
        </Container>
      </div>
    );
  }


export default Search;
