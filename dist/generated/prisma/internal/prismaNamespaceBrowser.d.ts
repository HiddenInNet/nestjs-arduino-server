import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly lecturas_sensores: "lecturas_sensores";
    readonly configuraciones: "configuraciones";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Lecturas_sensoresScalarFieldEnum: {
    readonly id: "id";
    readonly fecha: "fecha";
    readonly temperatura: "temperatura";
    readonly humedad: "humedad";
    readonly luz: "luz";
    readonly vibracion: "vibracion";
    readonly calidad_aire_ppm: "calidad_aire_ppm";
    readonly alcohol_detectado: "alcohol_detectado";
};
export type Lecturas_sensoresScalarFieldEnum = (typeof Lecturas_sensoresScalarFieldEnum)[keyof typeof Lecturas_sensoresScalarFieldEnum];
export declare const ConfiguracionesScalarFieldEnum: {
    readonly id: "id";
    readonly umbral_temperatura: "umbral_temperatura";
    readonly umbral_humedad: "umbral_humedad";
    readonly umbral_luz: "umbral_luz";
    readonly umbral_vibracion: "umbral_vibracion";
    readonly umbral_calidad_aire_ppm: "umbral_calidad_aire_ppm";
    readonly alerta_alcohol: "alerta_alcohol";
};
export type ConfiguracionesScalarFieldEnum = (typeof ConfiguracionesScalarFieldEnum)[keyof typeof ConfiguracionesScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
