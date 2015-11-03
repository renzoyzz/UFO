var TruckApp;
(function (TruckApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(cityService, carouselService, findTruckService, $routeParams) {
                var _this = this;
                this.cityService = cityService;
                this.carouselService = carouselService;
                this.findTruckService = findTruckService;
                this.$routeParams = $routeParams;
                this.carouselSlide = 0;
                this.cities = cityService.listCities();
                this.carouselItems = carouselService.getCarouselItems();
                findTruckService.getTrucksNoFilter().then(function (data) {
                    _this.topTrucksList = data;
                });
            }
            HomeController.prototype.getReviews = function (truck) {
                return truck.writtenReviews.slice(0, 15);
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var FindTrucksController = (function () {
            function FindTrucksController(findTruckService) {
                var _this = this;
                this.findTruckService = findTruckService;
                findTruckService.getTrucksNoFilter().then(function (data) {
                    _this.truckList = data;
                });
            }
            FindTrucksController.prototype.getReviews = function (truck) {
                return truck.writtenReviews.slice(0, 9);
            };
            return FindTrucksController;
        })();
        Controllers.FindTrucksController = FindTrucksController;
        var TruckProfileController = (function () {
            function TruckProfileController(findTruckService, truckReviewService) {
                var _this = this;
                this.findTruckService = findTruckService;
                this.truckReviewService = truckReviewService;
                this.findTruckService.getTruck().then(function (data) {
                    _this.truck = data;
                    var dots;
                    for (var review in _this.truck.writtenReviews) {
                        if (_this.truck.writtenReviews[review].content.length > 100) {
                            dots = '...';
                        }
                        else {
                            dots = '';
                        }
                        _this.truck.writtenReviews[review].truncContent = _this.truck.writtenReviews[review].content.substring(0, 100) + dots;
                    }
                });
            }
            TruckProfileController.prototype.createModal = function () {
                this.createModalActive = true;
                this.modalCatcherActive = true;
            };
            TruckProfileController.prototype.reviewModal = function (review) {
                this.readReview = review;
                this.reviewModalActive = true;
                this.modalCatcherActive = true;
            };
            TruckProfileController.prototype.closeModal = function () {
                this.reviewModalActive = false;
                this.createModalActive = false;
                this.modalCatcherActive = false;
            };
            TruckProfileController.prototype.createReview = function (truck) {
                try {
                    this.validationErrors = this.truckReviewService.postReview(truck, this.review, this.validationErrors, this.createModalActive);
                }
                catch (error) {
                    console.log(error);
                }
            };
            return TruckProfileController;
        })();
        Controllers.TruckProfileController = TruckProfileController;
    })(Controllers = TruckApp.Controllers || (TruckApp.Controllers = {}));
})(TruckApp || (TruckApp = {}));
