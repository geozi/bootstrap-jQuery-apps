/**
 * The controller functions call upon
 * the crud functions to perform the necessary
 * changes in the value of the counter.
 */

import decreaseCounter, {resetCounter, increaseCounter} from '../model/crud-functions.js'

export default function onDecreaseClicked() {
    decreaseCounter()
}

function onResetClicked() {
    resetCounter()
}

function onIncreaseClicked() {
    increaseCounter()
}

export {onResetClicked, onIncreaseClicked}