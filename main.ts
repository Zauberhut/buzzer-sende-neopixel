informatiktheater.trittmatte_pressed(informatiktheater.startbit_trittmattePort.port2, function () {
    strip.setPixelColorRange(0, neopixel.colors(NeoPixelColors.Blue), 2)
})
let strip: neopixel.Strip = null
strip = neopixel.create(HiwonderPins.P2, 300, PowerSource.Intern)
basic.forever(function () {
    strip.shift(1)
    strip.show()
    basic.pause(10)
})
