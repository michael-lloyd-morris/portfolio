const baseConfig = { 
  requireModule: ['ts-node/register'], 
  require: ['features/steps/**/*.ts'],
  publishQuiet: true,
  exit: true
}

module.exports = {
  default: baseConfig,
  debug: { 
    ... baseConfig,
    worldParameters: {
      debug: "true"
    }
  }
}