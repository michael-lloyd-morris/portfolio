module.exports = {
  default: { 
    requireModule: ['ts-node/register'], 
    require: ['features/steps/**/*.ts'],
    publishQuiet: true
  }
}

/*
 * To get Cucumber to work with NextJs I had to change the module directive from
 * `esnext` to `commonjs`
 */