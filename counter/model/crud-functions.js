/**
 * The functions contained in this module
 * conduct the actual decrease, increase, and reset
 * operations on the counter, whose result
 * is forwarded to the service functions.
 */

import showCounter from './service-functions.js'

const DEFAULT = 0
let counter = DEFAULT

export default function decreaseCounter(){
    counter--
    showCounter()
}

function resetCounter() {
    counter = DEFAULT
    showCounter()
}

function increaseCounter() {
    counter++
    showCounter()
}

export {resetCounter, increaseCounter, counter}