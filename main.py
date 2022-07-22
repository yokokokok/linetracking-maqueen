def maqStop():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
 

def maqForward(x):

    if x == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 160)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 195)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 160)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 195)
        t = 5000 * x
        basic.pause(t)
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
 

def maqBackward(x):

    if x == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 195)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 160)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 195)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 160)
        t = 5000 * x

        basic.pause(t)

        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
 


def maqTurnRight():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.pause(100)
    for i in range(3):
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
        basic.pause(100)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
        basic.pause(100)

    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 225)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(600)
    maqStop()
def maqTurnLeft():
    music.play_tone(330, music.beat(BeatFraction.WHOLE))
    basic.pause(100)
    for i in range(3):
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
        basic.pause(100)
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
        basic.pause(100)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 225)
    basic.pause(600)
    maqStop()
    

def maqSteereRight():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 150)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)

   

def maqSteereLeft():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    
def maqSlightLeft():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
def maqSlightRight():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 30)


def originalstright():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 70)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 70)







def on_forever():
    pass
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)== 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==0:
        #basic.show_string("S")
        originalstright()
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==0:
        #basic.show_string("R")
        maqSlightRight()
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==1:
        maqSlightLeft()
        #basic.show_string("L")



basic.forever(on_forever)
