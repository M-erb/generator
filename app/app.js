var skuApp = angular.module('skuApp', ['ngAnimate','ui.router','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);

skuApp.controller('SKUgenCtrl', ['$scope', '$cookies', '$localStorage', '$sessionStorage', function($scope, $cookies, $localStorage, $sessionStorage){

  $scope.storage = $localStorage;
  //$scope.pageClass = 'directory';

  //filling data
  $scope.frontLetters = 'ABC'
  $scope.backLetters = 'Q'
  $scope.genCount = 30
  $scope.genStarNum = 0

  $scope.genConfig = {}
  $scope.sku = []
  $scope.submit = function() {
    //setup config
    $scope.genConfig.frontLetters = $scope.frontLetters
    $scope.genConfig.backLetters = $scope.backLetters
    $scope.genConfig.genCount = $scope.genCount
    $scope.genConfig.genStarNum = $scope.genStarNum

    //change button
    $scope.genPushed = true

    //clear form
    /*$scope.frontLetters = ''
    $scope.backLetters = ''
    $scope.genCount = ''*/

    //put together SKUs
    for(var i=$scope.genConfig.genStarNum; i < $scope.genConfig.genCount + $scope.genConfig.genStarNum; i++) {
      var numFormat = function(n) {
        // adds zeros before the numbers as needed
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

  $scope.clearConfig = function() {
    $scope.frontLetters = ''
    $scope.backLetters = ''
    $scope.genCount = ''
    $scope.genStarNum = 0

    $scope.genConfig = {}
  }


}]);
