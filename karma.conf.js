module.exports = config => {
    config.set({

        basePath: './',

        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/lodash/lodash.js',
            'bower_components/restangular/dist/restangular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'public/scripts/**/*.js',
            'public/scripts/**/*.html',
            'fixtures/**/*.json'
        ],

        autoWatch: true,

        frameworks: ['jasmine', 'fixture'],

        browsers: ['Chrome'],

        preprocessors: {
            '**/*.json': ['json_fixtures'],
            '**/*.html': ['ng-html2js']
        },

        jsonFixturesPreprocessor: {
            variableName: '__json__'
        },

        ngHtml2JsPreprocessor: {
            moduleName: 'templates',
            stripPrefix: 'public/'
        },

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    })
}
