import * as A from 'assert';
import * as React from 'react';
import Icon, {BytesizeIconName} from '..';
import {shallow} from 'enzyme';

describe('<Icon>', function () {
    const randomIcons = [
        'search',
        'ellipsis-vertical',
        'arrow-left',
        'arrow-left',
        'volume',
        'chevron-top',
    ] as BytesizeIconName[];

    for (const icon of randomIcons) {
        describe(`name="${icon}"`, function () {
            it('renders icon component', function () {
                const i = shallow(
                    <Icon name={icon}/>
                );
                const body = i.find('svg');
                A.ok(body);
                A.equal(body.props().id, `i-${icon}`);
            });

            it('renders default thickness icon', function () {
                const i = shallow(
                    <Icon name={icon}/>
                );
                const p = i.find('svg').props();
                A.equal(p.width, 32);
                A.equal(p.height, 32);
                A.equal(p.strokeWidth, '6.25%');
            });
        });
    }
});
