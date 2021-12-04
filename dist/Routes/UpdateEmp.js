"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("../models/Employee"));
const UpdateEmp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const salary = req.body.salary;
    const date_of_birth = req.body.date_of_birth;
    const gender = req.body.gender;
    const id = req.body.id;
    const error = [''];
    if (!name) {
        error.push('name cannot be empty');
    }
    if (!salary) {
        error.push('salary cannot be empty');
    }
    if (!date_of_birth) {
        error.push('date of birth cannot be empty');
    }
    if (!gender) {
        error.push('gender cannot be empty');
        res.json({
            error,
            success: false,
        });
    }
    if (name && salary && date_of_birth && gender) {
        Employee_1.default.updateOne({ _id: id }, {
            name,
            salary,
            date_of_birth,
            gender
        }).then((response) => {
            if (response == null) {
                error.push('not found');
                res.json({
                    error,
                    success: false,
                });
            }
            if (response.n === 0) {
                error.push('not found');
                res.json({
                    error,
                    success: false,
                });
            }
            else {
                res.json({
                    error: [],
                    success: true,
                });
            }
        });
    }
});
exports.default = UpdateEmp;
//# sourceMappingURL=UpdateEmp.js.map