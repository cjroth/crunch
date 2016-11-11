angular
    .module('crunch')
    .directive('treeItem', () => {
        return {
            templateUrl: 'scripts/directives/tree/directives/tree-item/tree-item.html',
            restrict: 'E',
            replace: true,
            scope: {
                item: '='
            },
            link: ($scope) => {
                $scope.state = { active: false }
            }
        }
    })
