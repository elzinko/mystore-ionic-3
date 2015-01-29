angular.module('starter.services', [])

.factory('Camera', ['$q', function($q) {
 
  return {
    getPicture: function(options) {
      var q = $q.defer();
      
      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);
      
      return q.promise;
    }
  }
}]);

//
//.factory('Placehold', function () {
//
//  var Placehold = function () {
//    //this.busy = false;
//    this.images = [];
//  };
//
//  Placehold.prototype.nextPage = function ($scope) {
//    if (this.busy) return;
//    //this.busy = true;
//
//    var last = this.images[this.images.length - 1];
//    for (var i = 1; i <= 10; i++) {
//      var height = ~~(Math.random() * 500) + 100;
//      var id = ~~(Math.random() * 10000);
//      this.images.push('http://lorempixel.com/g/280/' + height + '/?' + id);
//    }
//    //this.busy = false;
//    $scope.$broadcast('scroll.inifiniteScrollComplete');
//  };
//
//  return Placehold;
//});
