React Compoent for [bytesize-icons][]
=====================================
[![Build Status](https://travis-ci.org/rhysd/react-component-bytesize-icons.svg)](https://travis-ci.org/rhysd/react-component-bytesize-icons)

## Installation

```sh
$ npm install --save react-component-bytesize-icons react react-dom
```

## Usage

```javascript
import * as React from 'react';
import Icon from 'react-component-bytesize-icons';

const Message = (props) => (
    <div>
        Search icon: <Icon name="search"/>
        Thin large icon: <Icon name="book" strokeWidth="thin" size="larger"/>
        Thick small icon: <Icon name="flag" strokeWidth="bold"/>
    </div>
);
```

The `name` property is corresponding to described icons in [bytesize-icons repo's README][]. You can also see the bottom section of this README to know all avaialble icons.


## Properties of `<Icon/>` Component

| Property      | Description                | Default   |
|---------------|----------------------------|-----------|
| `name`        | Name of icon (required).   | N/A       |
| `strokeWidth` | Line thickness (optional). | `regular` |
| `size`        | Size of icon (optional).   | `regular` |

`strokeWidth` takes one of `ultra-light`, `thin`, `light`, `regular`, `medium`, `bold` or `heavy`.

`size` takes one of `small`, `regular`, `larger` or `largest`.

You can also see [type definition file](./index.d.ts) for more detail.


## Difference Between [react-bytesize-icons][]

There is already a React component package for bytesize-icons but I created this for the below points

### Switch with props

T.B.W

### Maintenancability

T.B.W

### TypeScript support

T.B.W

### Don't require React dependency

T.B.W

## All Icons

{All icons table here}

[react-bytesize-icons]: https://github.com/abdelhai/react-bytesize-icons
[bytesize-icons]: https://github.com/danklammer/bytesize-icons
[bytesize-icon repo's README]: https://github.com/danklammer/bytesize-icons#readme
