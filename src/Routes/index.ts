import express from 'express';

const router = express();

import  AddEmp from './AddEmp';
import  UpdateEmp from './UpdateEmp';
import  DeleteEmp from './DeleteEmp';
import  GetEmp from './GetEmp';






router.post("/addemployee", AddEmp);
router.put("/updateemployee",UpdateEmp);
router.delete("/deleteemployee/:id",DeleteEmp);
router.get("/getemployee",GetEmp);

export default router;