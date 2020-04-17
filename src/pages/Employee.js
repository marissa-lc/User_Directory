import React, { Component } from "react";
import API from "../utils/API";
import Search from './Search';
import EmployeeTable from './EmployeeTable';

class Employee extends Component {
      state = {
        users: [],
        order: "descending",
        filteredUsers: [],
      };

      handleOrder = () => {
        this.setState({
          order: this.state.order === "ascending" ? "descending" : "descending"
        });
        const sortedList = this.state.filteredUsers.sort(this.compare);
        this.setState({ filteredUsers: sortedList });
      };

      compare = ( a, b ) => {
        const aName = a.name.first;
        const bName = b.name.first;
          if(aName > bName) {
            if (this.state.order === "descending") {
              return -1;
            } else if (this.state.order === "ascending") {
              return 1;
            }
          }
          if (aName < bName) {
            if (this.state.order === "descending") {
              return 1;
            } else if (this.state.order === "ascending") {
              return -1;
            }
          }
          return 0;
      };

      handleChange = event => {
        const filter = event.target.value;
        const filteredUsers = this.state.users.filter(item => {
          let values = item.name.first.toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers });
        if (event.target.value === "") {
          this.setState({
            filteredUsers: this.state.users
          });
        }
      };

      componentDidMount() {
        API.search().then(res => {
          this.setState({
            users: res.data.results,
            filteredUsers: res.data.results
          });
        });
      }
      
  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <tbody>
          <tr>
            <th></th>
            <th onClick={this.handleOrder.bind(this)}>
            Name
            </th>
            <br></br>
            <th onClick={this.handleOrder.bind(this)}>
            Email
            </th>
            <th onClick={this.handleOrder.bind(this)}>
            Location
            </th>
          </tr>
          {this.state.filteredUsers.map((item, result) => (
            <EmployeeTable
            thumbnail = {item.picture.medium}
            first = {item.name.first}
            last = {item.name.last}
            email = {item.email} 
            state = {item.location.state}
            />
          ))}
          </tbody>
      </div>
    )};
  }


export default Employee;
