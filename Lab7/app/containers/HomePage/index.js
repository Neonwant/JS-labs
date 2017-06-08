/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import SimpleCounter from "components/SimpleCounter";
import ComplexCounter from "containers/ComplexCounter";
import { getCounterValue } from 'containers/ComplexCounter/selectors';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const initialArray = [
{
  id: "0",
  name: "Pet Wasovsky",
  age: 19,
  marks: {
  math: 5,
    english: 4,
    chemistry: 4
},
  address: {
    city: "Khmelnitskiy",
      street: "Gagarina",
      building: "1",
      app: "12",
      country: "Ukraine"
  }
},
{
  id: "1",
    name: "Alex",
  age: 29,
  marks: {
  math: 3,
    english: 4,
    chemistry: 4
},
  address: {
    city: "Khmelnitskiy",
      street: "Shevchenko",
      building: "2",
      app: "24",
      country: "Ukraine"
  }
},
{
  id: "2",
    name: "Bogdan",
  age: 18,
  marks: {
  math: 5,
    english: 4,
    chemistry: 4
},
  address: {
    city: "Khmelnitskiy",
      street: "Gagarina",
      building: "15",
      app: "1",
      country: "Ukraine"
  }
},
{
  id: "3",
    name: "Vlad",
  age: 18,
  marks: {
  math: 5,
    english: 5,
    chemistry: 4
},
  address: {
    city: "Khmelnitskiy",
      street: "Kamenetskay",
      building: "66",
      app: "78",
      country: "Ukraine"
  }
},
{
  id: "4",
    name: "Kristina",
  age: 18,
  marks: {
  math: 4,
    english: 4,
    chemistry: 3
},
  address: {
    city: "Khmelnitskiy",
      street: "Prospect Miru",
      building: "78",
      app: "14",
      country: "Ukraine"
  }
},
{
  id: "5",
    name: "Segrii",
  age: 16,
  marks: {
  math: 3,
    english: 3,
    chemistry: 3
},
  address: {
    city: "Khmelnitskiy",
      street: "Institutskay",
      building: "3",
      app: "15",
      country: "Ukraine"
  }
},
{
  id: "6",
    name: "Nadya",
  age: 16,
  marks: {
  math: 3,
    english: 4,
    chemistry: 4
},
  address: {
    city: "Khmelnitskiy",
      street: "Panasa Myrnogo",
      building: "78",
      app: "13",
      country: "Ukraine"
  }
},
{
  id: "7",
    name: "Vadim",
  age: 18,
  marks: {
  math: 4,
    english: 4,
    chemistry: 4
},
  address: {
    city: "Khmelnitskiy",
      street: "Zarichanskay",
      building: "45",
      app: "14",
      country: "Ukraine"
  }
},
{
  id: "8",
    name: "Mikho",
  age: 18,
  marks: {
  math: 5,
    english: 5,
    chemistry: 4
},
  address: {
    city: "Khmelnitskiy",
      street: "Institutskay",
      building: "3",
      app: "53",
      country: "Ukraine"
  }
},
{
  id: "9",
    name: "Vasya",
  age: 19,
  marks: {
  math: 3,
    english: 4,
    chemistry: 5
},
  address: {
    city: "Khmelnitskiy",
      street: "Institutskay",
      building: "3",
      app: "53",
      country: "Ukraine"
  }
}
];

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
 constructor(props) {
   super(props);
   this.state = {
     sortBy: null
   };

 }
  componentWillMount() {
    const params = {
      "method": "GET",
      "headers": {"Accept": "application/json"}
    }
    fetch("https://api.github.com/users/ipselon", params)
      .then(
        (response) => {
          if (response.status >= 200 && response.status<300) {
            return response.text()
              .then(responseText => {
                console.log('Server response: ' + responseText);
                let jsonData = undefined;
                try{
                  jsonData = JSON.parse(responseText);
                } catch(e){
                }
                if (jsonData.data !== undefined) {
                  jsonData = jsonData.data;
                }
                console.log("jsonData followers", jsonData.followers);

                return jsonData;
              });
          }
        }
      )
      .catch(
        (error) => {
          console.log("error", error);
        }
      )
  }

  renderTableBody = (arr) => {
    let tableBody = arr.map((item, index) => {
      let marksToRender = "";
      const marks = Object.keys(item.marks).forEach((prop) => {
        marksToRender += prop + " - " + item.marks[prop] + " ";
      });
      return (
        <tr key={index}>
          <td style={{ border: "solid 2px black", padding: "10px" }}>
              <span>
                {item.id}
              </span>
          </td>
          <td style={{ border: "solid 2px black", padding: "10px" }}>
              <span>
                {item.name}
              </span>
          </td>
          <td style={{ border: "solid 2px black", padding: "10px" }}>
              <span>
                {item.age}
              </span>
          </td>
          <td style={{ border: "solid 2px black", padding: "10px" }}>
              <span>
                {marksToRender}
              </span>
          </td>
        </tr>
      )
    });
    return tableBody;
  };

  compare = (a, b) => {
    const { sortBy } = this.state;

      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      // a must be equal to b
      return 0;
  }

  sortByClick = (fieldToSort) => (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      sortBy: fieldToSort
    })
  };

  render() {
    let arrayToShow = initialArray.slice();

    if (this.state.sortBy) {
      arrayToShow.sort(this.compare);
    }
    const tableBody = this.renderTableBody(arrayToShow);
    return (
      <div >
        <h3>Hello from Reacr App</h3>
        <table>
          <tr>
            <th style={{ cursor: "pointer" }}>
              <span onClick={this.sortByClick("id")}>Sort</span>
            </th>
            <th style={{ cursor: "pointer" }}>
              <span onClick={this.sortByClick("name")}>Sort</span>
            </th>
            <th style={{ cursor: "pointer" }}>
              <span onClick={this.sortByClick("age")}>Sort</span>
            </th>
            <th style={{ cursor: "pointer" }}>
              <span onClick={this.sortByClick("marks")}>Sort</span>
            </th>
          </tr>
          {tableBody}
        </table>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  counter: getCounterValue()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);




/*
*
* fetch("https://api.github.com", options)
 .then(
 (response) => {
 if (response.status >= 200 && response.status<300) {
 return response.text()
 .then(responseText => {
 console.log('Server response: ' + responseText);
 let jsonData = undefined;
 try{
 jsonData = JSON.parse(responseText);
 } catch(e){
 }
 if (jsonData.data !== undefined) {
 jsonData = jsonData.data;
 }
 console.log("jsonData", jsonData);

 return jsonData;
 });
 }
 }
 )
 .catch(
 (error) => {
 console.log("error", error);
 }
 )*/
