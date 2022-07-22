function maqStop() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}

function maqForward(x: number) {
    let t: number;
    if (x == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 160)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 195)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 160)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 195)
        t = 5000 * x
        basic.pause(t)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    
}

function maqBackward(x: number) {
    let t: number;
    if (x == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 195)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 160)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 195)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 160)
        t = 5000 * x
        basic.pause(t)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
    }
    
}

function maqTurnRight() {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 225)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(600)
    maqStop()
}

function maqTurnLeft() {
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(100)
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 225)
    basic.pause(600)
    maqStop()
}

function maqSteereRight() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}

function maqSteereLeft() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
}

function maqSlightLeft() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
}

function maqSlightRight() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
}

function originalstright() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
}

// basic.show_string("L")
basic.forever(function on_forever() {
    
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        // basic.show_string("S")
        originalstright()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        // basic.show_string("R")
        maqSlightRight()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqSlightLeft()
    }
    
})
