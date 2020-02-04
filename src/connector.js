const util = require('util')
const debug = require('debug')('botium-connector-pandorabots')

const SimpleRestContainer = require('botium-core/src/containers/plugins/SimpleRestContainer')
const CoreCapabilities = require('botium-core/src/Capabilities')

const Capabilities = {
  PANDORABOTS_BOTKEY: 'PANDORABOTS_BOTKEY',
  PANDORABOTS_APIHOST: 'PANDORABOTS_APIHOST',
  PANDORABOTS_CLIENT_NAME: 'PANDORABOTS_CLIENT_NAME'
}

const Defaults = {
  [Capabilities.PANDORABOTS_APIHOST]: 'api.pandorabots.com',
  [Capabilities.PANDORABOTS_CLIENT_NAME]: 'botium'
}

class BotiumConnectorPandorabots {
  constructor ({ queueBotSays, caps }) {
    this.queueBotSays = queueBotSays
    this.caps = caps
    this.delegateContainer = null
    this.delegateCaps = null
  }

  Validate () {
    debug('Validate called')

    this.caps = Object.assign({}, Defaults, this.caps)

    if (!this.caps[Capabilities.PANDORABOTS_BOTKEY]) throw new Error('PANDORABOTS_BOTKEY capability required')

    if (!this.delegateContainer) {
      this.delegateCaps = Object.assign({}, this.caps, {
        [CoreCapabilities.SIMPLEREST_URL]: `https://${this.caps[Capabilities.PANDORABOTS_APIHOST]}/talk?botkey=${this.caps[Capabilities.PANDORABOTS_BOTKEY]}&input={{msg.messageText}}&client_name=${this.caps[Capabilities.PANDORABOTS_CLIENT_NAME]}&sessionid={{botium.conversationId}}`,
        [CoreCapabilities.SIMPLEREST_METHOD]: 'POST',
        [CoreCapabilities.SIMPLEREST_RESPONSE_JSONPATH]: '$.responses[*]'
      })

      debug(`Validate delegateCaps ${util.inspect(this.delegateCaps)}`)
      this.delegateContainer = new SimpleRestContainer({ queueBotSays: this.queueBotSays, caps: this.delegateCaps })
    }

    debug('Validate delegate')
    return this.delegateContainer.Validate && this.delegateContainer.Validate()
  }

  Build () {
    return this.delegateContainer.Build && this.delegateContainer.Build()
  }

  Start () {
    return this.delegateContainer.Start && this.delegateContainer.Start()
  }

  UserSays (msg) {
    return this.delegateContainer.UserSays(msg)
  }

  Stop () {
    return this.delegateContainer.Stop && this.delegateContainer.Stop()
  }

  Clean () {
    return this.delegateContainer.Clean && this.delegateContainer.Clean()
  }
}

module.exports = BotiumConnectorPandorabots
