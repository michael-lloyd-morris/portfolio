/**
 * This is the master Cucumber configuration file. We are writing our feature
 * files in TypeScript, so we are using TS-Node to transpile and parse those 
 * Typescript files on the fly.
 * 
 * @see https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md
 * @see https://github.com/cucumber/cucumber-js/blob/main/docs/transpiling.md
 */
module.exports = {
  default: { 
    requireModule: ['ts-node/register'], 
    require: ['features/steps/**/*.ts'],
    publishQuiet: true,
    exit: true
  }
}