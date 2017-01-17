console.log("bookCtrl.js loaded")


app.controller('BookCtrl', function($scope, $http){
  console.log('BookCtrl controller')

  $http.get('data/guides.json')
    .then(function(val){
      $scope.booksList = val.data.guides
      console.log($scope.booksList)
    })
})
