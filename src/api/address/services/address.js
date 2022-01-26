const { createCoreService } = require('@josephcc00/ok2ship').factories;

module.exports = createCoreService('api::address.address', {
  async find(...args) {
    const { results, pagination } = await super.find(...args);

    results.forEach(result => {
      result.counter = 1;
    });

    return { results, pagination };
  },
});
