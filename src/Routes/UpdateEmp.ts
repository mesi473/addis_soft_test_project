import express from 'express';
import EmployeeModel from '../models/Employee';


const UpdateEmp = async (req:express.Request, res:express.Response) => {
    const name:string=req.body.name;
    const salary:number=req.body.salary;
    const date_of_birth:string =req.body.date_of_birth;
    const gender:string=req.body.gender;
    const id:string=req.body.id;

    const error:[string]=[''];
    if(!name ){
        error.push('name cannot be empty');

    }
    if(!salary){
        error.push('salary cannot be empty');

    }
    if(!date_of_birth){
        error.push('date of birth cannot be empty');

    }
    if(!gender){
        error.push('gender cannot be empty');
        res.json({
            error,
            success:false,
        });
    }

    if(name && salary && date_of_birth && gender){
        EmployeeModel.updateOne({_id:id},
            {
                name,
                salary,
                date_of_birth,
                gender
            }
        ).then((response:any)=>{
            if(response==null){
                error.push('not found');
                res.json({
                    error,
                    success:false,
                })
            }
            if(response.n===0){
                error.push('not found');
                res.json({
                    error,
                    success:false,
                })
            }else{
                res.json({
                    error:[],
                    success:true,
                })
            }
        })

    }

}
export default  UpdateEmp;