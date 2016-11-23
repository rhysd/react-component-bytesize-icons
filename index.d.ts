/// <reference types="react" />
import * as React from 'react';
export declare type BytesizeIconStrokeWidth = 'ultra-light' | 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'heavy';
export declare type BytesizeIconSize = 'small' | 'regular' | 'larger' | 'largest';
export interface BytesizeIconProps extends React.Props<BytesizeIcon> {
    name: BytesizeIconName;
    thickness?: BytesizeIconStrokeWidth;
    size?: BytesizeIconSize;
}
export default class BytesizeIcon extends React.PureComponent<BytesizeIconProps, {}> {
    render(): JSX.Element;
}
export declare type BytesizeIconName = 'activity' | 'alert' | 'archive' | 'arrow-bottom' | 'arrow-left' | 'arrow-right' | 'arrow-top' | 'backwards' | 'ban' | 'bell' | 'book' | 'bookmark' | 'calendar' | 'camera' | 'caret-bottom' | 'caret-left' | 'caret-right' | 'caret-top' | 'cart' | 'checkmark' | 'chevron-bottom' | 'chevron-left' | 'chevron-right' | 'chevron-top' | 'clock' | 'close' | 'code' | 'compose' | 'creditcard' | 'download' | 'edit' | 'eject' | 'ellipsis-horizontal' | 'ellipsis-vertical' | 'end' | 'export' | 'external' | 'eye' | 'file' | 'fire' | 'flag' | 'folder-open' | 'folder' | 'forwards' | 'gift' | 'github' | 'heart' | 'home' | 'import' | 'inbox' | 'info' | 'lightning' | 'link' | 'location' | 'lock' | 'mail' | 'menu' | 'msg' | 'minus' | 'music' | 'mute' | 'options' | 'paperclip' | 'pause' | 'photo' | 'play' | 'plus' | 'portfolio' | 'print' | 'reload' | 'reply' | 'search' | 'send' | 'settings' | 'star' | 'start' | 'tag' | 'trash' | 'twitter' | 'unlock' | 'upload' | 'user' | 'video' | 'volume' | 'work';
