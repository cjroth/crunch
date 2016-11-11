describe('tree', () => {

    beforeEach(module('crunch'))
    beforeEach(module('templates'))

    beforeAll(() => {
        let fixture = window.fixture
        fixture.setBase('fixtures')
        fixture.load('order.json', 'variables.json')
        order = fixture.json[0]
        variables = fixture.json[1]
    })

    beforeEach(inject($injector => {
        $compile = $injector.get('$compile')
        $rootScope = $injector.get('$rootScope')
        $httpBackend = $injector.get('$httpBackend')
        populateVariableGraph = $injector.get('populateVariableGraph')

        $rootScope.graph = populateVariableGraph(variables.index, order.graph)
        element = $compile('<tree graph="graph"></tree>')($rootScope)
        $rootScope.$digest()
    }))

    it('should show the correct number of children', () => {
        expect(element.children().length).toBe(6)
    })

    it('should show correct children nodes in the correct order', () => {
        expect(element.children('.tree-item').first().children('.name').text()).toBe('Awareness Metrics')
        expect(element.children('.tree-item').last().children('.name').text()).toBe('Weight')
    })

    it('should show not show children nodes by default', () => {
        expect(element.children('.tree-item').first().children('.tree').length).toBe(0)
    })

    it('should expand a node when name is clicked', () => {
        let first = element.children('.tree-item').first()
        first.children('.name').click()
        expect(first.children('.tree').children('.tree-item').length).toBe(2)
    })

})
