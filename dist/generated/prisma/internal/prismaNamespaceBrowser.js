"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.SortOrder = exports.ConfiguracionesScalarFieldEnum = exports.Lecturas_sensoresScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
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
    lecturas_sensores: 'lecturas_sensores',
    configuraciones: 'configuraciones'
};
exports.TransactionIsolationLevel = {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
};
exports.Lecturas_sensoresScalarFieldEnum = {
    id: 'id',
    fecha: 'fecha',
    temperatura: 'temperatura',
    humedad: 'humedad',
    luz: 'luz',
    vibracion: 'vibracion',
    calidad_aire_ppm: 'calidad_aire_ppm',
    alcohol_detectado: 'alcohol_detectado'
};
exports.ConfiguracionesScalarFieldEnum = {
    id: 'id',
    umbral_temperatura: 'umbral_temperatura',
    umbral_humedad: 'umbral_humedad',
    umbral_luz: 'umbral_luz',
    umbral_vibracion: 'umbral_vibracion',
    umbral_calidad_aire_ppm: 'umbral_calidad_aire_ppm',
    alerta_alcohol: 'alerta_alcohol'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map