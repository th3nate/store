(function() {
    'use strict';

    /**
     * DataService - Data Layer
     */
    function DataService($q, $http) {

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        /**
         * _fetch() - Private function
         */
        function _fetch(apiPath) {

            var defer     = $q.defer();
            var promise   = defer.promise;
            var httpObj = {
                method: 'GET',
                timeout: 15000,
                url: apiPath
            };

            $http(httpObj)
                .then(function successCallback(data, status, headers, config) {
                    defer.resolve(data); // resolve the data back to app-data layer
                }, function errorCallback(msg) {
                    defer.reject(msg); // reject the data incase of an error
                });

            return promise;
        }

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        var service = {
            fetch: _fetch
        };

        return service;
    }

    //-> ANGULAR
    angular
        .module('common')
        .service('dataService', DataService);

})();
