import * as React from 'react';
export type BytesizeIconStrokeWidth = 'ultra-light' | 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'heavy';
export type BytesizeIconSize = 'small' | 'regular' | 'larger' | 'largest';
export interface BytesizeIconProps {
    readonly name: BytesizeIconName;
    readonly thickness?: BytesizeIconStrokeWidth;
    readonly size?: BytesizeIconSize;
}
export default class BytesizeIcon extends React.PureComponent<BytesizeIconProps, {}> {
    render(): React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
}
export type BytesizeIconName = 'activity' | 'alert' | 'archive' | 'arrow-bottom' | 'arrow-left' | 'arrow-right' | 'arrow-top' | 'backwards' | 'bag' | 'ban' | 'bell' | 'book' | 'bookmark' | 'calendar' | 'camera' | 'caret-bottom' | 'caret-left' | 'caret-right' | 'caret-top' | 'cart' | 'checkmark' | 'chevron-bottom' | 'chevron-left' | 'chevron-right' | 'chevron-top' | 'clipboard' | 'clock' | 'close' | 'code' | 'compose' | 'creditcard' | 'desktop' | 'download' | 'edit' | 'eject' | 'ellipsis-horizontal' | 'ellipsis-vertical' | 'end' | 'export' | 'external' | 'eye' | 'feed' | 'file' | 'filter' | 'flag' | 'folder-open' | 'folder' | 'forwards' | 'fullscreen-exit' | 'fullscreen' | 'gift' | 'github' | 'heart' | 'home' | 'import' | 'inbox' | 'info' | 'lightning' | 'link' | 'location' | 'lock' | 'mail' | 'menu' | 'msg' | 'microphone' | 'minus' | 'mobile' | 'moon' | 'move' | 'music' | 'mute' | 'options' | 'paperclip' | 'pause' | 'photo' | 'play' | 'plus' | 'portfolio' | 'print' | 'reload' | 'reply' | 'search' | 'send' | 'settings' | 'sign-in' | 'sign-out' | 'star' | 'start' | 'tag' | 'telephone' | 'trash' | 'twitter' | 'unlock' | 'upload' | 'user' | 'video' | 'volume' | 'work' | 'zoom-in' | 'zoom-out' | 'zoom-reset';
