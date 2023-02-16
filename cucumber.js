module.exports = {
  default: { 
    requireModule: ['ts-node/register'], 
    require: ['features/steps/**/*.ts'],
    publishQuiet: true,
    exit: true
  }
}