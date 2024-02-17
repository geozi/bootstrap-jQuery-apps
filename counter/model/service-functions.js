/**
 * The functions of this module are 
 * responsible for returning the changes
 * in the value of the counter to the UI 
 * elements.
 */

import {counter} from '../model/crud-functions.js'

export default function showCounter(){
   $('#counter').html(counter)
   styleCounter()
}

function styleCounter(){
    $('#counter').toggleClass('color-green',counter > 0)
    $('#counter').toggleClass('color-black', counter === 0)
    $('#counter').toggleClass('color-red', counter <0)
}