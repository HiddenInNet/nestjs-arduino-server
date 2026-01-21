"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = require("@prisma/client/runtime/client");
const config = {
    "previewFeatures": [],
    "clientVersion": "7.2.0",
    "engineVersion": "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3",
    "activeProvider": "postgresql",
    "inlineSchema": "datasource db {\n  provider = \"postgresql\"\n}\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\nmodel lecturas_sensores {\n  id                Int       @id @default(autoincrement())\n  fecha             DateTime? @default(now()) @db.Timestamp(6)\n  temperatura       Decimal?  @db.Decimal\n  humedad           Decimal?  @db.Decimal\n  luz               Int?\n  vibracion         Int?\n  calidad_aire_ppm  Decimal?  @db.Decimal\n  alcohol_detectado Boolean?\n}\n\nmodel configuraciones {\n  id                      Int      @id @default(autoincrement())\n  umbral_temperatura      Decimal? @db.Decimal\n  umbral_humedad          Decimal? @db.Decimal\n  umbral_luz              Int?\n  umbral_vibracion        Int?\n  umbral_calidad_aire_ppm Decimal? @db.Decimal\n  alerta_alcohol          Boolean?\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"lecturas_sensores\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"fecha\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"temperatura\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"humedad\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"luz\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"vibracion\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"calidad_aire_ppm\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"alcohol_detectado\",\"kind\":\"scalar\",\"type\":\"Boolean\"}],\"dbName\":null},\"configuraciones\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"umbral_temperatura\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"umbral_humedad\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"umbral_luz\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"umbral_vibracion\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"umbral_calidad_aire_ppm\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"alerta_alcohol\",\"kind\":\"scalar\",\"type\":\"Boolean\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => require('node:buffer'));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => require("@prisma/client/runtime/query_compiler_bg.postgresql.js")),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => require("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.js"));
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map