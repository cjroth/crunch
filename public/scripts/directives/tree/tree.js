angular
    .module('crunch')
    .directive('tree', () => {
        return {
            templateUrl: 'scripts/directives/tree/tree.html',
            restrict: 'E',
            replace: true,
            scope: {
                graph: '='
            }
        }
    })
