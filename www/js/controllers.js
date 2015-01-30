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

    .controller('GalleryCtrl', function ($scope, Gallery) {
        //var gal = new Gallery();
        //$scope.Gallery = gal;
        //$scope.loadMore = function() {
        //    gal.loadMorePhotos();
        //    console.log('$broadcast scroll.infiniteScrollComplete');
        //    $scope.$broadcast('scroll.infiniteScrollComplete');
        //}
        $scope.Gallery = new Gallery();
        $scope.loadMore = function() {
            $scope.Gallery.loadMorePhotos();
            console.log('$broadcast scroll.infiniteScrollComplete');
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    });
