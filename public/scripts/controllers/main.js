angular
    .module('crunch')
    .controller('main', ($scope, store, populateVariableGraph) => {
        store
            .getVariableListWithOrder('349d49', 'hier')
            .then((variableList) => {
                $scope.graph = populateVariableGraph(variableList.index, variableList.order.graph)
                console.log($scope.graph)
                $scope.$apply()
            })
    })
