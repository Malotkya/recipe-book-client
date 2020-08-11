import React from 'react';
import {MobileView} from 'react-device-detect';
import Recipe from './Recipe.js';

const MobileApp = props => {
    return (
        <MobileView>
            <Recipe id="1"/>
        </MobileView>
    )
}

export default MobileApp;
