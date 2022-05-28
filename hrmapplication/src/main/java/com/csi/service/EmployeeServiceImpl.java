package com.csi.service;

import com.csi.dao.EmployeeDaoImpl;
import com.csi.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl {
    @Autowired
    EmployeeDaoImpl employeeDaoImpl;

    public List<Employee> getAllData() {
        return employeeDaoImpl.getAllData();
    }

    public Optional<Employee> getDataById(int empId) {
        return employeeDaoImpl.getDataById(empId);
    }

    public Employee saveData(Employee employee) {
        return employeeDaoImpl.saveData(employee);
    }

    public Employee updateData(Employee employee1) {
        return employeeDaoImpl.updateData(employee1);
    }

    public void deleteData(int empId) {
        employeeDaoImpl.deleteData(empId);
    }
}
