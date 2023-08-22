function sendDataCalliope () {
    radio.setGroup(WeatherDataChannel)
    radio.sendString("" + (WeatherData))
    radio.setGroup(WeatherHumidChannel)
    radio.sendNumber(WeatherHumid)
    radio.setGroup(WeatherRainChannel)
    radio.sendNumber(WeatherRain)
    radio.setGroup(WeatherTempChannel)
    radio.sendNumber(WeatherTemp)
    radio.setGroup(WeatherWinddirectionChannel)
    radio.sendNumber(WeatherWinddirection)
    radio.setGroup(WeatherWindspeedChannel)
    radio.sendNumber(WeatherWindspeed)
    radio.setGroup(weatherGustspeedChannel)
    radio.sendNumber(weatherGustspeed)
    radio.setGroup(DataSlot0Channel)
    radio.sendNumber(DataSlot0)
    radio.setGroup(DataSlot1Channel)
    radio.sendNumber(DataSlot1)
    radio.setGroup(DataSlot2Channel)
    radio.sendNumber(DataSlot2)
    radio.setGroup(DataSlot3Channel)
    radio.sendNumber(DataSlot3)
    radio.setGroup(DataSlot4Channel)
    radio.sendNumber(DataSlot4)
    radio.setGroup(DataSlot5Channel)
    radio.sendNumber(DataSlot5)
    radio.setGroup(DataSlot6Channel)
    radio.sendNumber(DataSlot6)
    radio.setGroup(DataSlot7Channel)
    radio.sendNumber(DataSlot7)
    radio.setGroup(DataSlot8Channel)
    radio.sendNumber(DataSlot8)
    radio.setGroup(DataSlot9Channel)
    radio.sendNumber(DataSlot9)
    radio.setGroup(dataPickerChannel)
    radio.sendString("" + (dataPicker))
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    serial.writeLine("calliButtonA")
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    serial.writeLine("calliButtonAB")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    serial.writeLine("calliButtonB")
})
function Display () {
    if (status == 1) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.setLedColor(0xff8000)
    } else {
        basic.clearScreen()
        basic.setLedColor(0x00ff00)
    }
}
function receiveDataRaspi () {
    string = serial.readUntil(serial.delimiters(Delimiters.Dollar))
}
function sendDataRaspi () {
    serial.writeLine("weatherData#" + WeatherData)
    serial.writeLine("weatherDataChannel#" + WeatherDataChannel)
    serial.writeLine("weatherHumid#" + WeatherHumid)
    serial.writeLine("weatherHumidChannel#" + WeatherHumidChannel)
    serial.writeLine("weatherRain#" + WeatherRain)
    serial.writeLine("weatherRainChannel#" + WeatherRainChannel)
    serial.writeLine("weatherTemp#" + WeatherTemp)
    serial.writeLine("weatherTempChannel#" + WeatherTempChannel)
    serial.writeLine("weatherWinddirection#" + WeatherWinddirection)
    serial.writeLine("weatherWinddirectionChannel#" + WeatherWinddirectionChannel)
    serial.writeLine("weatherWindspeed#" + WeatherWindspeed)
    serial.writeLine("weatherWindspeedChannel#" + WeatherWindspeedChannel)
    serial.writeLine("weatherGustspeed#" + weatherGustspeed)
    serial.writeLine("weatherGustspeedChannel#" + weatherGustspeedChannel)
    serial.writeLine("dataSlot0#" + DataSlot0)
    serial.writeLine("dataSlot0Channel#" + DataSlot0Channel)
    serial.writeLine("dataSlot1#" + DataSlot1)
    serial.writeLine("dataSlot1Channel#" + DataSlot1Channel)
    serial.writeLine("dataSlot2#" + DataSlot2)
    serial.writeLine("dataSlot2Channel#" + DataSlot2Channel)
    serial.writeLine("dataSlot3#" + DataSlot3)
    serial.writeLine("dataSlot3Channel#" + DataSlot3Channel)
    serial.writeLine("dataSlot4#" + DataSlot4)
    serial.writeLine("dataSlot4Channel#" + DataSlot4Channel)
    serial.writeLine("dataSlot5#" + DataSlot5)
    serial.writeLine("dataSlot5Channel#" + DataSlot5Channel)
    serial.writeLine("dataSlot6#" + DataSlot6)
    serial.writeLine("dataSlot6Channel#" + DataSlot6Channel)
    serial.writeLine("dataSlot7#" + DataSlot7)
    serial.writeLine("dataSlot7Channel#" + DataSlot7Channel)
    serial.writeLine("dataSlot8#" + DataSlot8)
    serial.writeLine("dataSlot8Channel#" + DataSlot8Channel)
    serial.writeLine("dataSlot9#" + DataSlot9)
    serial.writeLine("dataSlot9Channel#" + DataSlot9Channel)
    serial.writeLine("dataPicker#" + dataPicker)
    serial.writeLine("dataPickerChannel#" + dataPickerChannel)
    serial.writeLine("status#" + status)
    serial.writeLine("calliLED#" + CalliLED)
    serial.writeLine("calliDisplay#" + CalliDisplay)
    serial.writeLine("SEQ#COMPLETE")
}
function storeData () {
    list = string.split(";")
    WeatherData = list[0]
    WeatherDataChannel = parseFloat(list[1])
    WeatherHumid = parseFloat(list[2])
    WeatherHumidChannel = parseFloat(list[3])
    WeatherRain = parseFloat(list[4])
    WeatherRainChannel = parseFloat(list[5])
    WeatherTemp = parseFloat(list[6])
    WeatherTempChannel = parseFloat(list[7])
    WeatherWinddirection = parseFloat(list[8])
    WeatherWinddirectionChannel = parseFloat(list[9])
    WeatherWindspeed = parseFloat(list[10])
    WeatherWindspeedChannel = parseFloat(list[11])
    weatherGustspeed = parseFloat(list[12])
    weatherGustspeedChannel = parseFloat(list[13])
    DataSlot0 = parseFloat(list[14])
    DataSlot0Channel = parseFloat(list[15])
    DataSlot1 = parseFloat(list[16])
    DataSlot1Channel = parseFloat(list[17])
    DataSlot2 = parseFloat(list[18])
    DataSlot2Channel = parseFloat(list[19])
    DataSlot3 = parseFloat(list[20])
    DataSlot3Channel = parseFloat(list[21])
    DataSlot4 = parseFloat(list[22])
    DataSlot4Channel = parseFloat(list[23])
    DataSlot5 = parseFloat(list[24])
    DataSlot5Channel = parseFloat(list[25])
    DataSlot6 = parseFloat(list[26])
    DataSlot6Channel = parseFloat(list[27])
    DataSlot7 = parseFloat(list[28])
    DataSlot7Channel = parseFloat(list[29])
    DataSlot8 = parseFloat(list[30])
    DataSlot8Channel = parseFloat(list[31])
    DataSlot9 = parseFloat(list[32])
    DataSlot9Channel = parseFloat(list[33])
    dataPicker = list[34]
    dataPickerChannel = parseFloat(list[35])
    status = parseFloat(list[36])
    CalliLED = parseFloat(list[37])
    CalliDisplay = parseFloat(list[38])
}
let list: string[] = []
let CalliDisplay = 0
let CalliLED = 0
let string = ""
let status = 0
let dataPicker = ""
let dataPickerChannel = 0
let DataSlot9 = 0
let DataSlot9Channel = 0
let DataSlot8 = 0
let DataSlot8Channel = 0
let DataSlot7 = 0
let DataSlot7Channel = 0
let DataSlot6 = 0
let DataSlot6Channel = 0
let DataSlot5 = 0
let DataSlot5Channel = 0
let DataSlot4 = 0
let DataSlot4Channel = 0
let DataSlot3 = 0
let DataSlot3Channel = 0
let DataSlot2 = 0
let DataSlot2Channel = 0
let DataSlot1 = 0
let DataSlot1Channel = 0
let DataSlot0 = 0
let DataSlot0Channel = 0
let weatherGustspeed = 0
let weatherGustspeedChannel = 0
let WeatherWindspeed = 0
let WeatherWindspeedChannel = 0
let WeatherWinddirection = 0
let WeatherWinddirectionChannel = 0
let WeatherTemp = 0
let WeatherTempChannel = 0
let WeatherRain = 0
let WeatherRainChannel = 0
let WeatherHumid = 0
let WeatherHumidChannel = 0
let WeatherData = ""
let WeatherDataChannel = 0
basic.setLedColor(0xff0000)
basic.pause(500)
basic.setLedColor(0x00ff00)
radio.setTransmitPower(7)
radio.setGroup(1)
serial.setRxBufferSize(128)
serial.setTxBufferSize(128)
basic.forever(function () {
    receiveDataRaspi()
    basic.setLedColor(0xff0000)
    storeData()
    sendDataCalliope()
    sendDataRaspi()
    Display()
})
