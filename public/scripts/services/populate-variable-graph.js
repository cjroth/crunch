angular
    .module('crunch')
    .factory('populateVariableGraph', () => {
        // This is a recursive function that takes a list of variables and a
        // order (node) for the variables. An order is a tree-like stucture
        // describing how the variables are arranged into categories and
        // subcategories.
        //
        // The variables argument should be an object in the format specifid in
        // `fixtures/order.json` and the output will be an object in the format:
        // [
        //   {
        //     type: "tree",
        //     name: "Awareness Metrics"
        //     children: [
        //       {
        //         type: "tree",
        //         name: "Taxis"
        //         children: [
        //           // ...
        //         ]
        //       }
        //     ]
        //   }
        // ]
        return populateVariableGraph = (variables, node) => {
            return node.map(item => {
                // item is either:
                // 1. '7a89e0'
                // or
                // 2. {
                //	"Coffee": ["786c0f", "2d27ab"]
                // }
                if (typeof item === 'string') {
                    return variables[item]
                } else {
                    let name, list
                    for (i in item) {
                        name = i
                        list = item[i]
                    }
                    return {
                        name,
                        type: 'tree',
                        children: populateVariableGraph(variables, list)
                    }
                }
            })
        }
    })
