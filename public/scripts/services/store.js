class Store {

    constructor(Restangular) {
        this.Restangular = Restangular
        this.Restangular.setBaseUrl(window.location.origin)
        this.datasets = {}
    }

    // Get a variable list (an object in the format specified in
    // `/fixtures/variables.json`) and optionally an order name. If you specify
    // an order name, it will get the specified order from the API set it the
    // `order` property of the variable list object.
    //
    // Returns a promise.
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
