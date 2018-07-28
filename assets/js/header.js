var collapse_handle;

function showTabs() {
  clearTimeout(collapse_handle);
  if (isExpanded) {
    document.getElementsByClassName('header')[0].style.height = "15vw";
    if (document.getElementsByClassName('header-spacer')[0]) {
      document.getElementsByClassName('header-spacer')[0].style.height = "15vw";
    }
    document.getElementsByClassName('tab_container')[0].style.right = "-20vw";
    document.getElementsByClassName('tab_container')[0].style.opacity = "0";
    collapse_handle = setTimeout(function(){
      document.getElementsByClassName('tab_container')[0].style.width = "0";
    }, 2000);
  } else {
    document.getElementsByClassName('header')[0].style.height = "35vw";
    if (document.getElementsByClassName('header-spacer')[0]) {
      document.getElementsByClassName('header-spacer')[0].style.height = "35vw";
    }
    document.getElementsByClassName('tab_container')[0].style.width = "auto";
    document.getElementsByClassName('tab_container')[0].style.right = "4vw";
    document.getElementsByClassName('tab_container')[0].style.opacity = "1";
  }
  isExpanded = !isExpanded;
}

var isExpanded = true;
