(function(){
    'use strict';

    angular.module('common', ['angular-underscore']);
    
    angular.module('common').config(function() {

    });
    
    angular
    	.module('common')
    	.constant('_', window._);
   

})();
