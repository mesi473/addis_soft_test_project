import mongoose from 'mongoose';

const Employee =new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date_of_birth : {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required:true
    },
})

const EmployeeModel = mongoose.model('employee', Employee);
export default EmployeeModel;