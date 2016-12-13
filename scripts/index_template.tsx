import * as React from 'react';

export type BytesizeIconStrokeWidth
    = 'ultra-light'
    | 'thin'
    | 'light'
    | 'regular'
    | 'medium'
    | 'bold'
    | 'heavy'
;

export type BytesizeIconSize
    = 'small'
    | 'regular'
    | 'larger'
    | 'largest'
;

const STROKE_WIDTH_TO_PERCENT = {
    'ultra-light': 1.5625,
    thin: 3.125,
    light: 4.6875,
    regular: 6.25,
    medium: 7.8125,
    bold: 9.375,
    heavy: 10.9375,
} as {[name: string]: number};

const SIZE_TO_PERCENT_INCREMENT = {
    small: -1.5625,
    regular: 0.0,
    larger: 1.5625,
    largest: 3.125,
} as {[name: string]: number};

const SIZE_TO_PIXELS = {
    small: 24,
    regular: 32,
    larger: 48,
    largest: 64,
} as {[name: string]: number};

export interface BytesizeIconProps extends React.Props<BytesizeIcon> {
    name: BytesizeIconName;
    thickness?: BytesizeIconStrokeWidth;
    size?: BytesizeIconSize;
}

export default class BytesizeIcon extends React.PureComponent<BytesizeIconProps, {}> {
    render() {
        const {name, thickness, size} = this.props;
        return renderIcon(
            name,
            SIZE_TO_PIXELS[size || 'regular'],
            `${
                STROKE_WIDTH_TO_PERCENT[thickness || 'regular'] +
                SIZE_TO_PERCENT_INCREMENT[size || 'regular']
            }%`,
        );
    }
}

