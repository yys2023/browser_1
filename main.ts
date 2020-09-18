input.onButtonPressed(Button.A, function () {
    KSRobot_IOT.MQTTPublish1(KSRobot_IOT.TOPIC.Topic0, "1")
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    KSRobot_IOT.MQTTPublish1(KSRobot_IOT.TOPIC.Topic0, "0")
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.No)
})
KSRobot_IOT.MQTT_Data1(KSRobot_IOT.TOPIC.Topic0, function (message) {
    if (message == "1") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showIcon(IconNames.Yes)
    } else if (message == "0") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showIcon(IconNames.No)
    }
})
let strip: neopixel.Strip = null
KSRobot_IOT.Wifi_setup(
SerialPin.P15,
SerialPin.P8,
"ASUS_chickenhouse",
"0937675615",
KSRobot_IOT.IOT_Config.STATION
)
KSRobot_IOT.MQTT_set(
"broker.hivemq.com",
1883,
"yys2023",
"",
""
)
KSRobot_IOT.MQTTSubscribe1(KSRobot_IOT.TOPIC.Topic0, "yys/test1")
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.showIcon(IconNames.No)
basic.pause(1000)
