# Botium Connector for Pandorabots

[![NPM](https://nodei.co/npm/botium-connector-pandorabots.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/botium-connector-pandorabots/)

[![Codeship Status for codeforequity-at/botium-connector-pandorabots](https://app.codeship.com/projects/e6a80b20-2976-0138-322d-4af18afc3e85/status?branch=master)](https://app.codeship.com/projects/384022)
[![npm version](https://badge.fury.io/js/botium-connector-pandorabots.svg)](https://badge.fury.io/js/botium-connector-pandorabots)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

This is a [Botium](https://github.com/codeforequity-at/botium-core) connector for testing your Pandorabots chatbot.

__Did you read the [Botium in a Nutshell](https://medium.com/@floriantreml/botium-in-a-nutshell-part-1-overview-f8d0ceaf8fb4) articles? Be warned, without prior knowledge of Botium you won't be able to properly use this library!__

## How it works
Botium connects to your Pandorabots chatbot with the [Talk-to-bot-API](https://www.pandorabots.com/docs/api-endpoints/#talk-to-bot-public)

It can be used as any other Botium connector with all Botium Stack components:
* [Botium CLI](https://github.com/codeforequity-at/botium-cli/)
* [Botium Bindings](https://github.com/codeforequity-at/botium-bindings/)
* [Botium Box](https://www.botium.at)

## Requirements
* **Node.js and NPM**
* a **Pandorabots bot**
* a **project directory** on your workstation to hold test cases and Botium configuration

## Install Botium and Pandorabots Connector

When using __Botium CLI__:

```
> npm install -g botium-cli
> npm install -g botium-connector-pandorabots
> botium-cli init
> botium-cli run
```

When using __Botium Bindings__:

```
> npm install -g botium-bindings
> npm install -g botium-connector-pandorabots
> botium-bindings init mocha
> npm install && npm run mocha
```

When using __Botium Box__:

_Already integrated into Botium Box, no setup required_

## Connecting Pandorabots chatbot to Botium

### Setting up Pandorabots

All you need is the public Bot key

### Setting up Botium

Create a botium.json with the the Botkey of your Pandorabot in your project directory:

```
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "<whatever>",
      "CONTAINERMODE": "pandorabots",
      "PANDORABOTS_BOTKEY": "..."
    }
  }
}
```

To check the configuration, run the emulator (Botium CLI required) to bring up a chat interface in your terminal window:

```
> botium-cli emulator
```

Botium setup is ready, you can begin to write your test cases with [BotiumScript](https://botium.atlassian.net/wiki/spaces/BOTIUM/pages/491664/Botium+Scripting+-+BotiumScript).

## How to start sample

You can start the Pandorabots sample with these commands:

```
> cd ./samples/mitsuku
> npm install && npm test
```

## Supported Capabilities

Set the capability __CONTAINERMODE__ to __pandorabots__ to activate this connector.

### PANDORABOTS_BOTKEY
Bot key

### PANDORABOTS_APIHOST
_Default: api.pandorabots.com_

Shouldn't have to change this

### PANDORABOTS_CLIENT_NAME
_Default: botium_

Client name