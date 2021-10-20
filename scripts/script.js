$(document).ready(function() {



// function to close the cv part on mobile
  $(function() {

        if ($(window).width() > 700) {
        $('.collapse').addClass('show');
        $('.navbar-collapse').removeClass('show');
    }

  });

  filterTags("all");

  function filterTags(t) {
    var allProjects, i;
    allProjects = document.getElementsByClassName("project-div");

    if(t == "all") t ="";

    for(i=0; i< allProjects.length; i++){

      allProjects[i].removeClass("project-show");
      if (allProjects[i].className.indexOf(t) > -1) allProjects[i].addClass("project-show");
    }
  };






});
