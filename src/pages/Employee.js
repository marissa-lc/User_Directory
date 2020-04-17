import React, { Component } from "react";
import API from "../utils/API";
import Search from './Search';
import EmployeeTable from './EmployeeTable';

class Employee extends Component {
      state = {
        users: [],
        filteredUsers: [],
      };

      handleOrder = () => {
        this.setState({
          sortOrder: this.state.sortOrder === "ascending" ? "descending" : "descending"
        });
        const sortedList = this.state.filteredUsers.sort(this.compare);
        this.setState({ filteredUsers: sortedList });
      };

      handleSearch = event => {
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
        <Search handleSearch={this.handleSearch}/>
        <table>
          <br></br>
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
          <tbody>

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
        </table>
      </div>
    )};
  }


export default Employee;
