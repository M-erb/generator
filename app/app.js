var genApp = angular.module('genApp', ['ngAnimate','ui.router','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);

genApp.controller('NumgenCtrl', ['$scope', '$cookies', '$localStorage', '$sessionStorage', function($scope, $cookies, $localStorage, $sessionStorage){

  $scope.storage = $localStorage;
  //$scope.pageClass = 'directory';

  // FOR TESTING remove once done
  $scope.genPushed = true

  //filling data
  $scope.frontLetters = 'ABC'
  $scope.backLetters = ''
  $scope.genCount = 30
  $scope.genStarNum = 0
  $scope.gendigits = 3

  $scope.numCheck = function() {
    if ($scope.genCount < 1) {
      $scope.genCount = 1
    }
    if ($scope.genStarNum < 0) {
      $scope.genStarNum = 0
    }
  }

  $scope.genConfig = {}
  $scope.num = []
  $scope.submit = function() {
    //setup config
    $scope.genConfig.frontLetters = $scope.frontLetters
    $scope.genConfig.backLetters = $scope.backLetters
    $scope.genConfig.genCount = $scope.genCount
    $scope.genConfig.genStarNum = $scope.genStarNum
    $scope.genConfig.gendigits = $scope.gendigits

    //change button
    $scope.genPushed = true

    //clear form
    /*$scope.frontLetters = ''
    $scope.backLetters = ''
    $scope.genCount = ''
    $scope.genStarNum = 0
    $scope.gendigits = 3*/

    //put together nums
    for(var i=$scope.genConfig.genStarNum; i < $scope.genConfig.genCount + $scope.genConfig.genStarNum; i++) {
      var numFormat = function(n) {
        // adds zeros before the numbers as needed
        switch ($scope.genConfig.gendigits) {
          case 1:
            return n
            break
          case 2:
            if(n <= 9) {
              return n > 9 ? "" + n: "0" + n
            }else {
              return n > 99 ? "" + n: "" + n
            }
            break
          case 3:
            if(n <= 9) {
              return n > 9 ? "0" + n: "00" + n
            }else {
              return n > 99 ? "" + n: "0" + n
            }
            break
          case 4:
            if(n <= 9) {
              return n > 9 ? "00" + n: "000" + n
            }else if (n <= 99) {
                return n > 99 ? "0" + n: "00" + n
            }else if (n <= 999) {
              return n > 999 ? "" + n: "0" + n
            }else {
              return n
            }
            break
        }
      }

      $scope.num.push($scope.genConfig.frontLetters + numFormat(i) + $scope.genConfig.backLetters)
    }
  }

  $scope.clearGen = function() {
    $scope.num = []
    $scope.genPushed = false
  }

  $scope.clearConfig = function() {
    $scope.frontLetters = ''
    $scope.backLetters = ''
    $scope.genCount = ''
    $scope.genStarNum = 0

    $scope.genConfig = {}
  }


}]);
