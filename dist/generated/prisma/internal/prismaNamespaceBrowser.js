"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder = exports.DataScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Data: 'Data'
};
exports.TransactionIsolationLevel = {
    Serializable: 'Serializable'
};
exports.DataScalarFieldEnum = {
    id: 'id',
    temperature: 'temperature',
    humidity: 'humidity',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map