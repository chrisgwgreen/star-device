#define SERIAL_BAUDRATE 115200
// #define I2CADDRESS 9
#define FASTLED_ALLOW_INTERRUPTS 0
#define NUM_LEDS 50

#include <Arduino.h>
#include <SoftwareSerial.h>
#include <Wire.h>
#include <FastLED.h>

#define DATA_PIN 9

CRGB leds[NUM_LEDS];

int i2cValue;

void writeColour(unsigned long color)
{

  Serial.println('Write Colour');

  for (size_t i = 0; i < NUM_LEDS; i++)
  {
    leds[i] = color;

    FastLED.show();
    delay(50);
  }
}

void wireSetup()
{
  Serial.println("Arduino[SETUP]: Wire...");

  // Wire.begin(I2CADDRESS);
  // Wire.onReceive(receiveEvent);
}

void ledSetup()
{
  Serial.println("Arduino[SETUP]: FastLED...");

  FastLED.addLeds<WS2812B, DATA_PIN, RGB>(leds, NUM_LEDS);
  FastLED.setBrightness(255);
}

void setup()
{
  Serial.begin(SERIAL_BAUDRATE);
  Serial.println("Arduino[SETUP]: Initialised...");

  wireSetup();
  ledSetup();

  writeColour(0xffffff);
}

void loop()
{

  writeColour(0xff00ff);

  delay(1000);

  writeColour(0x00ff00);

  delay(1000);

  writeColour(0x0000ff);

  delay(1000);

  writeColour(0xf0f0f0);

  delay(1000);
}