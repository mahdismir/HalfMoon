// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // add any functionality and listeners you want here
    $('select').material_select();
    $('select').parent().find('span.caret').remove();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $("#calendar_reserve").click(click_clean);
}

function click_clean(){
    $("#reserve_name").val("");
    $("#reverve_email").val("");
}

