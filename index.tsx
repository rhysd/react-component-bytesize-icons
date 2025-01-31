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

export interface BytesizeIconProps {
    readonly name: BytesizeIconName;
    readonly thickness?: BytesizeIconStrokeWidth;
    readonly size?: BytesizeIconSize;
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



  function renderIcon(name: BytesizeIconName, length: number, strokeWidth: string): React.ReactElement | null {
    switch (name) {
      case 'activity': {
      return <svg id="i-activity" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M4 16 L11 16 14 29 18 3 21 16 28 16" />
      </svg>;
    }

    case 'alert': {
      return <svg id="i-alert" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M16 3 L30 29 2 29 Z M16 11 L16 19 M16 23 L16 25" />
      </svg>;
    }

    case 'archive': {
      return <svg id="i-archive" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M4 10 L4 28 28 28 28 10 M2 4 L2 10 30 10 30 4 Z M12 15 L20 15" />
      </svg>;
    }

    case 'arrow-bottom': {
      return <svg id="i-arrow-bottom" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M6 22 L16 30 26 22 M16 30 L16 2" />
      </svg>;
    }

    case 'arrow-left': {
      return <svg id="i-arrow-left" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M10 6 L2 16 10 26 M2 16 L30 16" />
      </svg>;
    }

    case 'arrow-right': {
      return <svg id="i-arrow-right" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
      </svg>;
    }

    case 'arrow-top': {
      return <svg id="i-arrow-top" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M6 10 L16 2 26 10 M16 2 L16 30" />
      </svg>;
    }

    case 'backwards': {
      return <svg id="i-backwards" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M16 2 L2 16 16 30 16 16 30 30 30 2 16 16 Z" />
      </svg>;
    }

    case 'bag': {
      return <svg id="i-bag" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M5 9 L5 29 27 29 27 9 Z M10 9 C10 9 10 3 16 3 22 3 22 9 22 9" />
      </svg>;
    }

    case 'ban': {
      return <svg id="i-ban" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="16" cy="16" r="14" />
          <path d="M6 6 L26 26" />
      </svg>;
    }

    case 'bell': {
      return <svg id="i-bell" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M8 17 C8 12 9 6 16 6 23 6 24 12 24 17 24 22 27 25 27 25 L5 25 C5 25 8 22 8 17 Z M20 25 C20 25 20 29 16 29 12 29 12 25 12 25 M16 3 L16 6" />
      </svg>;
    }

    case 'book': {
      return <svg id="i-book" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
      </svg>;
    }

    case 'bookmark': {
      return <svg id="i-bookmark" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
      </svg>;
    }

    case 'calendar': {
      return <svg id="i-calendar" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 6 L2 30 30 30 30 6 Z M2 15 L30 15 M7 3 L7 9 M13 3 L13 9 M19 3 L19 9 M25 3 L25 9" />
      </svg>;
    }

    case 'camera': {
      return <svg id="i-camera" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 8 L 9 8 12 4 20 4 23 8 30 8 30 26 2 26 Z" />
          <circle cx="16" cy="16" r="5" />
      </svg>;
    }

    case 'caret-bottom': {
      return <svg id="i-caret-bottom" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M30 10 L16 26 2 10 Z" />
      </svg>;
    }

    case 'caret-left': {
      return <svg id="i-caret-left" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M22 30 L6 16 22 2 Z" />
      </svg>;
    }

    case 'caret-right': {
      return <svg id="i-caret-right" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M10 30 L26 16 10 2 Z" />
      </svg>;
    }

    case 'caret-top': {
      return <svg id="i-caret-top" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M30 22 L16 6 2 22 Z" />
      </svg>;
    }

    case 'cart': {
      return <svg id="i-cart" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
          <circle cx="25" cy="27" r="2" />
          <circle cx="12" cy="27" r="2" />
      </svg>;
    }

    case 'checkmark': {
      return <svg id="i-checkmark" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 20 L12 28 30 4" />
      </svg>;
    }

    case 'chevron-bottom': {
      return <svg id="i-chevron-bottom" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M30 12 L16 24 2 12" />
      </svg>;
    }

    case 'chevron-left': {
      return <svg id="i-chevron-left" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M20 30 L8 16 20 2" />
      </svg>;
    }

    case 'chevron-right': {
      return <svg id="i-chevron-right" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M12 30 L24 16 12 2" />
      </svg>;
    }

    case 'chevron-top': {
      return <svg id="i-chevron-top" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M30 20 L16 8 2 20" />
      </svg>;
    }

    case 'clipboard': {
      return <svg id="i-clipboard" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M12 2 L12 6 20 6 20 2 12 2 Z M11 4 L6 4 6 30 26 30 26 4 21 4" />
      </svg>;
    }

    case 'clock': {
      return <svg id="i-clock" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="16" cy="16" r="14" />
          <path d="M16 8 L16 16 20 20" />
      </svg>;
    }

    case 'close': {
      return <svg id="i-close" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 30 L30 2 M30 30 L2 2" />
      </svg>;
    }

    case 'code': {
      return <svg id="i-code" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27" />
      </svg>;
    }

    case 'compose': {
      return <svg id="i-compose" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
      </svg>;
    }

    case 'creditcard': {
      return <svg id="i-creditcard" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 7 L2 25 30 25 30 7 Z M5 18 L9 18 M5 21 L11 21" />
          <path d="M2 11 L2 13 30 13 30 11 Z" fill="currentColor" />
      </svg>;
    }

    case 'desktop': {
      return <svg id="i-desktop" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M10 29 C10 29 10 24 16 24 22 24 22 29 22 29 L10 29 Z M2 6 L2 23 30 23 30 6 2 6 Z" />
      </svg>
      ;
    }

    case 'download': {
      return <svg id="i-download" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 26 L16 30 21 26 M16 16 L16 30" />
      </svg>;
    }

    case 'edit': {
      return <svg id="i-edit" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
      </svg>;
    }

    case 'eject': {
      return <svg id="i-eject" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M30 18 L16 5 2 18Z M2 25 L30 25" />
      </svg>;
    }

    case 'ellipsis-horizontal': {
      return <svg id="i-ellipsis-horizontal" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="7" cy="16" r="2" />
          <circle cx="16" cy="16" r="2" />
          <circle cx="25" cy="16" r="2" />
      </svg>;
    }

    case 'ellipsis-vertical': {
      return <svg id="i-ellipsis-vertical" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="16" cy="7" r="2" />
          <circle cx="16" cy="16" r="2" />
          <circle cx="16" cy="25" r="2" />
      </svg>;
    }

    case 'end': {
      return <svg id="i-end" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M24 2 L24 16 10 2 10 30 24 16 24 30" />
      </svg>;
    }

    case 'export': {
      return <svg id="i-export" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 12 L16 4 24 12" />
      </svg>;
    }

    case 'external': {
      return <svg id="i-external" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
      </svg>;
    }

    case 'eye': {
      return <svg id="i-eye" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="17" cy="15" r="1" />
          <circle cx="16" cy="16" r="6" />
          <path d="M2 16 C2 16 7 6 16 6 25 6 30 16 30 16 30 16 25 26 16 26 7 26 2 16 2 16 Z" />
      </svg>;
    }

    case 'feed': {
      return <svg id="i-feed" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="6" cy="26" r="2" fill="currentColor" />
          <path d="M4 15 C11 15 17 21 17 28 M4 6 C17 6 26 15 26 28" />
      </svg>;
    }

    case 'file': {
      return <svg id="i-file" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M6 2 L6 30 26 30 26 10 18 2 Z M18 2 L18 10 26 10" />
      </svg>;
    }

    case 'filter': {
      return <svg id="i-filter" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 5 C2 5 6 3 16 3 26 3 30 5 30 5 L19 18 19 27 13 30 13 18 2 5Z" />
      </svg>
      
      ;
    }

    case 'flag': {
      return <svg id="i-flag" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M6 2 L6 30 M6 6 L26 6 20 12 26 18 6 18" />
      </svg>;
    }

    case 'folder-open': {
      return <svg id="i-folder-open" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M4 28 L28 28 30 12 14 12 10 8 2 8 Z M28 12 L28 4 4 4 4 8" />
      </svg>;
    }

    case 'folder': {
      return <svg id="i-folder" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 26 L30 26 30 7 14 7 10 4 2 4 Z M30 12 L2 12" />
      </svg>;
    }

    case 'forwards': {
      return <svg id="i-forwards" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M16 2 L30 16 16 30 16 16 2 30 2 2 16 16 Z" /> 
      </svg>;
    }

    case 'fullscreen-exit': {
      return <svg id="i-fullscreen-exit" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M4 12 L12 12 12 4 M20 4 L20 12 28 12 M4 20 L12 20 12 28 M28 20 L20 20 20 28" />
      </svg>;
    }

    case 'fullscreen': {
      return <svg id="i-fullscreen" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M4 12 L4 4 12 4 M20 4 L28 4 28 12 M4 20 L4 28 12 28 M28 20 L28 28 20 28" />
      </svg>;
    }

    case 'gift': {
      return <svg id="i-gift" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M4 14 L4 30 28 30 28 14 M2 9 L2 14 30 14 30 9 Z M16 9 C 16 9 14 0 8 3 2 6 16 9 16 9 16 9 18 0 24 3 30 6 16 9 16 9 M16 9 L16 30" />
      </svg>;
    }

    case 'github': {
      return <svg id="i-github" viewBox="0 0 64 64" width={length} height={length}>
          <path strokeWidth={strokeWidth} fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
      </svg>;
    }

    case 'heart': {
      return <svg id="i-heart" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
      </svg>;
    }

    case 'home': {
      return <svg id="i-home" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
      </svg>;
    }

    case 'import': {
      return <svg id="i-import" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 16 L16 24 24 16" />
      </svg>;
    }

    case 'inbox': {
      return <svg id="i-inbox" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 15 L2 25 30 25 30 15 26 7 6 7 Z M2 15 L10 15 C10 15 11 20 16 20 21 20 22 15 22 15 L30 15" />
      </svg>;
    }

    case 'info': {
      return <svg id="i-info" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M16 14 L16 23 M16 8 L16 10" />
          <circle cx="16" cy="16" r="14" />
      </svg>;
    }

    case 'lightning': {
      return <svg id="i-lightning" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M18 13 L26 2 8 13 14 19 6 30 24 19 Z" />
      </svg>;
    }

    case 'link': {
      return <svg id="i-link" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14 24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15" />
      </svg>;
    }

    case 'location': {
      return <svg id="i-location" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="16" cy="11" r="4" />
          <path d="M24 15 C21 22 16 30 16 30 16 30 11 22 8 15 5 8 10 2 16 2 22 2 27 8 24 15 Z" />
      </svg>;
    }

    case 'lock': {
      return <svg id="i-lock" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M5 15 L5 30 27 30 27 15 Z M9 15 C9 9 9 5 16 5 23 5 23 9 23 15 M16 20 L16 23" />
          <circle cx="16" cy="24" r="1" />
      </svg>;
    }

    case 'mail': {
      return <svg id="i-mail" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
      </svg>;
    }

    case 'menu': {
      return <svg id="i-menu" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
      </svg>;
    }

    case 'msg': {
      return <svg id="i-msg" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
      </svg>;
    }

    case 'microphone': {
      return <svg id="i-microphone" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M16 2 C12 2 12 6 12 6 L12 16 C12 16 12 20 16 20 20 20 20 16 20 16 L20 6 C20 6 20 2 16 2 Z M8 17 C8 17 8 24 16 24 24 24 24 17 24 17 M13 29 L19 29 M16 24 L16 29" />
      </svg>;
    }

    case 'minus': {
      return <svg id="i-minus" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 16 L30 16" />
      </svg>;
    }

    case 'mobile': {
      return <svg id="i-mobile" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M21 2 L11 2 C10 2 9 3 9 4 L9 28 C9 29 10 30 11 30 L21 30 C22 30 23 29 23 28 L23 4 C23 3 22 2 21 2 Z M9 5 L23 5 M9 27 L23 27" />
      </svg>;
    }

    case 'moon': {
      return <svg id="i-moon" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
      </svg>;
    }

    case 'move': {
      return <svg id="i-move" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M3 16 L29 16 M16 3 L16 29 M12 7 L16 3 20 7 M12 25 L16 29 20 25 M25 12 L29 16 25 20 M7 12 L3 16 7 20" />
      </svg>;
    }

    case 'music': {
      return <svg id="i-music" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M11 25 L11 6 24 3 24 23 M11 13 L24 10" />
          <ellipse cx="7" cy="25" rx="4" ry="5" />
          <ellipse cx="20" cy="23" rx="4" ry="5" />
      </svg>;
    }

    case 'mute': {
      return <svg id="i-mute" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M20 16 C20 8 15 2 15 2 L8 10 2 10 2 22 8 22 15 30 C15 30 20 24 20 16 Z" />
      </svg>;
    }

    case 'options': {
      return <svg id="i-options" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29" />
      </svg>;
    }

    case 'paperclip': {
      return <svg id="i-paperclip" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M10 9 L10 24 C10 28 13 30 16 30 19 30 22 28 22 24 L22 6 C22 3 20 2 18 2 16 2 14 3 14 6 L14 23 C14 24 15 25 16 25 17 25 18 24 18 23 L18 9" />
      </svg>;
    }

    case 'pause': {
      return <svg id="i-pause" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M23 2 L23 30 M9 2 L9 30" />
      </svg>;
    }

    case 'photo': {
      return <svg id="i-photo" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M20 24 L12 16 2 26 2 2 30 2 30 24 M16 20 L22 14 30 22 30 30 2 30 2 24" />
          <circle cx="10" cy="9" r="3" />
      </svg>;
    }

    case 'play': {
      return <svg id="i-play" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M10 2 L10 30 24 16 Z" />
      </svg>;
    }

    case 'plus': {
      return <svg id="i-plus" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M16 2 L16 30 M2 16 L30 16" />
      </svg>;
    }

    case 'portfolio': {
      return <svg id="i-portfolio" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M29 17 L29 28 3 28 3 17 M2 8 L30 8 30 16 C30 16 24 20 16 20 8 20 2 16 2 16 L2 8 Z M16 22 L16 18 M20 8 C20 8 20 4 16 4 12 4 12 8 12 8" />
      </svg>;
    }

    case 'print': {
      return <svg id="i-print" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M7 25 L2 25 2 9 30 9 30 25 25 25 M7 19 L7 30 25 30 25 19 Z M25 9 L25 2 7 2 7 9 M22 14 L25 14" />
      </svg>;
    }

    case 'reload': {
      return <svg id="i-reload" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2" />
      </svg>;
    }

    case 'reply': {
      return <svg id="i-reply" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M10 6 L3 14 10 22 M3 14 L18 14 C26 14 30 18 30 26" />
      </svg>;
    }

    case 'search': {
      return <svg id="i-search" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="14" cy="14" r="12" />
          <path d="M23 23 L30 30"  />
      </svg>;
    }

    case 'send': {
      return <svg id="i-send" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M2 16 L30 2 16 30 12 20 Z M30 2 L12 20" />
      </svg>;
    }

    case 'settings': {
      return <svg id="i-settings" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />
          <circle cx="16" cy="16" r="4" />
      </svg>;
    }

    case 'sign-in': {
      return <svg id="i-signin" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M3 16 L23 16 M15 8 L23 16 15 24 M21 4 L29 4 29 28 21 28" />
      </svg>
      ;
    }

    case 'sign-out': {
      return <svg id="i-signout" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M28 16 L8 16 M20 8 L28 16 20 24 M11 28 L3 28 3 4 11 4" />
      </svg>;
    }

    case 'star': {
      return <svg id="i-star" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
      </svg>;
    }

    case 'start': {
      return <svg id="i-start" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M8 2 L8 16 22 2 22 30 8 16 8 30" />
      </svg>;
    }

    case 'tag': {
      return <svg id="i-tag" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="24" cy="8" r="2" />
          <path d="M2 18 L18 2 30 2 30 14 14 30 Z" />
      </svg>;
    }

    case 'telephone': {
      return <svg id="i-telephone" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" />
          <circle cx="16" cy="21" r="4" />
      </svg>;
    }

    case 'trash': {
      return <svg id="i-trash" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
      </svg>;
    }

    case 'twitter': {
      return <svg id="i-twitter" viewBox="0 0 64 64" width={length} height={length}>
          <path strokeWidth={strokeWidth} fill="currentColor" d="M60 16 L54 17 L58 12 L51 14 C42 4 28 15 32 24 C16 24 8 12 8 12 C8 12 2 21 12 28 L6 26 C6 32 10 36 17 38 L10 38 C14 46 21 46 21 46 C21 46 15 51 4 51 C37 67 57 37 54 21 Z" />
      </svg>;
    }

    case 'unlock': {
      return <svg id="i-unlock" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M5 15 L5 30 27 30 27 15 Z M9 15 C9 7 9 3 16 3 23 3 23 8 23 9 M16 20 L16 23" />
          <circle cx="16" cy="24" r="1" />
      </svg>;
    }

    case 'upload': {
      return <svg id="i-upload" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 18 L16 14 21 18 M16 14 L16 29" />
      </svg>;
    }

    case 'user': {
      return <svg id="i-user" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
      </svg>;
    }

    case 'video': {
      return <svg id="i-video" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M22 13 L30 8 30 24 22 19 Z M2 8 L2 24 22 24 22 8 Z" />
      </svg>;
    }

    case 'volume': {
      return <svg id="i-volume" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M20 16 C20 8 15 2 15 2 L8 10 2 10 2 22 8 22 15 30 C15 30 20 24 20 16 Z M21 2 C21 2 25 6 25 16 25 26 21 30 21 30 M27 4 C27 4 30 8 30 16 30 24 27 28 27 28" />
      </svg>;
    }

    case 'work': {
      return <svg id="i-work" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <path d="M30 8 L2 8 2 26 30 26 Z M20 8 C20 8 20 4 16 4 12 4 12 8 12 8 M8 26 L8 8 M24 26 L24 8" />
      </svg>;
    }

    case 'zoom-in': {
      return <svg id="i-zoom-in" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="14" cy="14" r="12" />
          <path d="M23 23 L30 30" />
          <path d="M14 10 L14 18 M10 14 L18 14" />
      </svg>;
    }

    case 'zoom-out': {
      return <svg id="i-zoom-out" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="14" cy="14" r="12" />
          <path d="M23 23 L30 30" />
          <path d="M10 14 L18 14" />
      </svg>;
    }

    case 'zoom-reset': {
      return <svg id="i-zoom-reset" viewBox="0 0 32 32" width={length} height={length} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
          <circle cx="14" cy="14" r="12" />
          <path d="M23 23 L30 30" />
          <path d="M9 12 L9 9 12 9 M16 9 L19 9 19 12 M9 16 L9 19 12 19 M19 16 L19 19 16 19" />
      </svg>;
    }

      default:
        return null;
    }
  }

  export type BytesizeIconName
    = 'activity'
  | 'alert'
  | 'archive'
  | 'arrow-bottom'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-top'
  | 'backwards'
  | 'bag'
  | 'ban'
  | 'bell'
  | 'book'
  | 'bookmark'
  | 'calendar'
  | 'camera'
  | 'caret-bottom'
  | 'caret-left'
  | 'caret-right'
  | 'caret-top'
  | 'cart'
  | 'checkmark'
  | 'chevron-bottom'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-top'
  | 'clipboard'
  | 'clock'
  | 'close'
  | 'code'
  | 'compose'
  | 'creditcard'
  | 'desktop'
  | 'download'
  | 'edit'
  | 'eject'
  | 'ellipsis-horizontal'
  | 'ellipsis-vertical'
  | 'end'
  | 'export'
  | 'external'
  | 'eye'
  | 'feed'
  | 'file'
  | 'filter'
  | 'flag'
  | 'folder-open'
  | 'folder'
  | 'forwards'
  | 'fullscreen-exit'
  | 'fullscreen'
  | 'gift'
  | 'github'
  | 'heart'
  | 'home'
  | 'import'
  | 'inbox'
  | 'info'
  | 'lightning'
  | 'link'
  | 'location'
  | 'lock'
  | 'mail'
  | 'menu'
  | 'msg'
  | 'microphone'
  | 'minus'
  | 'mobile'
  | 'moon'
  | 'move'
  | 'music'
  | 'mute'
  | 'options'
  | 'paperclip'
  | 'pause'
  | 'photo'
  | 'play'
  | 'plus'
  | 'portfolio'
  | 'print'
  | 'reload'
  | 'reply'
  | 'search'
  | 'send'
  | 'settings'
  | 'sign-in'
  | 'sign-out'
  | 'star'
  | 'start'
  | 'tag'
  | 'telephone'
  | 'trash'
  | 'twitter'
  | 'unlock'
  | 'upload'
  | 'user'
  | 'video'
  | 'volume'
  | 'work'
  | 'zoom-in'
  | 'zoom-out'
  | 'zoom-reset'
  ;
