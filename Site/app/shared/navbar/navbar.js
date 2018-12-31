// var app = angular.module("mainApp", []);
// window.alert("BOO");
// app.directive("navList", function() {
//   return {
//     templateUrl: './app/shared/navbar/navlist.html'
//   };
// });

$(function() {
    $('.navbar-toggle').click(function() {
        if ($('#menu-bars').hasClass('ng-hide')) {
            $('#menu-bars').removeClass('ng-hide');
        } else {
            $('#menu-bars').addClass('ng-hide');
        }
        if ($('#menu-close').hasClass('ng-hide')) {
            $('#menu-close').removeClass('ng-hide');
        } else {
            $('#menu-close').addClass('ng-hide');
        }
    });
});