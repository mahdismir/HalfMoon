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

    if($("#200h_hide").siblings(".training-icon-center").hasClass("glyphicon-plus")){
        $("#200h_hide").siblings(".training-icon-center").removeClass("glyphicon-plus");
        $("#200h_hide").siblings(".training-icon-center").addClass("glyphicon-minus");
    }
    else{
        $("#200h_hide").siblings(".training-icon-center").removeClass("glyphicon-minus");
        $("#200h_hide").siblings(".training-icon-center").addClass("glyphicon-plus");
    }
}

function resYoga_hide_info() {
    $("#resYoga_hide").toggleClass("training-hiding");

    if($("#resYoga_hide").siblings(".training-icon-center").hasClass("glyphicon-plus")){
        $("#resYoga_hide").siblings(".training-icon-center").removeClass("glyphicon-plus");
        $("#resYoga_hide").siblings(".training-icon-center").addClass("glyphicon-minus");
    }
    else{
        $("#resYoga_hide").siblings(".training-icon-center").removeClass("glyphicon-minus");
        $("#resYoga_hide").siblings(".training-icon-center").addClass("glyphicon-plus");
    }
}

function workshops_hide_info() {
    $("#workshops_hide").toggleClass("training-hiding");

    if($("#workshops_hide").siblings(".training-icon-center").hasClass("glyphicon-plus")){
        $("#workshops_hide").siblings(".training-icon-center").removeClass("glyphicon-plus");
        $("#workshops_hide").siblings(".training-icon-center").addClass("glyphicon-minus");
    }
    else{
        $("#workshops_hide").siblings(".training-icon-center").removeClass("glyphicon-minus");
        $("#workshops_hide").siblings(".training-icon-center").addClass("glyphicon-plus");
    }
}