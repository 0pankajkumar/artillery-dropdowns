import React, { Component } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import SmartDataTable from "react-smart-data-table";

var testData = [];
var numResults = 100;

for (var i = 0; i < numResults; i++) {
  testData.push({
    _id: i,
    fullName: faker.name.findName(),
    "email.address": faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    address: {
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country()
    }
  });
}

class SmartTable extends Component {
  constructor(props) {
    super(props);
    this.state = { testData: testData };
  }

  render() {
    return (
      <div>
        <SmartDataTable
          data={testData}
          name="test-table"
          className="ui compact selectable table"
          sortable
        />
      </div>
    );
  }
}

export default SmartTable;

// ReactDOM.render(
//   <SmartDataTable
//     data={testData}
//     name="test-table"
//     className="ui compact selectable table"
//     sortable
//   />,
//   document.getElementById("app")
// );
