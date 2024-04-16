$(document).ready(function () {
  $(".smooth-scroll").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1500,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $("html, body").bind("mousewheel", function (e) {
    $(this).stop();
  });

  $("html, body").bind("wheel", function (e) {
    $(this).stop();
  });

  $("html, body").bind("touchstart", function (e) {
    $(this).stop();
  });

  $(".smooth-scroll").on("click", function (e) {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        1500
      );

    return false;
  });

  $("button").on("mousedown", function (e) {
    $(e.target).addClass("focus");
    return false;
  });

  $("button").on("mouseup", function (e) {
    $(e.target).removeClass("focus");
  });

  $(window).on("mouseup", function (e) {
    var isFocused = $("button").hasClass("focus");

    if (isFocused) {
      $("button").removeClass("focus");
    }
  });
});

let dark = true;

let scrollPosition = 0;

function swap() {
  scrollPosition = window.scrollY || window.pageYOffset;
  document.getElementById("app-wrapper").style.display = "none";
  if (dark) {
    document.body.style.background = "#333";
    document
      .getElementById("pagestyle")
      .setAttribute("href", "styleslight.css");

    dark = false;
  } else {
    document.body.style.background = "tomato";
    document.getElementById("pagestyle").setAttribute("href", "style.css");

    dark = true;
  }

  document.getElementById("loading-spinner").style.display = "block";
  setTimeout(showContent, 2000);
}

function showContent() {
  document.getElementById("loading-spinner").style.display = "none";
  document.getElementById("app-wrapper").style.display = "block";
  window.scrollTo(0, scrollPosition);
}

window.addEventListener("load", function () {
  showContent();
});

function initate() {
  var dark = true;
}

window.onload = initate;

$(window).scroll(function () {
  var about_hT = $("#about-me").offset().top;
  var about_oH = $("#about-me").outerHeight();

  var skills_hT = $("#skills").offset().top;
  var skills_oH = $("#skills").outerHeight();

  var projects_hT = $("#projects").offset().top;
  var projects_oH = $("#projects").outerHeight();

  var experience_hT = $("#experience").offset().top;
  var experience_oH = $("#experience").outerHeight();

  var education_hT = $("#education").offset().top;
  var education_oH = $("#education").outerHeight();

  var wS = $(this).scrollTop();

  if (wS > about_hT - 30 && wS < about_hT + (about_oH - 40)) {
    $("#about-link").addClass("view");
  } else if (wS < about_hT) {
    $("#about-link").removeClass("view");
  } else {
    $("#about-link").removeClass("view");
  }

  if (wS > skills_hT - 160 && wS < skills_hT + (skills_oH - 120)) {
    $("#skills-link").addClass("view");
  } else if (wS < skills_hT) {
    $("#skills-link").removeClass("view");
  } else {
    $("#skills-link").removeClass("view");
  }

  if (wS > projects_hT - 140 && wS < projects_hT + (projects_oH - 80)) {
    $("#projects-link").addClass("view");
  } else if (wS < projects_hT) {
    $("#projects-link").removeClass("view");
  } else {
    $("#projects-link").removeClass("view");
  }

  if (wS > experience_hT - 100 && wS < experience_hT + (experience_oH - 160)) {
    $("#experience-link").addClass("view");
  } else if (wS < experience_hT) {
    $("#experience-link").removeClass("view");
  } else {
    $("#experience-link").removeClass("view");
  }

  if (wS > education_hT - 160 && wS < education_hT + education_oH) {
    $("#education-link").addClass("view");
  } else if (wS < experience_hT) {
    $("#education-link").removeClass("view");
  } else {
    $("#education-link").removeClass("view");
  }
});
