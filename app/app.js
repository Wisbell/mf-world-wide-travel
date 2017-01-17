console.log('app.js loaded')

// Angular Stuff


var app = angular.module('travelApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hasPrefix('')

  $routeProvider
    .when('/')
    .otherwise({
      redirectTo: '/'
    })
})




app.controller('', function($scope){
  console.log('Main controller')
})
