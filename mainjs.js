$(document).ready(function(){
    $(".smooth-scroll").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 3300, function(){
                window.location.hash = hash;
            });
        } 
    });

    $('html, body').bind('mousewheel', function(e){ 
        $(this).stop();
    });

    $('html, body').bind('wheel', function(e){ 
        $(this).stop();
    });

    $('html, body').bind('touchstart', function(e){ 
        $(this).stop();
    });

    $(".smooth-scroll").on('click', function(e) {
          $('html, body').stop().animate({
                scrollTop: $( $(this).attr('href') ).offset().top
          }, 3300);

        return false;
    });

});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
    
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

var dark = true; 

function swap() {
    if (dark){
        document.getElementById("pagestyle").setAttribute("href", "styleslight.css");
        // document.getElementById("tablogo").setAttribute("href", "images/tablogo.png");  
        dark = false;  
    } else {
        document.getElementById("pagestyle").setAttribute("href", "style.css");
        // document.getElementById("tablogo").setAttribute("href", "images/tablogodark.png");
        dark = true;   
    }
}

function activate(clicked_id){
    document.getElementById(clicked_id).classList.add("view");
}
    
function initate() {
    var dark = true; 
}

window.onload = initate;

$(window).scroll(function() {

    var about_hT = $('#about-me').offset().top;
    var about_oH = $('#about-me').outerHeight();

    var skills_hT = $('#skills').offset().top;
    var skills_oH = $('#skills').outerHeight();

    var projects_hT = $('#projects').offset().top;
    var projects_oH = $('#projects').outerHeight();

    var experience_hT = $('#experience').offset().top;
    var experience_oH = $('#experience').outerHeight();

    var education_hT = $('#education').offset().top;
    var education_oH = $('#education').outerHeight();

    var wS = $(this).scrollTop();

    if (((wS > (about_hT - 30)) && (wS < (about_hT + about_oH)))){
        $('#about-link').addClass('view');
    } else if (wS < (about_hT)){
        $('#about-link').removeClass('view');
    } else {
        $('#about-link').removeClass('view');
    }

    if (((wS > skills_hT - 120) && (wS < (skills_hT + skills_oH)))){
        $('#skills-link').addClass('view');
    } else if (wS < (skills_hT)){
        $('#skills-link').removeClass('view');
    } else {
        $('#skills-link').removeClass('view');
    }

    if (((wS > projects_hT - 20) && (wS < (projects_hT + projects_oH)))){
        $('#projects-link').addClass('view');
    } else if (wS < (projects_hT)){
        $('#projects-link').removeClass('view');
    } else {
        $('#projects-link').removeClass('view');
    }

    if (((wS > experience_hT - 20) && (wS < (experience_hT + experience_oH)))){
        $('#experience-link').addClass('view');
    } else if (wS < (experience_hT)){
        $('#experience-link').removeClass('view');
    } else  {
        $('#experience-link').removeClass('view');
    }

    if (((wS > education_hT - 25) && (wS < (education_hT + education_oH)))){
        $('#education-link').addClass('view');
    } else if (wS < (experience_hT)){
        $('#education-link').removeClass('view');
    } else {
        $('#education-link').removeClass('view');
    }
        
});
