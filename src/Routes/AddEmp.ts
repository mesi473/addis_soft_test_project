import express from 'express';
import EmployeeType from '../employee_interface';
import EmployeeModel from "../models/Employee";

const AddEmp = async (req:express.Request, res:express.Response) => {
    const name:string=req.body.name;
    const salary:number=req.body.salary;
    const date_of_birth:string =req.body.date_of_birth;
    const gender:string=req.body.gender;


    const error:[string]=[''];
    if(!name || !salary || !date_of_birth || !gender){
        error.push('all fields are required');
        res.json({
            error,
            success:false,
        });
    }else{
        new EmployeeModel(
            {
                name,
                salary,
                date_of_birth,
                gender
            }
        ).save()
        res.json({
            error:[],
            success:true,
        })
    }

}
export default  AddEmp;