(function(){
    'use strict';
    
    function ProductsController(commonService, dataService, $state) {

        var vm           = this;
        vm.commonService = commonService;
        vm.setProduct    = function(product){
        	commonService.current = product;
        	_.each(commonService.model, function(item){ 
        		item.selected = (product.id !== item.id) ? false : true;
        	});
			$state.go('products.product', {product: product.id});
        };

        // get products list
        dataService.fetch('/data/products-list.json')
            .then(function success(response) {
                // set response to a service                        
                commonService.model   = response.data;
                commonService.current = _.findWhere(response.data, {selected: true});
            }, function error(msg) {
                // exception
                console.error(msg);
            });
    }

    angular
        .module('products')
        .controller('productsController', ProductsController);

})();