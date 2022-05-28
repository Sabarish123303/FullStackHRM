import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            empId: this.props.match.params.empId,
            empFirstName: '',
            empLastName: '',
            empEmailId: ''
        }
        this.changeEmpFirstNameHandler = this.changeEmpFirstNameHandler.bind(this);
        this.changeEmpLastNameHandler = this.changeEmpLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    
    componentDidMount(){

        
        if(this.state.empId === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.empId).then( (res) =>{
                let employee = res.data;
                this.setState({empFirstName: employee.empFirstName,
                    empLastName: employee.empLastName,
                    empEmailId : employee.empEmailId
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {empFirstName: this.state.empFirstName, empLastName: this.state.empLastName, empEmailId: this.state.empEmailId};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.empId === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.empId).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changeEmpFirstNameHandler= (event) => {
        this.setState({empFirstName: event.target.value});
    }

    changeEmpLastNameHandler= (event) => {
        this.setState({empLastName: event.target.value});
    }

    changeEmpEmailHandler= (event) => {
        this.setState({empEmailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.empId === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
               <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="empFirstName" className="form-control" 
                                                value={this.state.empFirstName} onChange={this.changeEmpFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="empLastName" className="form-control" 
                                                value={this.state.empLastName} onChange={this.changeEmpLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="empEmailId" className="form-control" 
                                                value={this.state.empEmailId} onChange={this.changeEmpEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                 
            </div>
        );
    }
}

export default CreateEmployeeComponent;