var app = angular.module("mainApp", []);

app.directive("navMain", function() {
  return {
    templateUrl: './app/shared/navbar/index.html'
  };
});

app.directive("navList", function() {
  return {
    templateUrl: './app/shared/navbar/navlist.html'
  };
});

app.directive("footerMain", function() {
  return {
    templateUrl: './app/shared/footer/index.html'
  };
});

app.directive("pageConstruction", function() {
  return {
    restrict: "C",
    templateUrl: './app/components/construction/index.html'
  };
});

app.directive("pageHome", function() {
  return {
    restrict: "C",
    templateUrl: './app/components/home/index.html'
  };
});

app.directive("pageAbout", function() {
  return {
    restrict: "C",
    templateUrl: './app/components/about/index.html'
  };
});

app.directive("pageServices", function() {
  return {
    restrict: "C",
    templateUrl: './app/components/services/index.html'
  };
});

app.directive("pageContact", function() {
  return {
    restrict: "C",
    templateUrl: './app/components/contact/index.html'
  };
});

$(document).ready(function() {
  $("[class^=page-]").each(function() {
    $(this).addClass('ng-hide');
  });
  var path = window.location.pathname.toLowerCase();
  switch(path) {
    case "/":
      $('.page-home').removeClass('ng-hide');
      $('.contentHolder').addClass('ng-hide');
      break;
    case "/home":
      $('.page-home').removeClass('ng-hide');
      break;
    case "/about":
      $('.page-about').removeClass('ng-hide');
      break;
    case "/services":
      $('.page-services').removeClass('ng-hide');
      break;
    case "/contact":
      $('.page-contact').removeClass('ng-hide');
      break;
    default:
      $('.page-not-found').removeClass('ng-hide');
      break;
  };
});

// function partialResets() {
//   $('.page-about').addClass('ng-hide');
//   $('.page-construction').addClass('ng-hide');
//   $('.page-services').addClass('ng-hide');
// }