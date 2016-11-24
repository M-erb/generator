var skuApp = angular.module('skuApp', ['ngAnimate','ui.router','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);

skuApp.controller('genCtrl', ['$scope', '$cookies', '$localStorage', '$sessionStorage', function($scope, $cookies, $localStorage, $sessionStorage){

  $scope.storage = $localStorage;
  //$scope.pageClass = 'directory';

  //filling data
  $scope.frontLetters = 'ABC'
  $scope.backLetters = 'Q'
  $scope.genCount = 30

  $scope.genConfig = {}
  $scope.sku = []
  $scope.submit = function() {
    //setup config
    $scope.genConfig.frontLetters = $scope.frontLetters
    $scope.genConfig.backLetters = $scope.backLetters
    $scope.genConfig.genCount = $scope.genCount

    //change button
    $scope.genPushed = true

    //clear form
    /*$scope.frontLetters = ''
    $scope.backLetters = ''
    $scope.genCount = ''*/

    //generate skus
    for(var i=0; i < $scope.genConfig.genCount; i++) {
      var numFormat = function(n) {
        if(n <= 9) {
          return n > 9 ? "0" + n: "00" + n;
        }else {
          return n > 99 ? "" + n: "0" + n;
        }
      }
      $scope.sku.push($scope.genConfig.frontLetters + numFormat(i) + $scope.genConfig.backLetters)
    }
  }

  $scope.clearGen = function() {
    $scope.sku = []
    $scope.genPushed = false
    $scope.genConfig = {}
  }


}]);
