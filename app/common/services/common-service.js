(function(){
    'use strict';
    
    function commonService() {

        var _model = {
            data: null,
            current: {
                selected: null
            }
        };

        // public API
        var service = {
             get model() {
                return _model.data;
            },
            set model(val) {
                _model.data = val;
            },
             get current() {
                return _model.current;
            },
            set current(val) {
                _model.current = val;
            }
        };

        return service;
    }

    angular
        .module('common')
        .service('commonService', commonService);

})();
