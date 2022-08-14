"use strict";
exports.__esModule = true;
exports.addCat = void 0;
function addCat(req, res) {
    try {
        var _a = req.body, name = _a.name, age = _a.age;
        if (!name || !age)
            throw new Error("missing name or age");
        //save to db new cat
        res.send({ success: true });
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports.addCat = addCat;
