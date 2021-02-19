PAGES = {};

// Main page
PAGES.main = {};
PAGES.main.page = document.querySelector("#main");

// gas
PAGES.gas = {};
PAGES.gas.page = document.querySelector("#gas");


// phone
PAGES.phone = {};
PAGES.phone.page = document.querySelector("#phone");


// facebook
PAGES.facebook = {};
PAGES.facebook.page = document.querySelector("#facebook");

// Code to run for each page
pageFunctions = {};

var path;

// Navigation
function navigate() {
  // Get the url path in a easy
  path = location.hash
    .substr(1)
    .toLowerCase()
    .split("/");

  // Find what page to show
  var currentPage = path[0];
  if (!PAGES.hasOwnProperty(currentPage)) {
    if (path[0] === "") {
      currentPage = "main";
    } else {
      currentPage = "phone";
    }
  }

  // Hide the previous active page
  for (var page in PAGES) {
    if (PAGES.hasOwnProperty(page)) {
      PAGES[page].page.classList.remove("active");
    }
  }

  // Show the active page and run its custom script
  PAGES[currentPage].page.classList.add("active");

  //Run custom page code if it exists
  if (pageFunctions.hasOwnProperty(currentPage)) {
    pageFunctions[currentPage]();
  }
}

// First time loading the page
navigate();

window.onhashchange = navigate;