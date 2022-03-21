input.onButtonPressed(Button.A, function () {
    if (amount <= 0) {
        return
    }
    amount += -1
    basic.showNumber(amount)
})
input.onButtonPressed(Button.B, function () {
    amount += 1
    basic.showNumber(amount)
})
radio.onReceivedValue(function (name, value) {
    if (name == "amount") {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        for (value; value--;) {
            basic.showLeds(`
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            . . # . .
            `)
            basic.showLeds(`
            . # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
            basic.showLeds(`
            . # . . .
            # . . . .
            # # # # #
            # . . . .
            . # . . .
            `)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue("amount", amount)
})
let amount = 0
radio.setGroup(1)
