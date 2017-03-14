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
    $(".calendar-resbtn").click(getClickInfo);
}

function click_clean(){
    $("#reserve_name").val("");
    $("#reverve_email").val("");
    $("#des-class-name").text("");
    $("#des-class-time").text("");
}

function getClickInfo(){
    $info_name = $("td .class-name");
    $info_time = $("td .class-time");
    $class_name = $(this).parent().parent().find($info_name).text();
    $class_time = $(this).parent().parent().find($info_time).text();
    $("#des-class-name").text($class_name);
    $("#des-class-time").text($class_time);

}