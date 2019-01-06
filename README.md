# px-icon-set [![Build Status](https://travis-ci.org/predixdesignsystem/px-icon-set.svg?branch=master)](https://travis-ci.org/predixdesignsystem/px-icon-set)


## Overview

`Px-icon-set` is a wrapper for the Predix icon set which leverages `px-icon` (a subcomponent of `px-icon-set`).

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line:

```
bower install px-icon-set --save
```

Second, import the component in your application with the following tag in your head:

```
<link rel="import" href="/bower_components/px-icon-set/px-icon-set.html"/>
```

Finally, use the component in your application:

```
<iron-icon icon="px-fea:analytics"></iron-icon>
```

<br />
<hr />

## Documentation

Read the full API and view the demo [here](https://www.predix-ui.com/#/elements/px-icon-set).

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/predixdesignsystem/px-icon-set/issues) to submit any bugs you might find.
