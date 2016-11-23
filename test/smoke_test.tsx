import * as A from 'assert';
import * as React from 'react';
import Icon, {BytesizeIconName} from '..';
import {shallow} from 'enzyme';

describe('<Icon>', function () {
    const randomIcons = require('./icons.json') as BytesizeIconName[];

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
                A.ok(p.width === undefined || p.width === 32);
                A.ok(p.height === undefined || p.height === 32);
                A.ok(p.strokeWidth === undefined || p.strokeWidth === '6.25%');
            });

            it('can change thickness', function () {
                const i = shallow(
                    <Icon name={icon} thickness="light"/>
                );
                const p = i.find('svg').props();
                A.ok(p.strokeWidth === undefined || p.strokeWidth === '4.6875%');
            });

            it('can change icon size', function () {
                const i = shallow(
                    <Icon name={icon} size="larger"/>
                );
                const p = i.find('svg').props();
                A.ok(p.width === undefined || p.width === 48);
                A.ok(p.height === undefined || p.height === 48);
            });

            it('can change icon size and thickness at the same time', function () {
                const i = shallow(
                    <Icon name={icon} thickness="bold" size="small"/>
                );
                const p = i.find('svg').props();
                A.ok(p.width === undefined || p.width === 24);
                A.ok(p.height === undefined || p.height === 24);

                // Note:
                // Bold font's standard stroke width is 9.375. But it's small sized icon. So the width will be 9.375 - 1.5625 = 7.8125
                A.ok(p.strokeWidth === undefined || p.strokeWidth === '7.8125%');
            });
        });
    }
});
