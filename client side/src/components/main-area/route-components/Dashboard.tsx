import React from "react";

import { People, AccountBalance } from "@material-ui/icons";

import EmployeeTable from "./Employees";
import {
  // get employee
  getEmployeeSelector,
} from "../../../redux/selectors/GetEmployee";
import { useSelector } from "react-redux";
import { Route, Redirect, Switch,Link } from "react-router-dom";
import AddNewEmployee from "./AddNewEmployee";
import Editmployee from "./EditEmployee";
import styled from 'styled-components';

const MainArea = styled.div`  
    width: 100%;
  height: 100vh; 
  position: relative;
  left: 25%;`;
const StdDashbard=styled.div`
    font-weight: bold;
    font-size: 20px;
    color: rgb(255, 115, 0);
    position: relative;
    top: 5%;
    left: 3%;
    margin-bottom: 40px;`;
const Cards=styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 3%;
    margin-top: 3%;`;
const Card=styled.div`
    transition: 1s;
    background-color: white;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: 4%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    width: 17.2%;
    height: 100px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    &:hover{
      transform: scale(1.1);
    }
    `;
const Earning=styled.div`
    color: rgb(166, 173, 173);
    font-size: 15px;
    margin-bottom: 5px;`;

const Pricing=styled.div`
font-weight: bold;`;
const IconStyle=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    
    display: flex;
    justify-content: center;
    align-items: center;`;
const NoteArea=styled.div`
    margin-top: 3%;
    width: 65%;
    height: 100vh; 
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 3%;
    background-color: white;`;


export default function Dashboard() {

  const employees = useSelector(getEmployeeSelector);
  function totalSalary(): number {
    var temp = 0;
    for (var i = 0; i < employees.length; i++) {
      temp = temp + employees[i].salary;
    }
    return temp;
  }
  return (
    <MainArea>
      <StdDashbard>Dashboard</StdDashbard>
      <Cards>
        <Card>
          <div>
            <Earning>Total Employee</Earning>
            <Pricing>{employees.length}</Pricing>
          </div>
          <IconStyle
            style={{ backgroundColor: "rgb(235, 171, 33)" }}
          >
            <People />
          </IconStyle>
        </Card>
        <Card>
          <div>
            <Earning>Employee's Salary grater than 1000</Earning>
            <Pricing>{employees.filter(emp => emp.salary > 1000).length}</Pricing>
          </div>
          <IconStyle style={{ backgroundColor: "#0e71c7" }}>
            <People />
          </IconStyle>
        </Card>
        <Card>
          <div>
            <Earning>Total Salary</Earning>
            <Pricing>${totalSalary()}</Pricing>
          </div>
          <IconStyle
            style={{ backgroundColor: "rgb(231, 120, 28)" }}
          >
            <AccountBalance />
          </IconStyle>
        </Card>

      </Cards>
      <NoteArea>
        
        <Switch>
          <Redirect exact={true} from="/" to="/employees" />
          <Route exact path="/add-employee" component={AddNewEmployee} />
          <Route exact path="/employees" component={EmployeeTable} />
          <Route exact path="/update/:id" component={Editmployee} />
        </Switch>
        
      </NoteArea>
    </MainArea>
  );
}
