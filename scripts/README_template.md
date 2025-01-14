React Compoent for [bytesize-icons][]
=====================================

This package is yet another React component library for [bytesize-icons][].
bytesize-icons is a SVG based, nice and reasonable icon set.

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
        Thin large icon: <Icon name="book" thickness="thin" size="larger"/>
        Thick small icon: <Icon name="flag" thickness="bold" size="small"/>
    </div>
);
```

The `name` property is corresponding to described icons in [bytesize-icons repo's README][].
You can also see the bottom section of this README to know all available icons.


## Properties of `<Icon/>` Component

| Property      | Description                | Default   |
|---------------|----------------------------|-----------|
| `name`        | Name of icon (required).   | N/A       |
| `thickness`   | Line thickness (optional). | `regular` |
| `size`        | Size of icon (optional).   | `regular` |

`thickness` takes one of `ultra-light`, `thin`, `light`, `regular`, `medium`, `bold` or `heavy`.

`size` takes one of `small`, `regular`, `larger` or `largest`. `small` is `24px`, `regular` is `32px`, `larger` is `48px` and `largest` is `64px`.
With these size, icons are rendered the best. You should choose one from them and tweak the size with CSS.

You can also see [type definition file](./index.d.ts) for more detail.


## Difference From [react-bytesize-icons][]

There is already a React component package for bytesize-icons but I created this for the below points

### Easy to tweak icon size and weight

react-bytesize-icons directly shows `<svg>` element's props such as `height` or `strokeWidth`.
It means that user must calculate icons' stroke width by its size and thickness.
react-component-bytesize-icons calculates the best `strokeWidth`, `height` and `width` attributes
of `<svg>` from `thickness` prop and `size` prop.

### Maintenancability

I didn't directly write [index.tsx](index.tsx). It's generated with [Ruby script](./scripts/generate.rb).
It generates TypeScript code by referring [bytesize-icons][] repository directly.

### Well tested

This package is checked at 3 stages.

- Style check with [tslint](https://github.com/palantir/tslint)
- Type check on compilation from TypeScript (with strict null checks)
- Unit tests for ALL icons with [enzyme][] and [mocha][]

Of course you can use this package in safe way using TypeScript because this package
contains its type definitions. Type definitions are also tested.

### No dependency

This package depends on no package.

## All Icons

{All icons table here}

[react-bytesize-icons]: https://github.com/abdelhai/react-bytesize-icons
[bytesize-icons]: https://github.com/danklammer/bytesize-icons
[bytesize-icon repo's README]: https://github.com/danklammer/bytesize-icons#readme
[enzyme]: https://github.com/airbnb/enzyme
[mocha]: https://github.com/mochajs/mocha

## Development

```sh
# Install development dependencies
$ npm install

# Generate index.tsx and compile it
$ npm run gen

# Check code style
$ npm run lint

# Run tests
$ npm test
```
