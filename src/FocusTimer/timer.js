import state from "./state.js";
import * as el from "./elements.js"
import { stop } from "./actions.js";
import * as sounds from "./sounds.js"



export function countdown() {

    clearTimeout(state.countDownId)

    if(!state.isRunning) {
        return
    }

    let seconds = Number(el.seconds.textContent)
    let minutes = Number(el.minutes.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        stop()
        sounds.alarm.play()
        return
    }

    updateDisplay(minutes, seconds)
    
    state.countDownId = setTimeout(() => countdown(), 1000);
}

export function updateDisplay(minutes, seconds) {
    minutes =  minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}