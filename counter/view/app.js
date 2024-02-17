import onDecreaseClicked, {onResetClicked, onIncreaseClicked} from '../controller/controllers.js'

/**
 * On window load, it registers listeners to
 * the buttons.
 * When catching an event, the listeners will
 * trigger the controller functions.
 */
$(function(){
    $('#btnDecr').on('click', function() {
        onDecreaseClicked()
    })

    $('#btnReset').on('click', function() {
        onResetClicked()
    })

    $('#btnIncr').on('click', function() {
        onIncreaseClicked()
    })
})
