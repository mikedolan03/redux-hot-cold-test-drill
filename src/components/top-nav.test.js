import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';
import {RESTART_GAME, GENERATE_AURAL_UPDATE} from '../actions';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    //test a user click to restart game.

    //test a user click to go to help


});