var TruckApp;
(function (TruckApp) {
    var Services;
    (function (Services) {
        var CarouselService = (function () {
            function CarouselService($resource) {
                this.carouselResource = $resource('/api/carousel/:id');
            }
            CarouselService.prototype.getCarouselItems = function () {
                return this.carouselResource.query();
            };
            return CarouselService;
        })();
        Services.CarouselService = CarouselService;
        angular.module('TruckApp').service('carouselService', CarouselService);
        var CityService = (function () {
            function CityService($resource) {
                this.cityResource = $resource('/api/cities/:id');
            }
            CityService.prototype.listCities = function () {
                return this.cityResource.query();
            };
            return CityService;
        })();
        Services.CityService = CityService;
        angular.module('TruckApp').service('cityService', CityService);
        var FindTrucksService = (function () {
            function FindTrucksService($resource, $routeParams) {
                this.$routeParams = $routeParams;
                this.truckResource = $resource('/api/findtrucks/:id');
                this.truckProfileResource = $resource('/api/truckprofile/:id');
            }
            FindTrucksService.prototype.getTrucksNoFilter = function () {
                return this.truckResource.query({ id: this.$routeParams['id'] }).$promise;
            };
            FindTrucksService.prototype.getTruck = function () {
                return this.truckProfileResource.get({ id: this.$routeParams['id'] }).$promise;
            };
            return FindTrucksService;
        })();
        Services.FindTrucksService = FindTrucksService;
        angular.module('TruckApp').service('findTruckService', FindTrucksService);
        var TruckReviewService = (function () {
            function TruckReviewService($resource, $location) {
                this.$location = $location;
                this.reviewResource = $resource('api/reviews/');
            }
            TruckReviewService.prototype.postReview = function (truck, review, validationErrors, createModalActive) {
                var _this = this;
                var reviewToSend = {
                    title: review.title,
                    content: review.content,
                    truckid: truck
                };
                this.reviewResource.save(reviewToSend).$promise
                    .then(function () {
                    review.title = '';
                    review.content = '';
                    createModalActive = false;
                    console.log(_this.$location.path());
                    _this.$location.path(_this.$location.path());
                    return [];
                }).catch(function (err) {
                    for (var prop in err.data.modelState) {
                        var propErrors = err.data.modelState[prop];
                        return validationErrors.concat(propErrors);
                    }
                });
            };
            return TruckReviewService;
        })();
        Services.TruckReviewService = TruckReviewService;
        angular.module('TruckApp').service('truckReviewService', TruckReviewService);
    })(Services = TruckApp.Services || (TruckApp.Services = {}));
})(TruckApp || (TruckApp = {}));
