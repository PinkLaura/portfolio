function filterTags(t) {

 /* var allTags;
  var allTags = document.getElementsByClassName("pl-tag");
 
  for(i=0; i< allTags.length; i++){

    if (allProjects[i].className.indexOf(t) > -1) allProjects[i].classList.add("active");
  }*/

  const allTags = document.getElementsByClassName("pl-tag");


  for(let i=0; i< allTags.length; i++){
    allTags[i].classList.remove("active");

    if (allTags[i].classList.contains(t)){
      allTags[i].classList.add("active");
    }
  }


  const allProjects = document.getElementsByClassName("project-div");

  if(t == "all") t ="";


  for(let i=0; i< allProjects.length; i++){
    allProjects[i].classList.remove("project-show");

    if (allProjects[i].className.indexOf(t) > -1) {
      allProjects[i].classList.add("project-show");
    }

  }

};


$(document).ready(function() {

// function to close the cv part on mobile
  $(function() {

        if ($(window).width() > 700) {
        $('.collapse').addClass('show');
        $('.navbar-collapse').removeClass('show');
    }

  });

  const filter = window.location.search.slice(1).split("=")[1];

  if(filter){
    filterTags(filter);
  }
  else{    
      filterTags("all");
  }

});
