// routes/hello-hapi.js
/**
 * 测试routes
 */
const GROUP_NAME = 'test';
module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return 'hello hapi';
    },
    options: {
      tags: ['api', GROUP_NAME],
      description: '测试hello-hapi',
    },
  },
];
