module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', 
      [
        'e31b8e4e256e7eb5cc0c712e3fca27c65ee08021d3b3970b350490edaaefa348c6c5096e5b0f8f73a7bebec18ca4869e57a4a7653a40c6f2ea8f70f4e663c94f',
        '6044ed62bfd25a4a80a2c563bbd3b405514d9849da4121ee100c5229c21b53da66acd1d070ce6a640dc1f47b12c02aae2e153296fd604a28fb6b9ac6583d05da'
      ]
    ),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
