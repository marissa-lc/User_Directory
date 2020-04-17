import React from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";

function Search({ handleChange}) {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Find your Employee</h1>
          <SearchForm
            onChange={e => handleChange(e)}          
          />
        </Container>
      </div>
    )
  }

export default Search;
