// Only called whenever CheckForTimer is called
function UpdateDeltaTime () {
    deltaTime = input.runningTimeMicros() - prevUptime
    prevUptime = input.runningTimeMicros()
}
function GetInput () {
    if (Math.abs(input.rotation(Rotation.Pitch)) > deadzone) {
        if (input.rotation(Rotation.Pitch) > 0) {
            if (ballY < 4) {
                ballY += 1
            }
        } else {
            if (ballY > 0) {
                ballY += -1
            }
        }
    }
    if (Math.abs(input.rotation(Rotation.Roll)) > deadzone) {
        if (input.rotation(Rotation.Roll) > 0) {
            if (ballX < 4) {
                ballX += 1
            }
        } else {
            if (ballX > 0) {
                ballX += -1
            }
        }
    }
}
function UpdateBall () {
    led.unplot(oldBallX, oldBallY)
    oldBallY = ballY
    oldBallX = ballX
    GetInput()
    led.unplot(oldBallX, oldBallY)
    led.plotBrightness(oldBallX, oldBallY, 127)
    led.plot(ballX, ballY)
}
// Not used, would replace (parts of) forever
function CheckForTimer () {
    if (updateTimer < 0) {
        shouldUpdate = true
        updateTimer = updateMS
    }
    shouldUpdate = false
    updateTimer = updateTimer - deltaTime
    UpdateDeltaTime()
}
let shouldUpdate = false
let oldBallY = 0
let oldBallX = 0
let prevUptime = 0
let deltaTime = 0
let ballY = 0
let ballX = 0
let updateTimer = 0
let updateMS = 0
let deadzone = 0
let acceleration = 0
deadzone = 20
updateMS = 175
updateTimer = updateMS
ballX = 2
ballY = 2
basic.forever(function () {
    UpdateBall()
    basic.pause(updateMS)
})
