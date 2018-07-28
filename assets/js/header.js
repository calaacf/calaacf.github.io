var collapse_handle;
var isExpanded = true;

function showTabs() {
  clearTimeout(collapse_handle);
  if (isExpanded) {
    closeTabs();
  } else {
    openTabs();
  }
}

function openTabs() {
  isExpanded = true;
  document.getElementsByClassName('header')[0].style.height = "35vw";
  if (document.getElementsByClassName('header-spacer')[0]) {
    document.getElementsByClassName('header-spacer')[0].style.height = "35vw";
  }
  document.getElementsByClassName('tab_container')[0].style.width = "auto";
  document.getElementsByClassName('tab_container')[0].style.right = "4vw";
  document.getElementsByClassName('tab_container')[0].style.opacity = "1";
}

function closeTabs() {
  isExpanded = false;
  document.getElementsByClassName('header')[0].style.height = "15vw";
  if (document.getElementsByClassName('header-spacer')[0]) {
    document.getElementsByClassName('header-spacer')[0].style.height = "15vw";
  }
  document.getElementsByClassName('tab_container')[0].style.right = "-20vw";
  document.getElementsByClassName('tab_container')[0].style.opacity = "0";
  collapse_handle = setTimeout(function(){
    document.getElementsByClassName('tab_container')[0].style.width = "0";
  }, 2000);
}

////////////////////////////

$( document ).ready(function() {
  var lastScrollTop = 0;
  window.addEventListener("scroll", function(){
    if (!window.matchMedia("(max-width: 600px)").matches) {
      return;
    }
    clearTimeout(collapse_handle);
     var st = window.pageYOffset || document.documentElement.scrollTop;
     if (st > lastScrollTop && $(window).scrollTop() > 35){
        // downscroll code
        closeTabs();
     } else {
        // upscroll code
     }
     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
});
