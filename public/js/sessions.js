/**
 * Created by juneruijiang on 2/28/17.
 */
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // add any functionality and listeners you want here
    $('#tabs-swipe').tabs();
}

function res_hide_info() {
    $("#res_hide").toggleClass("sessions-hiding");

    if($("#res_hide").siblings(".sessions-icon-center").hasClass("glyphicon-plus")){
        $("#res_hide").siblings(".sessions-icon-center").removeClass("glyphicon-plus");
        $("#res_hide").siblings(".sessions-icon-center").addClass("glyphicon-minus");
    }
    else{
        $("#res_hide").siblings(".sessions-icon-center").removeClass("glyphicon-minus");
        $("#res_hide").siblings(".sessions-icon-center").addClass("glyphicon-plus");
    }
}

function neuro_hide_info() {
    $("#neuro_hide").toggleClass("sessions-hiding");

    if($("#neuro_hide").siblings(".sessions-icon-center").hasClass("glyphicon-plus")){
        $("#neuro_hide").siblings(".sessions-icon-center").removeClass("glyphicon-plus");
        $("#neuro_hide").siblings(".sessions-icon-center").addClass("glyphicon-minus");
    }
    else{
        $("#neuro_hide").siblings(".sessions-icon-center").removeClass("glyphicon-minus");
        $("#neuro_hide").siblings(".sessions-icon-center").addClass("glyphicon-plus");
    }
}