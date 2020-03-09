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
          dept: "HR",
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
        },
        {
          company: "radix",
          dept: "design",
          post: "UX Superstar"
        }
      ],
      options_for_company: [],
      options_for_dept: [],
      options_for_post: [],
      optionsArray_for_company: [],
      optionsArray_for_dept: [],
      optionsArray_for_post: []
    };
    this.handleCompany = this.handleCompany.bind(this);
  }

  componentDidMount() {
    this.setState({
      options_for_company: this.state.info //.map(p => p.company)
    });
  }

  handleCompany = (event, values) => {
    // populate options_for_dept
    console.log("Values are ", values);
    let temp = this.state.options_for_company.filter(ele => {
      let flag = false;
      for (let p of values) {
        if (p.company === ele.company) {
          flag = true;
          break;
        }
      }
      return flag;
    });

    console.log("At the end temp is ", temp);

    let temp2 = [];
    for (let p of temp) {
      temp2.push(p.dept);
    }

    this.setState({
      options_for_dept: temp,
      optionsArray_for_dept: temp2
    });
  };

  handleDept = (event, values) => {
    // populate options_for_dept
    console.log("Values are ", values);
    let temp = this.state.options_for_dept.filter(ele => {
      let flag = false;
      for (let p of values) {
        if (p.dept === ele.dept) {
          flag = true;
          break;
        }
      }
      return flag;
    });

    console.log("At the end temp is ", temp);

    this.setState({
      options_for_post: temp
    });
  };

  handlePost = (event, values) => {};

  getDept = info => {};

  getPost = info => {};

  company_box_changed = e => {
    console.log("It chnages");
  };

  render() {
    return (
      <div>
        <br></br>
        <Autocomplete
          multiple
          filterSelectedOptions
          id="combo-box-company"
          options={this.state.options_for_company}
          getOptionLabel={option => option.company}
          style={{ width: 200 }}
          onChange={this.handleCompany}
          onInputChange={this.company_box_changed}
          size={"small"}
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
          multiple
          filterSelectedOptions
          id="combo-box-dept"
          options={this.state.options_for_dept}
          getOptionLabel={option => option.dept}
          style={{ width: 200 }}
          onChange={this.handleDept}
          size={"small"}
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
          multiple
          id="combo-box-post"
          options={this.state.options_for_post}
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
