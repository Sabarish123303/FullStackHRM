import axios from 'axios';

const APPLICATION_BASE_URL="http://localhost:8080/api/employees/";

class EmployeeService
{
    getEmployees()
    {
        return axios.get(APPLICATION_BASE_URL);
    }

    getEmployeeById(employeeId)
    {
        return axios.get(APPLICATION_BASE_URL +'/'+ employeeId);
    }

    createEmployee(employee)
    {
        return axios.post(APPLICATION_BASE_URL, employee);
    }

    updateEmployee(employee, employeeId)
    {
        return axios.put(APPLICATION_BASE_URL + '/'+ employeeId, employee);
    }

    deleteEmployee(employeeId)
    {
        return axios.delete(APPLICATION_BASE_URL + '/'+ employeeId);
    }
}

export default new EmployeeService;