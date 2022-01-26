'use strict';

const { createCoreRouter } = require('@josephcc00/ok2ship').factories;

module.exports = createCoreRouter('api::address.address', {
  config: {
    find: {
      auth: false,
    },
  },
  only: ['find', 'findOne'],
});
