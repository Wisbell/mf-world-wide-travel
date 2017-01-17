console.log("bookCtrl.js loaded")


app.controller('BookCtrl', function($scope, $http){
  console.log('BookCtrl controller')

  $http
    .get('data/guides.json')
      .then(function(val){
        $scope.bookList = val.data.guides
        console.log($scope.bookList)
      })
})
