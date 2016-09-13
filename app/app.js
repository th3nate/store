(function(){
    'use strict';

    angular.module('app', ['ui.router', 'products', 'common']);
    
    angular.module('app').config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/products/1');
    });
    
    angular.module('app').run(function($location) {
        $location.path('/products/1'); 
    });

})();