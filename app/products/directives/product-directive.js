(function(){
    'use strict';

    function ProductDirective(){
        
        function Ctrlr(commonService) {
            var vm           = this;
            vm.commonService = commonService;
        }

        function linkr(scope, element, attrs, fn) {
            var s = scope;
        }

        return {
            restrict:         'E',
            replace:          true,
            scope:            false,
            controller:       Ctrlr,
            link:             linkr,
            bindToController: true,
            controllerAs:     'vm',
            templateUrl:      '/app/products/templates/partial-product.html'
        };
    }

    angular
        .module('products')
        .directive('product', ProductDirective);

})();
