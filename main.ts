let commencé = 0
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # # . # #
        # . . . #
        # # . # #
        # # # # #
        `)
    basic.pause(50)
}
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
music.playMelody("A B C5 - - - - - ", 280)
commencé = 1
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (commencé == 1) {
        serial.writeLine("intensite lumineuse")
        serial.writeLine("" + (input.lightLevel()))
        serial.writeLine("")
        serial.writeLine("temperature")
        serial.writeLine("" + (input.temperature()))
        serial.writeLine("")
        serial.writeLine("magnetisme")
        serial.writeLine("" + (input.magneticForce(Dimension.Strength)))
        serial.writeLine("")
        basic.pause(1000)
    }
})
