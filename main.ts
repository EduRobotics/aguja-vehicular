input.onButtonPressed(Button.B, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 50)
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) < 8) {
        basic.showIcon(IconNames.Yes)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 50)
        basic.pause(2000)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 0)
    } else {
        if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) > 8) {
            basic.showIcon(IconNames.No)
            wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 0)
            basic.pause(2000)
        }
    }
})
