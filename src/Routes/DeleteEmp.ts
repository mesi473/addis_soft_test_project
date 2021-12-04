import express from 'express';
import EmployeeModel from '../models/Employee';


const DeleteEmp = async (req:express.Request, res:express.Response) => {

    const id=req.params.id;
    const error:[string]=[''];
    if(!id){
        error.push('name is required');
        res.json({
            error,
            success:false,
        });
    }else{
        await EmployeeModel.deleteOne({_id:id}).then((response:any)=>{

            if(response.n===0){
                error.push('not found');
                res.json({
                    error,
                    success:false,
                })
            }
            else{
                res.json({
                    error:[],
                    success:true,
                })
            }

        })
    }
}
export default  DeleteEmp;