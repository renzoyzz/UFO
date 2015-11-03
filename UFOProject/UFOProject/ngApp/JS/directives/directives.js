var TruckApp;
(function (TruckApp) {
    var Directives;
    (function (Directives) {
        angular.module('TruckApp').directive('carouselItem', [
            function () {
                return {
                    multiElement: true,
                    link: function (scope, element, attrs) {
                        var currentSlide = 300;
                        var eventCallBack = true;
                        switchSlides(currentSlide, 0);
                        var rightMouseButton = element.eq(2).on('mousedown', function (event) {
                            if (eventCallBack) {
                                eventCallBack = false;
                                currentSlide = currentSlide - 1 % 3;
                                if (currentSlide == -1) {
                                    currentSlide = 300;
                                }
                                switchSlides(currentSlide, true);
                                buttonCallBack();
                            }
                        });
                        var leftMouseButton = element.eq(0).on('mousedown', function (event) {
                            if (eventCallBack) {
                                eventCallBack = false;
                                currentSlide = currentSlide + 1 % 3;
                                switchSlides(currentSlide, false);
                                buttonCallBack();
                            }
                        });
                        function buttonCallBack() {
                            setTimeout(function () {
                                eventCallBack = true;
                            }, 750);
                        }
                        function declareHiddenSlide(leftOrRight) {
                            var slide = currentSlide % 3;
                            switch (slide) {
                                case 0:
                                    return leftOrRight ? 0 : 2;
                                case 1:
                                    return leftOrRight ? 1 : 1;
                                case 2:
                                    return leftOrRight ? 2 : 0;
                            }
                        }
                        function switchSlides(value, hiddenSlide) {
                            var index = 0;
                            var amount = value;
                            angular.forEach(element, function (el) {
                                //so it does not include the carousel buttons
                                if (index > 2) {
                                    amount = amount % 3;
                                    if (el.nodeType === Node.ELEMENT_NODE) {
                                        hiddenSlide = hiddenSlide ? 2 : 0;
                                        if (amount == hiddenSlide) {
                                            angular.element(el).css({
                                                'z-index': '0',
                                                'transform': "translateX(" + ((amount * 100) - 100) + "%)"
                                            });
                                        }
                                        else {
                                            angular.element(el).css({
                                                'z-index': '1',
                                                'transform': "translateX(" + ((amount * 100) - 100) + "%)"
                                            });
                                            angular.element(el).children().css({
                                                'z-index': '3'
                                            });
                                        }
                                        amount++;
                                    }
                                }
                                index = index + 1;
                            });
                        }
                    }
                };
            }]);
    })(Directives = TruckApp.Directives || (TruckApp.Directives = {}));
})(TruckApp || (TruckApp = {}));
