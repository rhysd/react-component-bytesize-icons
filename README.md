React Compoent for [bytesize-icons][]
=====================================

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

| Icon | React Component |
|------|-----------------|
| ![activity icon](https://rhysd.github.io/react-component-bytesize-icons/icons/activity.svg) | `<Icon name="activity"/>` |
| ![alert icon](https://rhysd.github.io/react-component-bytesize-icons/icons/alert.svg) | `<Icon name="alert"/>` |
| ![archive icon](https://rhysd.github.io/react-component-bytesize-icons/icons/archive.svg) | `<Icon name="archive"/>` |
| ![arrow-bottom icon](https://rhysd.github.io/react-component-bytesize-icons/icons/arrow-bottom.svg) | `<Icon name="arrow-bottom"/>` |
| ![arrow-left icon](https://rhysd.github.io/react-component-bytesize-icons/icons/arrow-left.svg) | `<Icon name="arrow-left"/>` |
| ![arrow-right icon](https://rhysd.github.io/react-component-bytesize-icons/icons/arrow-right.svg) | `<Icon name="arrow-right"/>` |
| ![arrow-top icon](https://rhysd.github.io/react-component-bytesize-icons/icons/arrow-top.svg) | `<Icon name="arrow-top"/>` |
| ![backwards icon](https://rhysd.github.io/react-component-bytesize-icons/icons/backwards.svg) | `<Icon name="backwards"/>` |
| ![ban icon](https://rhysd.github.io/react-component-bytesize-icons/icons/ban.svg) | `<Icon name="ban"/>` |
| ![bell icon](https://rhysd.github.io/react-component-bytesize-icons/icons/bell.svg) | `<Icon name="bell"/>` |
| ![book icon](https://rhysd.github.io/react-component-bytesize-icons/icons/book.svg) | `<Icon name="book"/>` |
| ![bookmark icon](https://rhysd.github.io/react-component-bytesize-icons/icons/bookmark.svg) | `<Icon name="bookmark"/>` |
| ![calendar icon](https://rhysd.github.io/react-component-bytesize-icons/icons/calendar.svg) | `<Icon name="calendar"/>` |
| ![camera icon](https://rhysd.github.io/react-component-bytesize-icons/icons/camera.svg) | `<Icon name="camera"/>` |
| ![caret-bottom icon](https://rhysd.github.io/react-component-bytesize-icons/icons/caret-bottom.svg) | `<Icon name="caret-bottom"/>` |
| ![caret-left icon](https://rhysd.github.io/react-component-bytesize-icons/icons/caret-left.svg) | `<Icon name="caret-left"/>` |
| ![caret-right icon](https://rhysd.github.io/react-component-bytesize-icons/icons/caret-right.svg) | `<Icon name="caret-right"/>` |
| ![caret-top icon](https://rhysd.github.io/react-component-bytesize-icons/icons/caret-top.svg) | `<Icon name="caret-top"/>` |
| ![cart icon](https://rhysd.github.io/react-component-bytesize-icons/icons/cart.svg) | `<Icon name="cart"/>` |
| ![checkmark icon](https://rhysd.github.io/react-component-bytesize-icons/icons/checkmark.svg) | `<Icon name="checkmark"/>` |
| ![chevron-bottom icon](https://rhysd.github.io/react-component-bytesize-icons/icons/chevron-bottom.svg) | `<Icon name="chevron-bottom"/>` |
| ![chevron-left icon](https://rhysd.github.io/react-component-bytesize-icons/icons/chevron-left.svg) | `<Icon name="chevron-left"/>` |
| ![chevron-right icon](https://rhysd.github.io/react-component-bytesize-icons/icons/chevron-right.svg) | `<Icon name="chevron-right"/>` |
| ![chevron-top icon](https://rhysd.github.io/react-component-bytesize-icons/icons/chevron-top.svg) | `<Icon name="chevron-top"/>` |
| ![clock icon](https://rhysd.github.io/react-component-bytesize-icons/icons/clock.svg) | `<Icon name="clock"/>` |
| ![close icon](https://rhysd.github.io/react-component-bytesize-icons/icons/close.svg) | `<Icon name="close"/>` |
| ![code icon](https://rhysd.github.io/react-component-bytesize-icons/icons/code.svg) | `<Icon name="code"/>` |
| ![compose icon](https://rhysd.github.io/react-component-bytesize-icons/icons/compose.svg) | `<Icon name="compose"/>` |
| ![creditcard icon](https://rhysd.github.io/react-component-bytesize-icons/icons/creditcard.svg) | `<Icon name="creditcard"/>` |
| ![download icon](https://rhysd.github.io/react-component-bytesize-icons/icons/download.svg) | `<Icon name="download"/>` |
| ![edit icon](https://rhysd.github.io/react-component-bytesize-icons/icons/edit.svg) | `<Icon name="edit"/>` |
| ![eject icon](https://rhysd.github.io/react-component-bytesize-icons/icons/eject.svg) | `<Icon name="eject"/>` |
| ![ellipsis-horizontal icon](https://rhysd.github.io/react-component-bytesize-icons/icons/ellipsis-horizontal.svg) | `<Icon name="ellipsis-horizontal"/>` |
| ![ellipsis-vertical icon](https://rhysd.github.io/react-component-bytesize-icons/icons/ellipsis-vertical.svg) | `<Icon name="ellipsis-vertical"/>` |
| ![end icon](https://rhysd.github.io/react-component-bytesize-icons/icons/end.svg) | `<Icon name="end"/>` |
| ![export icon](https://rhysd.github.io/react-component-bytesize-icons/icons/export.svg) | `<Icon name="export"/>` |
| ![external icon](https://rhysd.github.io/react-component-bytesize-icons/icons/external.svg) | `<Icon name="external"/>` |
| ![eye icon](https://rhysd.github.io/react-component-bytesize-icons/icons/eye.svg) | `<Icon name="eye"/>` |
| ![file icon](https://rhysd.github.io/react-component-bytesize-icons/icons/file.svg) | `<Icon name="file"/>` |
| ![fire icon](https://rhysd.github.io/react-component-bytesize-icons/icons/fire.svg) | `<Icon name="fire"/>` |
| ![flag icon](https://rhysd.github.io/react-component-bytesize-icons/icons/flag.svg) | `<Icon name="flag"/>` |
| ![folder-open icon](https://rhysd.github.io/react-component-bytesize-icons/icons/folder-open.svg) | `<Icon name="folder-open"/>` |
| ![folder icon](https://rhysd.github.io/react-component-bytesize-icons/icons/folder.svg) | `<Icon name="folder"/>` |
| ![forwards icon](https://rhysd.github.io/react-component-bytesize-icons/icons/forwards.svg) | `<Icon name="forwards"/>` |
| ![gift icon](https://rhysd.github.io/react-component-bytesize-icons/icons/gift.svg) | `<Icon name="gift"/>` |
| ![github icon](https://rhysd.github.io/react-component-bytesize-icons/icons/github.svg) | `<Icon name="github"/>` |
| ![heart icon](https://rhysd.github.io/react-component-bytesize-icons/icons/heart.svg) | `<Icon name="heart"/>` |
| ![home icon](https://rhysd.github.io/react-component-bytesize-icons/icons/home.svg) | `<Icon name="home"/>` |
| ![import icon](https://rhysd.github.io/react-component-bytesize-icons/icons/import.svg) | `<Icon name="import"/>` |
| ![inbox icon](https://rhysd.github.io/react-component-bytesize-icons/icons/inbox.svg) | `<Icon name="inbox"/>` |
| ![info icon](https://rhysd.github.io/react-component-bytesize-icons/icons/info.svg) | `<Icon name="info"/>` |
| ![lightning icon](https://rhysd.github.io/react-component-bytesize-icons/icons/lightning.svg) | `<Icon name="lightning"/>` |
| ![link icon](https://rhysd.github.io/react-component-bytesize-icons/icons/link.svg) | `<Icon name="link"/>` |
| ![location icon](https://rhysd.github.io/react-component-bytesize-icons/icons/location.svg) | `<Icon name="location"/>` |
| ![lock icon](https://rhysd.github.io/react-component-bytesize-icons/icons/lock.svg) | `<Icon name="lock"/>` |
| ![mail icon](https://rhysd.github.io/react-component-bytesize-icons/icons/mail.svg) | `<Icon name="mail"/>` |
| ![menu icon](https://rhysd.github.io/react-component-bytesize-icons/icons/menu.svg) | `<Icon name="menu"/>` |
| ![message icon](https://rhysd.github.io/react-component-bytesize-icons/icons/message.svg) | `<Icon name="message"/>` |
| ![minus icon](https://rhysd.github.io/react-component-bytesize-icons/icons/minus.svg) | `<Icon name="minus"/>` |
| ![music icon](https://rhysd.github.io/react-component-bytesize-icons/icons/music.svg) | `<Icon name="music"/>` |
| ![mute icon](https://rhysd.github.io/react-component-bytesize-icons/icons/mute.svg) | `<Icon name="mute"/>` |
| ![options icon](https://rhysd.github.io/react-component-bytesize-icons/icons/options.svg) | `<Icon name="options"/>` |
| ![paperclip icon](https://rhysd.github.io/react-component-bytesize-icons/icons/paperclip.svg) | `<Icon name="paperclip"/>` |
| ![pause icon](https://rhysd.github.io/react-component-bytesize-icons/icons/pause.svg) | `<Icon name="pause"/>` |
| ![photo icon](https://rhysd.github.io/react-component-bytesize-icons/icons/photo.svg) | `<Icon name="photo"/>` |
| ![play icon](https://rhysd.github.io/react-component-bytesize-icons/icons/play.svg) | `<Icon name="play"/>` |
| ![plus icon](https://rhysd.github.io/react-component-bytesize-icons/icons/plus.svg) | `<Icon name="plus"/>` |
| ![portfolio icon](https://rhysd.github.io/react-component-bytesize-icons/icons/portfolio.svg) | `<Icon name="portfolio"/>` |
| ![print icon](https://rhysd.github.io/react-component-bytesize-icons/icons/print.svg) | `<Icon name="print"/>` |
| ![reload icon](https://rhysd.github.io/react-component-bytesize-icons/icons/reload.svg) | `<Icon name="reload"/>` |
| ![reply icon](https://rhysd.github.io/react-component-bytesize-icons/icons/reply.svg) | `<Icon name="reply"/>` |
| ![search icon](https://rhysd.github.io/react-component-bytesize-icons/icons/search.svg) | `<Icon name="search"/>` |
| ![send icon](https://rhysd.github.io/react-component-bytesize-icons/icons/send.svg) | `<Icon name="send"/>` |
| ![settings icon](https://rhysd.github.io/react-component-bytesize-icons/icons/settings.svg) | `<Icon name="settings"/>` |
| ![star icon](https://rhysd.github.io/react-component-bytesize-icons/icons/star.svg) | `<Icon name="star"/>` |
| ![start icon](https://rhysd.github.io/react-component-bytesize-icons/icons/start.svg) | `<Icon name="start"/>` |
| ![tag icon](https://rhysd.github.io/react-component-bytesize-icons/icons/tag.svg) | `<Icon name="tag"/>` |
| ![trash icon](https://rhysd.github.io/react-component-bytesize-icons/icons/trash.svg) | `<Icon name="trash"/>` |
| ![twitter icon](https://rhysd.github.io/react-component-bytesize-icons/icons/twitter.svg) | `<Icon name="twitter"/>` |
| ![unlock icon](https://rhysd.github.io/react-component-bytesize-icons/icons/unlock.svg) | `<Icon name="unlock"/>` |
| ![upload icon](https://rhysd.github.io/react-component-bytesize-icons/icons/upload.svg) | `<Icon name="upload"/>` |
| ![user icon](https://rhysd.github.io/react-component-bytesize-icons/icons/user.svg) | `<Icon name="user"/>` |
| ![video icon](https://rhysd.github.io/react-component-bytesize-icons/icons/video.svg) | `<Icon name="video"/>` |
| ![volume icon](https://rhysd.github.io/react-component-bytesize-icons/icons/volume.svg) | `<Icon name="volume"/>` |
| ![work icon](https://rhysd.github.io/react-component-bytesize-icons/icons/work.svg) | `<Icon name="work"/>` |


[react-bytesize-icons]: https://github.com/abdelhai/react-bytesize-icons
[bytesize-icons]: https://github.com/danklammer/bytesize-icons
[bytesize-icon repo's README]: https://github.com/danklammer/bytesize-icons#readme
