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
function handleGetProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var products, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getProducts()];
                case 1:
                    products = _a.sent();
                    if (products) {
                        renderProducts(products);
                    }
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
function getProducts() {
    return __awaiter(this, void 0, Promise, function () {
        var data, products, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/products/get-products")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    products = data.products, error = data.error;
                    return [2 /*return*/, products];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleAddProduct(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, data, products, error, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    name = ev.target.elements.name.value;
                    console.log(name);
                    if (!name)
                        throw new Error("Name is missing");
                    return [4 /*yield*/, axios.post("/products/add-product", { name: name })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    products = data.products, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderProducts(products);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleDelete(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, products, error, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!productId)
                        throw new Error("productId is missing");
                    return [4 /*yield*/, axios["delete"]("/products/delete-product", {
                            data: { productId: productId }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    products = data.products, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderProducts(products);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateProduct(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var newName, id, data, products, error, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newName = ev.target.value;
                    if (!newName)
                        throw new Error("Name is missing");
                    id = ev.target.id;
                    if (!id)
                        throw new Error("Id is missing");
                    return [4 /*yield*/, axios.patch("/products/update-product", {
                            id: id,
                            newName: newName
                        })];
                case 1:
                    data = (_a.sent()).data;
                    products = data.products, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderProducts(products);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderProducts(products) {
    try {
        var html_1 = "";
        products.forEach(function (product) {
            html_1 += "<div class=\"productCard\">\n      <input id='" + product.id + "' type='text' value='" + product.name + "' onblur='handleUpdateProduct(event)'/> \n      <button onclick='handleDelete(\"" + product.id + "\")'>DELETE</button>\n      </div>";
        });
        var root = document.querySelector("#root");
        if (!root)
            throw new Error("No root was captured from DOM");
        root.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
