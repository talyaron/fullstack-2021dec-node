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
exports.__esModule = true;
exports.addFavorite = exports.markCurrently = exports.getABook = exports.markAsRead = exports.addBook = exports.deleteBook = exports.getUserBooks = void 0;
var helpers_1 = require("../helpers");
var books = [
    {
        bookName: 'Harry Potter',
        bookImg: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/3385/9781338596700.jpg',
        userId: '123',
        list: 'tbr',
        bookId: helpers_1["default"](),
        favorite: false
    },
    {
        bookName: 'Percy Jackson',
        bookImg: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1413/9780141346809.jpg',
        userId: '123',
        list: 'read',
        bookId: helpers_1["default"](),
        favorite: false
    },
    {
        bookName: 'Fire',
        bookImg: '	https://images-na.ssl-images-amazon.com/images/I/91IEg8HFceL.jpg',
        userId: '123',
        list: 'current',
        bookId: helpers_1["default"](),
        favorite: false
    },
    {
        bookName: 'Eragon',
        bookImg: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3758/9780375826689.jpg',
        userId: '456',
        list: 'read',
        bookId: helpers_1["default"](),
        favorite: false
    },
    {
        bookName: "Hitchhiker's guide",
        bookImg: 'https://simania.co.il/bookimages/covers44/442005.jpg',
        userId: '456',
        list: 'tbr',
        bookId: helpers_1["default"](),
        favorite: false
    }
];
function getUserBooks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId_1;
        return __generator(this, function (_a) {
            try {
                userId_1 = req.query.userId;
                res.send({ books: books.filter(function (book) { return book.userId === userId_1; }) });
            }
            catch (error) {
                console.log('books array not valid');
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getUserBooks = getUserBooks;
function deleteBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, bookId_1, userId_2;
        return __generator(this, function (_b) {
            try {
                _a = req.body, bookId_1 = _a.bookId, userId_2 = _a.userId;
                books = books.filter(function (book) {
                    if (book.bookId === bookId_1 && userId_2 === book.userId) {
                        return false;
                    }
                    return true;
                });
                res.send({ books: books.filter(function (book) { return book.userId === userId_2; }) });
            }
            catch (error) { }
            return [2 /*return*/];
        });
    });
}
exports.deleteBook = deleteBook;
function addBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newBookName, newBookImg, userId, newBook;
        return __generator(this, function (_a) {
            newBookName = req.body.newBookName;
            newBookImg = req.body.newBookImg;
            userId = req.body.userId;
            newBook = {
                bookName: newBookName,
                bookImg: newBookImg,
                userId: userId,
                list: 'tbr',
                bookId: helpers_1["default"](),
                favorite: false
            };
            books.push(newBook);
            res.send({ books: books.filter(function (book) { return book.userId === userId; }) });
            return [2 /*return*/];
        });
    });
}
exports.addBook = addBook;
function markAsRead(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var bookId, userId;
        return __generator(this, function (_a) {
            bookId = req.body.bookId;
            console.log(bookId);
            userId = req.body.userId;
            books.forEach(function (book) {
                if (book.bookId === bookId) {
                    book.list = 'read';
                }
            });
            res.send({ books: books.filter(function (book) { return book.userId === userId; }) });
            return [2 /*return*/];
        });
    });
}
exports.markAsRead = markAsRead;
function getABook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var bookName_1;
        return __generator(this, function (_a) {
            try {
                bookName_1 = req.query.bookName;
                console.log(bookName_1);
                res.send({ books: books.filter(function (book) { return book.bookName === bookName_1; }) });
            }
            catch (error) {
                console.log('books array not valid');
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getABook = getABook;
function markCurrently(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var bookId, userId;
        return __generator(this, function (_a) {
            bookId = req.body.bookId;
            userId = req.body.userId;
            books.forEach(function (book) {
                if (book.bookId === bookId) {
                    book.list = 'current';
                }
            });
            res.send({ books: books.filter(function (book) { return book.userId === userId; }) });
            return [2 /*return*/];
        });
    });
}
exports.markCurrently = markCurrently;
function addFavorite(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var bookId, userId;
        return __generator(this, function (_a) {
            bookId = req.body.bookId;
            userId = req.body.userId;
            books.forEach(function (book) {
                if (book.bookId === bookId) {
                    if (book.favorite === false) {
                        book.favorite = true;
                    }
                    else if (book.favorite === true) {
                        book.favorite = false;
                    }
                }
            });
            res.send({ books: books.filter(function (book) { return book.userId === userId; }) });
            return [2 /*return*/];
        });
    });
}
exports.addFavorite = addFavorite;
