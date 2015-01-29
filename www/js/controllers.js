angular.module('starter.controllers', ['ionic'])

    .controller('PhotosCtrl', function ($scope, Camera) {
        $scope.getPhoto = function () {
            console.log('Getting camera');
            Camera.getPicture().then(function (imageURI) {
                console.log(imageURI);
                $scope.lastPhoto = imageURI;
            }, function (err) {
                console.err(err);
            }, {
                quality: 75,
                targetWidth: 320,
                targetHeight: 320,
                saveToPhotoAlbum: false
            });
        }
    })

    .controller('GalleryCtrl', function ($scope) {
        $scope.photos = [];
        $scope.more = true;

        $scope.loadMorePhotos = function () {
            console.log("loadMorePhotos");

            if ($scope.more) {
                console.log("need more");
                var l = $scope.photos.length;
                if (l >= 60) {
                    $scope.more = false;
                    console.log("no More Items Available");
                } else {
                    var data = [];
                    for (var i = l; i < l + 4; i++) {
                        var height = ~~(Math.random() * 500) + 100;
                        var width = 280;
                        var padding = (height / width) * 100;
                        var id = ~~(Math.random() * 10000);
                        data.push({
                            "url": 'http://lorempixel.com/g/' + width + '/' + height + '/?' + id,
                            "height": height,
                            "width": width,
                            "padding": padding
                        });
                    }
                    /*angular.forEach(data, function (one) {
                     $scope.items.push(one);
                     });*/
                    $scope.photos = $scope.photos.concat(data);
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                }
            }
        };

    });

    //.controller('GalleryCtrl', function ($scope) {
    //    $scope.items = [];
    //    $scope.noMoreItemsAvailable = false;
    //
    //    $scope.loadMore = function() {
    //        console.log("  loadMore ...");
    //
    //        if (!$scope.noMoreItemsAvailable) {
    //            var l = $scope.items.length;
    //            if (l >= 60) {
    //                $scope.noMoreItemsAvailable = true;
    //                console.log("no More Items Available");
    //            } else {
    //                var data = [];
    //                for (var i = l; i < l + 4; i++) {
    //                    var height = ~~(Math.random() * 500) + 100;
    //                    var width = 280;
    //                    var padding = (height/width)*100;
    //                    var id = ~~(Math.random() * 10000);
    //                    data.push({"url":'http://lorempixel.com/g/'+ width + '/' + height + '/?' + id, "height" : height, "width":width, "padding":padding});
    //                }
    //                $scope.items = $scope.items.concat(data);
    //                $scope.$broadcast('scroll.infiniteScrollComplete');
    //            }
    //        }
    //    };
    //
    //    $scope.$on('$stateChangeSuccess', function() {
    //        console.log("state Change Success");
    //        $scope.loadMore();
    //    });
    //});
