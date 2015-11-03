namespace TruckApp {
    angular.module('TruckApp', ['ngResource', 'ngRoute', 'ngAnimate']).config((
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider) =>
    {
        $routeProvider
            .when('/', {
                templateUrl: 'ngApp/Views/index.html',
                controller: TruckApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .when('/index', {
                templateUrl:'ngApp/Views/index.html',
                controller: TruckApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: 'ngApp/Views/login.html',
                controller: TruckApp.Controllers.LoginController,
                controllerAs: 'vm'
            })
            .when('/signup', {
                templateUrl: 'ngApp/Views/Register/registerStart.html',
                controller: TruckApp.Controllers.RegisterController,
                controllerAs: 'vm'
            })
            .when('/registerUser', {
                templateUrl: 'ngApp/Views/Register/signupForm.html',
                controller: TruckApp.Controllers.RegisterController,
                controllerAs: 'vm',
            })
            .when('/registerTruck', {
                templateUrl: 'ngApp/Views/Register/signupTruck.html',
                controller: TruckApp.Controllers.RegisterController,
                controllerAs: 'vm'
            })
            .when('/findTrucks/:id', {
                templateUrl: 'ngApp/Views/findTrucks.html',
                controller: TruckApp.Controllers.FindTrucksController,
                controllerAs: 'vm'
            })
            .when('/findTrucks', {
                templateUrl: 'ngApp/Views/findTrucks.html',
                controller: TruckApp.Controllers.FindTrucksController,
                controllerAs: 'vm'
            })
            .when('/truckProfile/:id', {
                templateUrl: 'ngApp/Views/truckProfile.html',
                controller: TruckApp.Controllers.TruckProfileController,
                controllerAs: 'vm'
            })
            .when('/userProfile', {
                templateUrl: 'ngApp/Views/userProfile.html'
            })
            .otherwise('/')

        $locationProvider.html5Mode(true);


    }).controller('DumbController', ($scope) => {
        $scope.banana = "Banana";
    });
}