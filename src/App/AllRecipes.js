import React, {useEffect, useState} from 'react';
import {TabPane, Alert, ListGroup } from 'reactstrap';
import RecipeListItem from './RecipeListItem.js';

const AllRecipes = props => {
    const [list, setList] = useState([]);

    const [visible, setVisible] = useState(false);
    const [alert, setAlert] = useState("");
    const onDismiss = () => setVisible(false);
    const displayAlert = message => {
        setAlert(message);
        setVisible(true);
    }

    useEffect(()=>{
        fetch('/Recipe').then(async(res) => {
            if(!res.ok)
                throw await res.json();

            setList(await res.json());
        }).catch(e => {
            console.error(e);
            displayAlert(e.message);
        })
    }, []);

    return (
        <TabPane tabId="all">
            <h2>All Recipes</h2>
            <Alert  color="danger" isOpen={visible} toggle={onDismiss}>
                {alert}
            </Alert >
            <ListGroup className="p-4">
                {list.map(recipe => <RecipeListItem recipe={recipe} />)}
            </ListGroup>
        </TabPane>
    )
}

export default AllRecipes;
