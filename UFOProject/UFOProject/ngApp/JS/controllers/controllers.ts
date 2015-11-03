namespace TruckApp.Controllers {

    export class HomeController {

        public cities
        public carouselItems
        public carouselSlide = 0
        private topTrucksList

        public getReviews(truck) {
            return truck.writtenReviews.slice(0, 15);
        }

        constructor(private cityService: TruckApp.Services.CityService,
            private carouselService: TruckApp.Services.CarouselService,
            private findTruckService: TruckApp.Services.FindTrucksService,
            private $routeParams: ng.route.IRouteParamsService) {
            this.cities = cityService.listCities();
            this.carouselItems = carouselService.getCarouselItems();
            findTruckService.getTrucksNoFilter().then((data) => {
                this.topTrucksList = data;
            })
            
        }
    }

    export class FindTrucksController {
        public truckList

        public getReviews(truck) {
            return truck.writtenReviews.slice(0,9);
        }

        constructor(private findTruckService: TruckApp.Services.FindTrucksService) {
            findTruckService.getTrucksNoFilter().then((data) => {
                this.truckList = data;
            });
        }
    }


    export class TruckProfileController {
        public truck
        public modalCatcherActive
        public createModalActive
        public reviewModalActive
        public readReview
        public review
        public message
        public validationErrors

        public createModal() {
            this.createModalActive = true;
            this.modalCatcherActive = true;
        }

        public reviewModal(review) {
            this.readReview = review;
            this.reviewModalActive = true;
            this.modalCatcherActive = true;
        }

        public closeModal() {
            this.reviewModalActive = false;
            this.createModalActive = false;
            this.modalCatcherActive = false;
        }

        public createReview(truck) {
            try {
                this.validationErrors = this.truckReviewService.postReview(truck, this.review, this.validationErrors, this.createModalActive);
            } catch (error) {
                console.log(error);
            }
            
        }

        constructor(private findTruckService: TruckApp.Services.FindTrucksService,
            private truckReviewService: TruckApp.Services.TruckReviewService
        ) {
            this.findTruckService.getTruck().then((data) => {
                this.truck = data;
                let dots: string;
                for (let review in this.truck.writtenReviews) {
                    if (this.truck.writtenReviews[review].content.length > 100) {
                        dots = '...';
                    } else {
                        dots = '';
                    }
                    this.truck.writtenReviews[review].truncContent = this.truck.writtenReviews[review].content.substring(0, 100) + dots;
                }
            });
            
        }
    }

}