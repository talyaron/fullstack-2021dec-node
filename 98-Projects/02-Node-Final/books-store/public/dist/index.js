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
function handleUpBook(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var image, name, description, price, data, addBook, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log(ev.target.elements);
                    image = ev.target.elements.bookImg.value;
                    name = ev.target.elements.name.value;
                    description = ev.target.elements.description.value;
                    price = ev.target.elements.price.value;
                    return [4 /*yield*/, axios.post("/booksStore", { image: image, name: name, description: description, price: price })];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    addBook = data.addBook;
                    console.log(addBook);
                    postBook(addBook);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function postBook(book) {
    var books = document.querySelector("#books");
    var html = "";
    console.log(book);
    book.forEach(function (bookDetails) {
        html += "<div id=\"wrapper\"> <img src=\"" + bookDetails.image + "\"  id=\"bookImg\">  \n    <p class=\"details\">" + bookDetails.name + " </p> \n    \n    <p class=\"details\">" + bookDetails.description + " </p>  <button onclick=\"handleUpdateDesc( '" + bookDetails.serialNo + "')\" class=\"buttonUp\">update</button>\n   <p class=\"details\">" + bookDetails.price + "  </p> <button onclick=\"handleUpdatePrice( '" + bookDetails.serialNo + "')\" class=\"buttonUp\">update</button>  <br>\n   \n   <button onclick=\"handleDeleteBook('" + bookDetails.serialNo + "')\" class=\"details\" class=\"buttonUp\">delete</button>\n   </div> <br> <br>";
    });
    books.innerHTML = html;
}
function getBook() {
    return __awaiter(this, void 0, void 0, function () {
        var data, addBook, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/booksStore")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    addBook = data.addBook, error = data.error;
                    if (error)
                        throw new Error(error.message);
                    if (addBook) {
                        postBook(addBook);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
getBook();
function handleUpdateDesc(serialNo) {
    return __awaiter(this, void 0, void 0, function () {
        var description, data, addBook, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    description = prompt("pleas enter description!");
                    return [4 /*yield*/, axios.put('/updateDesc', { serialNo: serialNo, description: description })];
                case 1:
                    data = (_a.sent()).data;
                    addBook = data.addBook;
                    postBook(addBook);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleUpdatePrice(serialNo) {
    return __awaiter(this, void 0, void 0, function () {
        var price, data, addBook, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    price = prompt("pleas enter price!");
                    // const price = parseInt(p)
                    console.log(price);
                    return [4 /*yield*/, axios.put('/updatePrice', { serialNo: serialNo, price: price })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    addBook = data.addBook;
                    console.log(addBook);
                    postBook(addBook);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteBook(serialNo) {
    return __awaiter(this, void 0, void 0, function () {
        var data, addBook, error, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios["delete"]('/deleteBook', { data: { serialNo: serialNo } })];
                case 1:
                    data = (_a.sent()).data;
                    addBook = data.addBook, error = data.error;
                    if (error)
                        throw new Error(error);
                    console.log(addBook);
                    postBook(addBook);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//client page
function renderClientBook(books) {
    return __awaiter(this, void 0, void 0, function () {
        var client, html1_1;
        return __generator(this, function (_a) {
            try {
                client = document.querySelector('#wrapperClient');
                html1_1 = "";
                books.forEach(function (book) {
                    html1_1 += "<img src=\"" + book.image + "\" alt=\"\">\n      <h1>" + book.name + "</h1>\n      <p>description:" + book.description + "</p>\n      <h1>price: {book.price} $</h1>\n      <button onclick('handleCart(" + book.serialNo + ")')>add to cart</button>";
                });
                client.innerHTML = html1_1;
            }
            catch (error) {
                console.log(error);
            }
            return [2 /*return*/];
        });
    });
}
function getClientList(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var data, addBook, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    return [4 /*yield*/, axios.get('/clientGet')];
                case 1:
                    data = (_a.sent()).data;
                    addBook = data.addBook;
                    console.log(addBook);
                    renderClientBook(addBook);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
