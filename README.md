<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Iniciación del proyecto

```bash
$ npm install
```

## Compilar y ejecutar el proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Descripción del servidor

Haremos peticiones a la base de datos previamente alojada usando la siguiente URL:

```
postgresql://postgres:USUARIO@DIRECCION:PUERTO/NOMBRE_BD?schema=public
```

Actualmente solo disponemos de un solo endpoint ya que cada vez que hacemos una petición queremos obtener toda la información de la tabla

ENDPOINT

```
IP:3000/client/get-all-data
```

## Arduino

El script empleado en el arduino es el siguiente

```c
//librerías HDT11
#include <DHT.h>  //DHT11
#include <DHT_U.h>
#include <MQ135.h>          //Sensor calidad del aire
#include <LiquidCrystal.h>  // pantalla LCD
#include <SoftwareSerial.h> //modulo bluetooth

//Definicion de variables:
#define DHTtipo DHT11
int DHTpin = 2;
int VibracionPin = 3;
int LuminosidadPin = A5;
int MQDigitalPin = 4;
int MQAnalogPin = A4;
int boton = 9;

//variables para el control de menú
int estado;
int estadoanterior = 0;
int pulsos;

//Difinicion Pinen LCD
int rs = 12;
int e = 13;
int d4 = 8;
int d5 = 7;
int d6 = 6;
int d7 = 5;

// Variables para el control de tiempo
unsigned long ultimaTransmision = 0;
const unsigned long intervalo = 5000;

//inicializacion de sensores:
DHT dht(DHTpin, DHTtipo);

MQ135 sensorMQ = MQ135(MQAnalogPin);

LiquidCrystal lcd(rs, e, d4, d5, d6, d7);

// Definimos los pines: RX (11), TX (10)
SoftwareSerial BT(10, 11);

void setup() {
  Serial.begin(9600);
  //sensor DHT11
  dht.begin();
  //Sensor vibraciones
  pinMode(VibracionPin, INPUT);
  //Sensor Luminosidad
  pinMode(LuminosidadPin, INPUT);
  // Sensor calidad del aire
  pinMode(MQDigitalPin, INPUT);
  //pantalla LCD
  lcd.begin(16, 2);
  //boton
  pinMode(boton, INPUT);
  //bluetooth
  BT.begin(9600);
}

void loop() {
  int humedad = dht.readHumidity();
  int temperatura = dht.readTemperature();  //por defecto en grados ºC si quisieramos Fahrenheit ponemos "true" entre los parentesis
  float temperaturaF = dht.readTemperature(true);
  Serial.print("Humedad Relativa: ");
  Serial.print(humedad);
  Serial.print("% / Temperatura: ");
  Serial.print(temperatura);
  Serial.print("ºC / ");
  Serial.print(temperaturaF);
  Serial.print("F /");

  //SENSOR DE VIBRACION
  Serial.print(" Vibracion: ");
  int valorVibracion = digitalRead(VibracionPin);
  if (valorVibracion == 1) {
    Serial.print("SI / ");
  } else {
    Serial.print("NO / ");
  }

  //SENSOR LUMINOSIDAD
  int ValorLuminosidad = analogRead(LuminosidadPin);
  Serial.print(ValorLuminosidad);

  //para hacerlo mas preciso hay que poner mas condiciones y listo
  if (ValorLuminosidad <= 300) {
    Serial.print("Día / ");
  } else if (ValorLuminosidad > 300) {
    Serial.print("Noche / ");
  }

  //SENSOR CALIDAD DEL AIRE
  boolean mq_estado = digitalRead(MQDigitalPin);
  if (mq_estado) {
    Serial.print("Sin presencia de alcohol / ");
  } else {
    Serial.print("Alcohol detectado / ");
  }

  //representación numérica del voltaje de salida del sensor. num mayor = mayor voltaje
  int adc_MQ = analogRead(A4);                       //Leemos la salida analógica  del MQ
  Serial.print("adc:");
  Serial.print(adc_MQ); //cuanto mayor es el valor mayor es la concentracion de gases

  float ppm = sensorMQ.getPPM();
  Serial.print(" / Concentracion de gases: ");
  Serial.print(ppm/ 10000);
  Serial.println(" ppm ");

  //PANTALLA LCD
  estado = digitalRead(boton);
  delay(200);
  if (estado>estadoanterior){
    pulsos = pulsos+1;
  }else if(pulsos == 1){
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("humedad: ");
      lcd.print(humedad);
      lcd.print("%");
      lcd.setCursor(0, 1);
      lcd.print("Temp: ");
      lcd.print(temperatura);
      lcd.print("C/");
      lcd.print(temperaturaF);
      lcd.print("F");
  }else if(pulsos == 2){
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("Seismo: ");
        if (valorVibracion == 1) {
          lcd.print("SI");
        } else {
          lcd.print("NO");
    }
  }else if(pulsos == 3){
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("Luz: ");
        if (ValorLuminosidad < 300) {
          lcd.print("Dia");
  } else if (ValorLuminosidad > 301) {
    lcd.print("Noche");
  }

  }if(pulsos == 4){
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Alc. Air:");
    if (mq_estado) {
    lcd.print("NO");
    } else {
    lcd.print("SI ");
    }

    lcd.setCursor(0,1);
    lcd.print("Con.Gas:");
    lcd.print(ppm / 10000);
    lcd.print("ppm");
  }
  if(pulsos > 4){
    pulsos=1;
  }

  //envio de los datos por bluetooth
  if (millis() - ultimaTransmision >= intervalo) {
    //envio los datos en el formato que los espera el script
    String datosLimpios = String(temperatura) + "," +
                          String(humedad) + "," +
                          String(ValorLuminosidad) + "," +
                          String(valorVibracion) + "," +
                          String(ppm/10000) + "," +
                          String(mq_estado);

    //Serial.println(datosLimpios);
    BT.println(datosLimpios);

    ultimaTransmision = millis();
  }

  //delay(1000);
}
```

## Script en Python para manejar los datos

Una vez obtenemos los datos por bluetooth los leemos con el siguiente script y posteriormente los insertamo en nuestra base de datos

```python
import serial
import psycopg2
import time
from datetime import datetime

# 1. Configuración del Puerto Serial
# Hay que cambiar el PUERTO_SERIAL al puerto que le haya asignado el ordenador al HC-05 en caso de que haya cambiado
PUERTO_SERIAL = 'COM14'
BAUDIOS = 9600
# 2. Configuración de la base de datos
DB_CONFIG = {
    "host": "localhost",
    "database": "proyecto_iot",
    "user": "postgres",
    "password": "root",
    "port": "5432"
}

def conectar_db():
    """Establece conexión con el servidor PostgreSQL"""
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        print("Conexión exitosa a PostgreSQL")
        return conn
    except Exception as e:
        print(f"Error conectando a la base de datos: {e}")
        return None

def insertar_en_db(conexion, linea_datos):
    """Procesa la cadena 'temp,hum,luz,vib,ppm' e inserta en la tabla"""
    try:
        #Hacemos una lectura de los datos que llegas en forma de array
        # Separamos los datos por la coma
        datos = linea_datos.split(',')

        # Verificamos que lleguen los 5 valores esperados
        if len(datos) == 6:
            cursor = conexion.cursor()

            sql = """
                INSERT INTO lecturas_sensores
                (temperatura, humedad, luz, vibracion, calidad_aire_ppm, alcohol_detectado)
                VALUES (%s, %s, %s, %s, %s,%s)
            """

            # --- CORRECCIÓN DE LÓGICA BOOLEANA ---
            # 1. Convertimos a entero primero: int("0") -> 0, int("1") -> 1
            # 2. En el sensor MQ: 0 significa DETECTADO.
            #    Así que: si es "0", alcohol_detectado = True
            valor_mq = int(datos[5].strip())
            hay_alcohol = True if valor_mq == 0 else False

            # Convertimos los datos a los tipos correctos (float e int)
            valores = (
                float(datos[0]), # temperatura
                float(datos[1]), # humedad
                int(datos[2]),   # luz
                int(datos[3]),   # vibracion
                float(datos[4]), # calidad_aire_ppm
                hay_alcohol
            )

            cursor.execute(sql, valores)
            conexion.commit()
            cursor.close()
            print(f" [{datetime.now().strftime('%H:%M:%S')}] Insertado con éxito: {valores}")
        else:
            print(f" Datos incompletos o mal formados: {linea_datos}")

    except Exception as e:
        print(f" Error al insertar datos: {e}")
        conexion.rollback()

# ==========================
# INICIO DEL PROGRAMA
# ==========================
print("--- PUENTE DE DATOS ARDUINO -> POSTGRES ---")

db_conn = conectar_db()

if db_conn:
    try:
        # Abrimos el puerto serie
        ser = serial.Serial(PUERTO_SERIAL, BAUDIOS, timeout=1)
        print(f" Escuchando Arduino en {PUERTO_SERIAL}...")

        # Limpiamos el buffer inicial
        ser.flush()

        while True:
            if ser.in_waiting > 0:
                # Leemos la línea enviada por el Arduino
                linea = ser.readline().decode('utf-8').strip()

                if linea:
                    insertar_en_db(db_conn, linea)

            time.sleep(0.1)

    except serial.SerialException as e:
        print(f" Error de puerto serial: {e}")
    except KeyboardInterrupt:
        print("\n Cerrando el puente por el usuario...")
    finally:
        if db_conn:
            db_conn.close()
            print(" Conexión a Base de Datos cerrada.")
```
