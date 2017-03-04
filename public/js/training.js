/**
 * Created by juneruijiang on 3/4/17.
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

function two_hide_info() {
        $("#200h_hide").toggleClass("training-hiding");

    if($("#200h_hide").siblings(".sessions-icon-center").hasClass("glyphicon-plus")){
        $("#200h_hide").siblings(".sessions-icon-center").removeClass("glyphicon-plus");
        $("#200h_hide").siblings(".sessions-icon-center").addClass("glyphicon-minus");
    }
    else{
        $("#200h_hide").siblings(".sessions-icon-center").removeClass("glyphicon-minus");
        $("#200h_hide").siblings(".sessions-icon-center").addClass("glyphicon-plus");
    }
}

function five_hide_info() {
    $("#500h_hide").toggleClass("training-hiding");

    if($("#500h_hide").siblings(".sessions-icon-center").hasClass("glyphicon-plus")){
        $("#500h_hide").siblings(".sessions-icon-center").removeClass("glyphicon-plus");
        $("#500h_hide").siblings(".sessions-icon-center").addClass("glyphicon-minus");
    }
    else{
        $("#500h_hide").siblings(".sessions-icon-center").removeClass("glyphicon-minus");
        $("#500h_hide").siblings(".sessions-icon-center").addClass("glyphicon-plus");
    }
}

function conEdu_hide_info() {
    $("#conEdu_hide").toggleClass("training-hiding");

    if($("#conEdu_hide").siblings(".sessions-icon-center").hasClass("glyphicon-plus")){
        $("#conEdu_hide").siblings(".sessions-icon-center").removeClass("glyphicon-plus");
        $("#conEdu_hide").siblings(".sessions-icon-center").addClass("glyphicon-minus");
    }
    else{
        $("#conEdu_hide").siblings(".sessions-icon-center").removeClass("glyphicon-minus");
        $("#conEdu_hide").siblings(".sessions-icon-center").addClass("glyphicon-plus");
    }
}