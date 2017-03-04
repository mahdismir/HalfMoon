/**
 * Created by juneruijiang on 3/4/17.
 */
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
    $(".button-collapse").sideNav({
        menuWidth: 200, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choo
    });
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // add any functionality and listeners you want here
    
    //$(".button-collapse").sideNav();
}
