class Store {
    constructor(Restangular) {
        this.Restangular = Restangular
        this.Restangular.setBaseUrl(window.location.origin)
        this.datasets = {}
    }
    getVariableListWithOrder(datasetId, orderName) {
        return new Promise((resolve, reject) => {
            this.Restangular
                .one('datasets', datasetId)
                .customGET('variables/')
                .then(variableList => {
                    if (orderName) {
                        this.Restangular
                            .all('')
                            .customGET(variableList.orders[orderName].replace(/^\//,''))
                            .then(order => {
                                variableList.order = order
                                resolve(variableList)
                            })
                    } else {
                        resolve(variableList)
                    }
                })
        })
    }
}

angular
    .module('crunch')
    .service('store', Store)
