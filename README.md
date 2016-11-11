# Chris Roth's Crunch.io Assessment Project (aka Crunch Kata)

This is a deliverable in response to these [instructions](/instructions.md).

## Dependencies

Before setup, ensure that you have Node, NPM, and Bower installed.

## Setup

Run `npm install`. This will also install Bower dependencies.


## Test

Run `npm test` to run unit tests with Karma.

## Run

Run `npm start` to start a server locally demo'ing the directive through a
sample app and serves fixture data.

## Notes

Because this is just an sample project, I've left a lot of niceties out that I would generally choose to use in a real project. If I were to keep developing this, I would do the following:

- [ ] Set up Gulp to build static assets into a single, minified file
- [ ] Write more tests to check the controller and store

I've intentionally left styling minimal under the assumption that bringing this
directive into an existing codebase would come with its own styles and that what
really matters here is the DOM structure and class names.

I chose to use jQuery for the unit tests because it has a nicer API than jqLite,
but it is not a dependency for the tree directive.

I chose to put the HTTP request logic and the `populateVariableGraph` function
outside of the directive under the assumption that there would be an existing
system in place in an existing code base for making HTTP requests and formatting
data. I wanted to keep the directive slim so that it's just taking data in and
displaying it.
