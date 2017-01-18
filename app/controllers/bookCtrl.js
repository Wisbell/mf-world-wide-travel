console.log("bookCtrl.js loaded")


app.controller('BookCtrl', function($scope, GuideFactory){
  console.log('BookCtrl controller')

  // $http
  //   .get('data/guides.json')
  //     .then(function(val){
  //       $scope.bookList = val.data.guides
  //       console.log($scope.bookList)
  //     })

  GuideFactory.getGuideList()
    .then(function(val){
      console.log("val from getGuidesList func", val)
      $scope.bookList = val
    })

})
