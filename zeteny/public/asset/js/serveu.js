$(document).ready(function() {
    // Show/hide filter window when options button is clicked
    $(".option-btn").click(function() {
      $("#filter-window").toggle();
    });
  
    // Hide filter window when done button is clicked
    $(".done-btn").click(function() {
      $("#filter-window").hide();
    });
  });