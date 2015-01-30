angular.module('starter.services', [])

    .factory('Camera', ['$q', function ($q) {

        return {
            getPicture: function (options) {
                var q = $q.defer();

                navigator.camera.getPicture(function (result) {
                    // Do any magic you need
                    q.resolve(result);
                }, function (err) {
                    q.reject(err);
                }, options);

                return q.promise;
            }
        }
    }])


    .factory('Gallery', function () {

        var Gallery = function () {
            this.photos = [];
            this.more = true;
        };

        Gallery.prototype.loadMorePhotos = function () {
            console.log('loadMorePhotos');
            if (this.more) {
                console.log("need more");
                var l = this.photos.length;
                if (l >= 60) {
                    this.more = false;
                    console.log("no More Items Available");
                } else {
                    var data = [];
                    for (var i = l; i < l + 2; i++) {
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
                    this.photos = this.photos.concat(data);
                    console.log('photos size : ' + this.photos.length);
                }
            }
        };

        return Gallery;
    });
