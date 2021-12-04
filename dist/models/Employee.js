"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Employee = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    date_of_birth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
});
const EmployeeModel = mongoose_1.default.model('employee', Employee);
exports.default = EmployeeModel;
//# sourceMappingURL=Employee.js.map