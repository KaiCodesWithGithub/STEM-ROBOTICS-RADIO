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
radio.sendValue("lithium", value)
    } else if (name = "lithium") {
        for (value; value--;) {
            basic.showLeds(`
            #####
            #####
            ..#..
            ..#..
            ..#..
            `)
            basic.showLeds(`
            ##...
            ##...
            #####
            ##...
            ##...
            `)
        }
basic.showString("" + (`${value} Mobile Phones`))
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue("amount", amount)
})
let amount = 0
radio.setGroup(1)
