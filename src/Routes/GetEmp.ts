import express from 'express';
import EmployeeModel from '../models/Employee';


const GetEmp = async (req:express.Request, res:express.Response) => {

    EmployeeModel.find({}).then((response:express.Response)=>{
        res.json({
            employee:response,
            success:true
        });
    })
}
export default  GetEmp;