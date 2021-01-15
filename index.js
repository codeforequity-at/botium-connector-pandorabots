const BotiumConnectorPandorabots = require('./src/connector')

module.exports = {
  PluginVersion: 1,
  PluginClass: BotiumConnectorPandorabots,
  PluginDesc: {
    name: 'Pandorabots',
    provider: 'Pandorabots',
    features: {
      intentResolution: false
    },
    capabilities: [
      {
        name: 'PANDORABOTS_BOTKEY',
        label: 'Pandorabots Bot Key',
        type: 'string',
        required: true
      },
      {
        name: 'PANDORABOTS_APIHOST',
        label: 'Api Host',
        type: 'url',
        advanced: true
      },
      {
        name: 'PANDORABOTS_CLIENT_NAME',
        label: 'Client Name',
        type: 'string',
        advanced: true
      }
    ]
  }
}
