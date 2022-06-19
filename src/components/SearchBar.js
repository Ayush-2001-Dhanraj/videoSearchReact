import React from "react";
import { TextField } from "@mui/material";

class SearchBar extends React.Component {
  state = { term: "" };

  handleInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            id="standard-search"
            label="Search Videos ...."
            type="search"
            variant="standard"
            fullWidth
            value={this.state.term}
            size="small"
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
