let stred = [2, 2]
let obdelnik = [[2, 0], [4, 0], [2, 1], [3, 0], [3, 1], [4, 1]]
let odraz = [[2, 0], [4, 0], [2, 1], [3, 0], [3, 1], [4, 1]]
zrcadli()
function vykresli() {
    basic.clearScreen()
    led.plotBrightness(stred[0], stred[1], 40)
    for (let i of obdelnik) {
        led.plot(i[0], i[1])
    }
    for (let e of odraz) {
        led.plotBrightness(e[0], e[1], 180)
    }
}

function zrcadli() {
    for (let i = 0; i < obdelnik.length; i++) {
        for (let e = 0; e < 2; e++) {
            odraz[i][e] = 2 * stred[e] - obdelnik[i][e]
        }
    }
    vykresli()
}

function otoc(vpravo: boolean) {
    let tempNula: number;
    for (let i = 0; i < obdelnik.length; i++) {
        tempNula = obdelnik[i][0]
        if (vpravo) {
            obdelnik[i][0] = -obdelnik[i][1] + stred[1] + stred[0]
            obdelnik[i][1] = tempNula - stred[0] + stred[1]
        } else {
            obdelnik[i][0] = obdelnik[i][1] - stred[1] + stred[0]
            obdelnik[i][1] = -tempNula + stred[0] + stred[1]
        }
        
    }
}

// obdélník se otáčí stisknutím tlačítka A
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    otoc(true)
    zrcadli()
})
