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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./Routes/index"));
const PORT = 5000 || process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('', index_1.default);
const MongoURL = "mongodb+srv://mesi:messi_boy@henok@capston-project.trnd6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose_1.default.connect(MongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('our database is running on port 27017');
    if (res) {
        app.listen(PORT, () => console.log(`server is running on port${PORT}`));
    }
}));
//# sourceMappingURL=index.js.map