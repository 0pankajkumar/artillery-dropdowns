import React, { Component } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
          company: "radix",
          dept: "engineering",
          post: "Software engineer - Frontend"
        }
      ],
      selectedCompanies: [],
      selectedDept: [],
      selectedPost: [],
      options_for_company: [],
      options_for_dept: [],
      options_for_post: []
    };
    this.handleCompany = this.handleCompany.bind(this);
  }

  componentDidMount() {
    this.setState({
      options_for_company: this.state.info.map(p => p.company)
    });
  }

  handleCompany = (event, values) => {
    this.setState(
      {
        selectedCompanies: values.company
      },
      () => {
        console.log(this.state.selectedCompanies);
      }
    );
  };

  handleDept = (event, values) => {
    this.setState(
      {
        selectedDept: values.dept
      },
      () => {
        console.log(this.state.selectedDept);
      }
    );
  };

  handlePost = (event, values) => {
    this.setState(
      {
        selectedPost: values.post
      },
      () => {
        console.log(this.state.selectedPost);
      }
    );
  };

  getDept = info => {
    return this.state.selectedCompanies.includes(info.company);
  };

  getPost = info => {
    return this.state.selectedDept.includes(info.dept);
  };

  render() {
    return (
      <div>
        <br></br>
        <Autocomplete
          id="combo-box-company"
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
          id="combo-box-dept"
          options={this.state.info.filter(this.getDept)}
          getOptionLabel={option => option.dept}
          style={{ width: 200 }}
          onChange={this.handleDept}
          renderInput={params => (
            <TextField
              {...params}
              label="Department"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <br></br>
        <Autocomplete
          id="combo-box-post"
          options={this.state.info.filter(this.getPost)}
          getOptionLabel={option => option.post}
          style={{ width: 200 }}
          onChange={this.handlePost}
          renderInput={params => (
            <TextField
              {...params}
              label="Posting"
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
