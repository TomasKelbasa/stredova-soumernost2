stred = [2,2]
obdelnik = [[2,0], [4,0], [2,1], [3,0], [3,1], [4,1]]
odraz = [[2,0], [4,0], [2,1], [3,0], [3,1], [4,1]]

zrcadli()

def vykresli():
    basic.clear_screen()
    led.plot_brightness(stred[0], stred[1], 40)
    for i in obdelnik:
        led.plot(i[0], i[1])
    for e in odraz:
       led.plot_brightness(e[0], e[1], 180)

def zrcadli():
    for i in range(obdelnik.length):
        for e in range(0,2):
            odraz[i][e] = 2*stred[e]-obdelnik[i][e]
    vykresli()

def otoc(vpravo):
    for i in range(0, obdelnik.length):
        tempNula = obdelnik[i][0]
        if vpravo:
            obdelnik[i][0] = -obdelnik[i][1] + stred[1] + stred[0]
            obdelnik[i][1] = tempNula - stred[0] + stred[1]
        else:
            obdelnik[i][0] = obdelnik[i][1] - stred[1] + stred[0]
            obdelnik[i][1] = -tempNula + stred[0] + stred[1]
            
#obdélník se otáčí stisknutím tlačítka A
def on_button_pressed_a():
    otoc(True)
    zrcadli()
input.on_button_pressed(Button.A, on_button_pressed_a)