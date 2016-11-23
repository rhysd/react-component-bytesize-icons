import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '..';

ReactDOM.render(
    <div>
        Search icon: <Icon name="search"/>
        Thin large icon: <Icon name="book" thickness="thin" size="larger"/>
        Thick small icon: <Icon name="flag" thickness="bold"/>
    </div>,
    document.getElementById('test'),
);
