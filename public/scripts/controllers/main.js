angular
    .module('crunch')
    .controller('main', ($scope, store, populateVariableGraph) => {
        let datasetId = '349d49'
        store
            .getVariableListWithOrder(datasetId, 'hier')
            .then((variableList) => {
                window.v = variableList
                $scope.graph = populateVariableGraph(variableList.index, variableList.order.graph)
                $scope.$apply()
            })
    })
