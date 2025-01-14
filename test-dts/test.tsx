import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Icon from '..';

const root = createRoot(document.getElementById('test')!);
root.render(
    <div>
        Search icon: <Icon name="search"/>
        Thin large icon: <Icon name="book" thickness="thin" size="larger"/>
        Thick small icon: <Icon name="flag" thickness="bold"/>
    </div>,
);
