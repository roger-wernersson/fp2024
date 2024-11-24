"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const isA = zod_1.z;
function calculatePi() {
    return 3.14;
}
function add(a, b) {
    return a + b;
}
const db;
function getUser(userId) {
    return db.findUser(userId);
}
function now() {
    return new Date();
}
class SystemInfo {
}
function getStateNow(system) {
    const now = system.now;
}
function createUser(name, now) {
    return {
        name,
        createdTimestamp: now
    };
}
const ProductId = isA.number().int().brand('ProductId');
const isAn = isA;
const Name = isA.string().length(10);
const Age = isA.number().int().positive().min(20).max(99);
const PostNewUserRequest = isAn.object({
    name: Name,
    age: Age,
    myFunc: () => boolean
});
const express = null;
express.post('/users', (req) => {
    const input = PostNewUserRequest.parse(req.body);
    createNewUser(input);
});
function createNewUser(req) {
    // blag
}
const customerId = CustomerId.parse(12);
const productId = ProductId.parse(13);
const ponyo = productId;
