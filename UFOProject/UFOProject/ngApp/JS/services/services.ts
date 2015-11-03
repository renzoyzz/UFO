namespace TruckApp.Services {

    export class CarouselService {
        private carouselResource


        getCarouselItems() {
            return this.carouselResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.carouselResource = $resource('/api/carousel/:id');
        }

    }

    angular.module('TruckApp').service('carouselService', CarouselService);

    export class CityService {

        private cityResource;

        public listCities() {
            return this.cityResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.cityResource = $resource('/api/cities/:id');
        }


    }

    angular.module('TruckApp').service('cityService', CityService);

    export class FindTrucksService {

        private truckResource
        private truckProfileResource

        public getTrucksNoFilter() {
            return this.truckResource.query({id: this.$routeParams['id']}).$promise;
        }

        public getTruck() {
            return this.truckProfileResource.get({ id: this.$routeParams['id'] }).$promise;
        }

        constructor($resource: ng.resource.IResourceService, private $routeParams: ng.route.IRouteParamsService) {
            this.truckResource = $resource('/api/findtrucks/:id');
            this.truckProfileResource = $resource('/api/truckprofile/:id');
        }


    }

    angular.module('TruckApp').service('findTruckService', FindTrucksService);


    export class TruckReviewService {
       private reviewResource

       public postReview(truck, review, validationErrors, createModalActive) {
           var reviewToSend = {
               title: review.title,
               content: review.content,
               truckid: truck
               
           }
           this.reviewResource.save(reviewToSend).$promise
               .then(() => {
                   review.title = '';
                   review.content = '';
                   createModalActive = false;
                   console.log(this.$location.path());
                   this.$location.path(this.$location.path());
                   return [];
               }).catch((err) => {
                   for (let prop in err.data.modelState) {
                       let propErrors = err.data.modelState[prop];
                       return validationErrors.concat(propErrors);
                   }
               });
       }

       constructor($resource: ng.resource.IResourceService,
           private $location: ng.ILocationService
       ) {
            this.reviewResource = $resource('api/reviews/');
        }
    }

    angular.module('TruckApp').service('truckReviewService', TruckReviewService);



}