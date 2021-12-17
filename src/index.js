"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const welcome = 'world';
function hello(world = welcome) {
    return `Hello ${world}! `;
}
exports.hello = hello;
