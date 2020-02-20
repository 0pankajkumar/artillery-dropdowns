import React, { Component } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

// const data = {
//   campus: {
//     all: ["a", "b", "c"],
//     design: ["d", "e", "f"],
//     "Product Management": ["g", "h", "i"]
//   },
//   codechef: {
//     all: ["a", "b", "c"],
//     design: ["d", "e", "f"],
//     "Software Engineering": ["g", "h", "i"]
//   },
//   flock: {
//     all: ["a", "b", "c"],
//     design: ["d", "e", "f"],
//     Marketing: ["g", "h", "i"]
//   }
// };

class Artillery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          company: "campus",
          dept: "design",
          post: "UI developer"
        },
        {
          company: "flock",
          dept: "product",
          post: "Product manger"
        },
        {
          company: "campus",
          dept: "engineering",
          post: "Software engineer - Frontend"
        }
      ],
      selectedCompanies: [],
      selectedDept: [],
      selectedPost: []
    };
    this.handleCompany = this.handleCompany.bind(this);
  }

  handleCompany = (event, values) => {
    this.setState(
      {
        selectedCompanies: values
      },
      () => {
        console.log(this.state.selectedCompanies);
      }
    );
  };

  render() {
    return (
      <div>
        <br></br>
        <Autocomplete
          id="combo-box-demo"
          options={this.state.info}
          getOptionLabel={option => option.company}
          style={{ width: 200 }}
          onChange={this.handleCompany}
          renderInput={params => (
            <TextField
              {...params}
              label="Company"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <br></br>
        <Autocomplete
          id="combo-box-demo2"
          options={this.state.info}
          getOptionLabel={option => option.company}
          style={{ width: 200 }}
          onChange={this.handleCompany}
          renderInput={params => (
            <TextField
              {...params}
              label="Department"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>
    );
  }
}

export default Artillery;
