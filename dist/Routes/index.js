"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const AddEmp_1 = __importDefault(require("./AddEmp"));
const UpdateEmp_1 = __importDefault(require("./UpdateEmp"));
const DeleteEmp_1 = __importDefault(require("./DeleteEmp"));
const GetEmp_1 = __importDefault(require("./GetEmp"));
router.post("/addemployee", AddEmp_1.default);
router.put("/updateemployee", UpdateEmp_1.default);
router.delete("/deleteemployee/:id", DeleteEmp_1.default);
router.get("/getemployee", GetEmp_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map