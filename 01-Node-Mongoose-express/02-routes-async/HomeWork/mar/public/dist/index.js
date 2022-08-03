var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function handleGetmeme1() {
    try {
        axios.get("/meme1")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var memes = data.memes, error = data.error;
            if (error)
                throw new Error(error);
            console.log(memes);
            rendermeme(memes);
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetmeme2() {
    return __awaiter(this, void 0, void 0, function () {
        var data, memes, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
<<<<<<< HEAD
                    return [4 /*yield*/, axios.get("/meme2")];
=======
<<<<<<< HEAD:Node/02-routes-async/Exercise/Bella_Shira/public/dist/index.js
                    console.log("get image1");
                    return [4 /*yield*/, axios.get("/api/image1")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    image = data.image, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderImg(image);
=======
                    return [4 /*yield*/, axios.get("/img2")];
>>>>>>> 1dd32d837c74448d1bae1c337b3a87afd9abbe8e
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    memes = data.memes, error = data.error;
                    if (error)
                        throw new Error(error);
<<<<<<< HEAD
                    rendermeme(memes);
=======
                    renderimg(img);
>>>>>>> 67c347dc48daab84e3d221ccf14365f7bf7a27e3:Node/02-routes-async/Exercise/mar/public/dist/index.js
>>>>>>> 1dd32d837c74448d1bae1c337b3a87afd9abbe8e
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleGetmeme3() {
    try {
        axios.get("/meme3")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var memes = data.memes, error = data.error;
            if (error)
                throw new Error(error);
            console.log(memes);
            rendermeme(memes);
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
function rendermeme(meme) {
    var image = document.querySelector("#imageToChange");
    image.src = "" + meme.src;
}
