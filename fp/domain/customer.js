"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerName = exports.CustomerId = void 0;
exports.createCustomer = createCustomer;
const zod_1 = require("zod");
const isA = zod_1.z;
const validateCustomerId = (id) => id > 20 && id < 1000;
exports.CustomerId = isA.number().int().refine(validateCustomerId).brand('CustomerId');
exports.CustomerName = isA.string().brand('CustomerName');
const Customer = isA.object({
    name: exports.CustomerName,
    id: exports.CustomerId
});
function createCustomer(input) {
    return {
        name: exports.CustomerName.parse(input.name),
        id: exports.CustomerId.parse(input.id)
    };
}
