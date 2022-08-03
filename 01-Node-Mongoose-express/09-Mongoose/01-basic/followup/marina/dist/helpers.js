"use strict";
// export multiples functions
// export function uid() {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
// };
Object.defineProperty(exports, "__esModule", { value: true });
// export a single function
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
;
exports.default = uid;
