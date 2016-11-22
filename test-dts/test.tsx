import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '..';

ReactDOM.render(
    <div>
        Search icon: <Icon name="search"/>
        Thin large icon: <Icon name="book" strokeWidth="thin" size="larger"/>
        Thick small icon: <Icon name="flag" strokeWidth="bold"/>
    </div>,
    document.getElementById('test'),
);
