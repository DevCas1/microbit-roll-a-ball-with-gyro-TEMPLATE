let gyroRoll = 0
let gyroPitch = 0
let acceleration = 0
let deadzone = 0
let wallLEDBrightness = 0
basic.forever(function () {
    gyroPitch = input.rotation(Rotation.Pitch)
    gyroRoll = input.rotation(Rotation.Roll)
})
