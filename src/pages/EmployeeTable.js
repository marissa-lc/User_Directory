import React from "react"

function EmployeeTable(props) {
  return (
            <tr>
              <td><img src={props.thumbnail} alt="thumbnail"></img></td>
              <td>{props.first}</td>
              <td>{props.last}</td>
              <td>{props.email}</td>
              <td>{props.state}</td>
            </tr>
  );
}

export default EmployeeTable; 