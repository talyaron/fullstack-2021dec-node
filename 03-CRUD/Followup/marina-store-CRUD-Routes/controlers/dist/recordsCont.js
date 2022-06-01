"use strict";
exports.__esModule = true;
exports.handleDoubleClick = exports.selectTypeAlbum = exports.searchAlbum = exports.updateAlbum = exports.addAlbum = exports.deleteAlbum = exports.initStore = void 0;
var helpers_1 = require("../helpers");
var store = {
    cartItems: [],
    records: [
        {
            name: "Miles Davis",
            title: "Kind of Blue",
            type: "classic",
            year: 1959,
            raiting: 4.2,
            url: "https://m.media-amazon.com/images/I/71dQKN2UEfL._SL1500_.jpg",
            id: helpers_1["default"]()
        },
        {
            name: "John Coltrane",
            title: "A Love Supreme",
            type: "classic",
            year: 1965,
            raiting: 4.3,
            url: "https://cdn2.jazztimes.com/2021/08/John-Coltrane-Cover-Art.jpg",
            id: helpers_1["default"]()
        },
        {
            name: "Duke Ellington",
            title: "Ellington At Newport",
            type: "classic",
            year: 1956,
            raiting: 3.9,
            url: "https://www.jazzmessengers.com/27301/the-complete-newport-1956-concert.jpg",
            id: helpers_1["default"]()
        },
        {
            name: "John Coltrane",
            title: "Blue Trail",
            type: "classic",
            year: 1957,
            raiting: 4.2,
            url: "https://m.media-amazon.com/images/I/71aSnR4uTNL._SX425_.jpg",
            id: helpers_1["default"]()
        },
        {
            name: "Sonny Rollins",
            title: "Saxophone Colossus",
            type: "classic",
            year: 1956,
            raiting: 3.9,
            url: "https://www.jazzmessengers.com/57498-thickbox_default/saxophone-colossus.jpg",
            id: helpers_1["default"]()
        },
        {
            name: "Mola Sylla",
            title: "Count Till Zen",
            type: "ethnic",
            year: 2015,
            raiting: 3.2,
            url: "https://lastfm.freetls.fastly.net/i/u/500x500/b326fb64c55e5c5c12458a4a2ec6db0f.jpg",
            id: helpers_1["default"]()
        },
        {
            name: "Richard Bona",
            title: "Reverence",
            type: "ethnic",
            year: 2001,
            raiting: 4.2,
            url: "https://lastfm.freetls.fastly.net/i/u/500x500/96e29825b4c6360458421530d70812ed.jpg",
            id: helpers_1["default"]()
        },
        {
            name: "Stan Getz",
            title: "For Musicians Only",
            type: "bebop",
            year: 1954,
            raiting: 3.8,
            url: "https://dgwh4hty77sxy.cloudfront.net/12694-medium_zoomcrop/image.jpg",
            id: helpers_1["default"]()
        },
        {
            name: "Silver Serenade",
            title: "The Horace Silver Quintet",
            type: "bebop",
            year: 1963,
            raiting: 3.7,
            url: "https://e.snmc.io/i/600/w/c3c431dd9d0fc3e531ea5ec87e4ca819/2131870/the-horace-silver-quintet-silvers-serenade-Cover-Art.jpg",
            id: helpers_1["default"]()
        },
        {
            name: "Ben Webster",
            title: "The Consummate Artistry",
            type: "bebop",
            year: 1954,
            raiting: 3.7,
            url: "https://m.media-amazon.com/images/I/61FHqeSW39L._SL1070_.jpg",
            id: helpers_1["default"]()
        },
        {
            name: "Jim Hall",
            title: "Concierto",
            type: "cool jazz",
            year: 1975,
            raiting: 3.8,
            url: "https://i.discogs.com/DLOIT8ifKvvY_annT-G0loS1ts2tYIbA-Io4QTkTDNU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMjY5/NjItMTM1NjkwNzc3/NC01MDE4LmpwZWc.jpeg",
            id: helpers_1["default"]()
        },
        {
            name: "Oscar Peterson",
            title: "We Get Requests",
            type: "cool jazz",
            year: 1965,
            raiting: 3.8,
            url: "https://c8.alamy.com/zooms/9/c1eb104cd58540949322a07797e01048/2dp2kmf.jpg",
            id: helpers_1["default"]()
        },
    ]
};
exports.initStore = function (req, res) {
    try {
        res.send(store.records);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.deleteAlbum = function (req, res) {
    var recordID = req.body.recordID;
    store.records = store.records.filter(function (record) { return record.id !== recordID; });
    res.send(store.records);
};
exports.addAlbum = function (req, res) {
    var _a = req.body, name = _a.name, title = _a.title, type = _a.type, year = _a.year, raiting = _a.raiting, url = _a.url;
    if (!name)
        throw new Error("name is required");
    if (!title)
        throw new Error("title is required");
    if (!type)
        throw new Error("type is required");
    if (!raiting)
        throw new Error("raiting is required");
    if (!url)
        throw new Error("URL is required");
    var record = { name: name, title: title, type: type, year: year, raiting: raiting, url: url, id: helpers_1["default"]() };
    store.records.push(record);
    res.send(store.records);
};
exports.updateAlbum = function (req, res) {
    var _a = req.body, name = _a.name, title = _a.title, type = _a.type, year = _a.year, raiting = _a.raiting, url = _a.url, id = _a.id;
    var index = store.records.findIndex(function (record) { return record.id === id; });
    if (index === -1)
        throw new Error("record not found");
    if (index >= 0) {
        store.records[index].name = name;
        store.records[index].title = title;
        store.records[index].type = type;
        store.records[index].year = year;
        store.records[index].raiting = raiting;
        store.records[index].url = url;
    }
    ;
    res.send(store.records);
};
exports.searchAlbum = function (req, res) {
    var search = req.query.input;
    var filteredItems = filteredSearch(search);
    res.send(filteredItems);
};
function filteredSearch(search) {
    var regex = new RegExp(search, "g");
    return store.records.filter(function (record) { return regex.test(record.title) || regex.test(record.name) || regex.test(record.type); });
}
;
exports.selectTypeAlbum = function (req, res) {
    var type = req.query.type;
    var selectByType = store.records.filter(function (record) { return record.type == type; });
    if (type === 'all') {
        console.log(type);
        res.send(store.records);
    }
    else if (type) {
        res.send(selectByType);
    }
    else {
        res.send(store.records);
    }
};
exports.handleDoubleClick = function (req, res) {
    var recordID = req.body.recordID;
    var clicked = store.records.filter(function (record) { return record.id === recordID; });
    res.send(clicked);
};
