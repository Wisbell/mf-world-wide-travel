console.log('app.js loaded')

// Angular Stuff


var app = angular.module('travelBookApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')

  $routeProvider
    .when('/', {
      controller: 'BookCtrl',
      templateUrl: 'partials/booksView.html'
      })
    .otherwise({
      redirectTo: '/'
    })
})




// app.controller('BookCntrl', function($scope){
//   console.log('Main controller')
// })
