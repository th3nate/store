(function(){
    'use strict';

    angular.module('products', []);
    
    angular.module('products').config(function($stateProvider) {

        $stateProvider
            .state('products', {
                url:          '/products',
                templateUrl:  'products/templates/products-template.html',
                controller:   'productsController',
                controllerAs: 'vm'
            })
            .state('products.product', {
                url: '/:product',
                views: {
                    'product@products': {
                        template: '<product></product>'
                    },
                    'list@products': {
                        templateUrl: '/app/products/templates/partial-list.html'
                    }
                }
            });

    });

})();
