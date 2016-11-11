angular
    .module('crunch')
    .factory('populateVariableGraph', () => {
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
