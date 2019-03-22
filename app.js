const Hapi = require('hapi');
const Config = require('./bin');
const Routes = require('./routes');

const Inert = require('inert');
// const Vision = require('vision');
// const HapiSwagger = require('hapi-swagger');
// const package = require('package');
const PluginHapiSwagger = require('./plugins/hapi-swagger');

const server = Hapi.server({
  host: Config.host,
  port: Config.port
});

async function start() {

  await server.register([
    ...PluginHapiSwagger,
  ]);
  try {
    await server.route([
      ...Routes.HelloWrold,
    ]);
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at: ', server.info.uri);
}
start();
