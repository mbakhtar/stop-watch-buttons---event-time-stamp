input.onButtonPressed(Button.A, function () {
    start_time = control.eventTimestamp()
})
input.onButtonPressed(Button.AB, function () {
    elapsed_time = end_time - start_time
    basic.showNumber(elapsed_time / 1000000)
})
input.onButtonPressed(Button.B, function () {
    end_time = control.eventTimestamp()
})
let elapsed_time = 0
let end_time = 0
let start_time = 0
start_time = 0
end_time = 0
elapsed_time = 0
