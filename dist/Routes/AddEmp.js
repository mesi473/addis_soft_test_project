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
const AddEmp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const salary = req.body.salary;
    const date_of_birth = req.body.date_of_birth;
    const gender = req.body.gender;
    const error = [''];
    if (!name || !salary || !date_of_birth || !gender) {
        error.push('all fields are required');
        res.json({
            error,
            success: false,
        });
    }
    else {
        new Employee_1.default({
            name,
            salary,
            date_of_birth,
            gender
        }).save();
        res.json({
            error: [],
            success: true,
        });
    }
});
exports.default = AddEmp;
//# sourceMappingURL=AddEmp.js.map