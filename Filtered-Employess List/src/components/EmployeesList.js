import React from 'react';

class EmployeesList extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      employees : this.props.employees,
      search:""
    }
  }
  handleChange = (e) =>
  {
    this.setState({search :e.target.value})
    e.preventDefault();
  }
  render() {
    const {employees, search} = this.state;
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" onChange={this.handleChange}/>
        </div>
        <ul className="employees-list">
          { 
            employees.filter((employee)=>employee.name.toLowerCase().includes(search.toLowerCase())).map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
