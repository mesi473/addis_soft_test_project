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
const DeleteEmp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const error = [''];
    if (!id) {
        error.push('name is required');
        res.json({
            error,
            success: false,
        });
    }
    else {
        yield Employee_1.default.deleteOne({ _id: id }).then((response) => {
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
exports.default = DeleteEmp;
//# sourceMappingURL=DeleteEmp.js.map