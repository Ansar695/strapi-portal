'use strict';

/**
 * experian-boost service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::experian-boost.experian-boost');
