import React, {useState} from 'react';
import {TabPane, TabContent} from 'reactstrap';
import {BrowserView} from 'react-device-detect';
import Navigation from './App/Navigation.js';
import AllRecipes from './App/AllRecipes.js';
import ImportRecipe from './App/ImportRecipe.js'
import EditRecipe from './App/EditRecipe.js';

const App = (props) => {
    const [activeTab, setActiveTab] = useState('calendar');
    const [editTarget, setEditTarget] = useState(-1);

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const editRecipe = id => {
        setEditTarget(id);
        toggle("edit");
    }

    return (
        <BrowserView>
            <Navigation toggle={toggle} activeTab={activeTab}/>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="calendar">
                    <h2>Calendar</h2>
                </TabPane>
                <EditRecipe id="-1" title="New Recipe" tab="new" />
                <ImportRecipe editRecipe={editRecipe} />
                <AllRecipes editRecipe={editRecipe} />
                <EditRecipe id={editTarget} title="Edit Recipe" tab="edit"/>
            </TabContent>
        </BrowserView>
    );
}

export default App;
