function showTabs() {
  if (isExpanded) {
    document.getElementsByClassName('header')[0].style.height = "15vw";
    if (document.getElementsByClassName('header-spacer')[0]) {
      document.getElementsByClassName('header-spacer')[0].style.height = "15vw";
    }
    document.getElementsByClassName('tab_container')[0].style.display = "none";
  } else {
    document.getElementsByClassName('header')[0].style.height = "35vw";
    if (document.getElementsByClassName('header-spacer')[0]) {
      document.getElementsByClassName('header-spacer')[0].style.height = "35vw";
    }
    document.getElementsByClassName('tab_container')[0].style.display = "inherit";
  }
  isExpanded = !isExpanded;
}

var isExpanded = true;
