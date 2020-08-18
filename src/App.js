import React, {useState} from 'react';
import {Alert} from 'reactstrap';
import {BrowserView} from 'react-device-detect';
import Navigation from './App/Navigation.js';
import AllRecipes from './App/AllRecipes.js';
import ImportRecipe from './App/ImportRecipe.js'
import EditRecipe from './App/EditRecipe.js';
import Calendar from './App/Calendar.js';

const App = (props) => {
    const [view, setView] = useState(<Calendar />);

    const toggle = (tab, ...props) => {
        console.log(props);
        switch(tab){
            case "calendar":
            setView(<Calendar />);
            break;

            case "all":
            setView(<AllRecipes toggle={toggle}/>);
            break;

            case "import":
            setView(<ImportRecipe />);
            break;

            case "new":
            setView(<EditRecipe id="-1" />)
            break;

            case "edit":
            setView(<EditRecipe id={props[0]} />);
            break;

            default:
            setView(
                <Alert  color="danger">
                    There was an error navigating to the view!
                </Alert >
            );
            break;
        }
    }

    return (
        <BrowserView>
            <Navigation toggle={toggle}/>
            <main>
                {view}
            </main>
        </BrowserView>
    );
}

export default App;
