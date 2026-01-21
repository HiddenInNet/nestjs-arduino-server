-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "lecturas_sensores" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "temperatura" DECIMAL,
    "humedad" DECIMAL,
    "luz" INTEGER,
    "vibracion" INTEGER,
    "calidad_aire_ppm" DECIMAL,
    "alcohol_detectado" BOOLEAN,

    CONSTRAINT "lecturas_sensores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configuraciones" (
    "id" SERIAL NOT NULL,
    "umbral_temperatura" DECIMAL,
    "umbral_humedad" DECIMAL,
    "umbral_luz" INTEGER,
    "umbral_vibracion" INTEGER,
    "umbral_calidad_aire_ppm" DECIMAL,
    "alerta_alcohol" BOOLEAN,

    CONSTRAINT "configuraciones_pkey" PRIMARY KEY ("id")
);

